//* Import libraries

//* Import interfaces
import IPalette from '../interfaces/palette/IPalette';
import IPaletteSheet from '../interfaces/palette/IPaletteSheet';
import TConvertableColor from '../interfaces/palette/TConvertableColor';
import { IColorObject, TColorFormat, TColorSpace } from '../interfaces/palette/IColorObject';
import IColor from '../interfaces/palette/IColor';

class PaletteManager {
    //* Members
    public palette?: IPalette

    private clamp(value: number, min = 0, max = 1) {
        if (value < min || value > max) {
            throw new Error(`The value provided ${value} is out of range [${min}, ${max}].`)
        }
      
        return Math.min(Math.max(min, value), max);
    }

    private hexToRgb(color: string) {
        color = color.slice(1);
        const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
        let colors = color.match(re);

        if (colors && colors[0].length === 1) {
            colors = colors.map(n => n + n);
        }

        return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
            return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
        }).join(', ')})` : '';
    }

    private decomposeColor(color: string) {  
        if (color.charAt(0) === '#') {
            color = this.hexToRgb(color)
        }
      
        const marker = color.indexOf('(');
        let type = color.substring(0, marker);
      
        let values: string[] | string = color.substring(marker + 1, color.length - 1);
        let colorSpace;
      
        if (type === 'color') {
            values = values.split(' ');
            colorSpace = values.shift();
      
            if (values.length === 4 && values[3].charAt(0) === '/') {
                values[3] = values[3].slice(1);
            }
            
            if (colorSpace !== undefined) {
                if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
                    throw new Error("Unsupported color")
                }
            } else {
                throw new Error("Color space is undefined")
            }
            
        } else {
            values = values.split(',');
        }
        
        return {
            type: type as TColorFormat,
            values: values,
            colorSpace: colorSpace as TColorSpace
        }
    }

    private recomposeColor(colorObject: IColorObject) {
        const { type, colorSpace } = colorObject;
        let { values } = colorObject;
        let recomposedValues: (string | number)[] = [...values]
        let stringifiedValue: string = ""
      
        if (type.indexOf('rgb') !== -1) {
            // Only convert the first 3 values to int (i.e. not alpha)
            recomposedValues = values.map((n, i) => i < 3 ? parseInt(String(n), 10) : n);

        } else if (type.indexOf('hsl') !== -1) {
            recomposedValues[1] = `${values[1]}%`;
            recomposedValues[2] = `${values[2]}%`;
        }
      
        if (type.indexOf('color') !== -1) {
            stringifiedValue = `${colorSpace} ${recomposedValues.join(' ')}`;
        } else {
            stringifiedValue = `${recomposedValues.join(', ')}`;
        }
      
        return `${type}(${stringifiedValue})`;
    }

    private lighten(color: string, coefficient: number) {
        const decomposedColor = this.decomposeColor(color);
        coefficient = this.clamp(coefficient);
      
        if (decomposedColor.type.indexOf('hsl') !== -1) {
            decomposedColor.values[2] = String(Number(decomposedColor.values[2]) + ((100 - Number(decomposedColor.values[2])) * coefficient)) ;

        } else if (decomposedColor.type.indexOf('rgb') !== -1) {
            for (let i = 0; i < 3; i += 1) {
                decomposedColor.values[i] = String(Number(decomposedColor.values[i]) + ((255 - Number(decomposedColor.values[i])) * coefficient));
            }
            
        } else if (decomposedColor.type.indexOf('color') !== -1) {
            for (let i = 0; i < 3; i += 1) {
                decomposedColor.values[i] = String(Number(decomposedColor.values[i]) + ((1 - Number(decomposedColor.values[i])) * coefficient));
            }
        }
      
        return this.recomposeColor(decomposedColor);
    }

    private darken(color: string, coefficient: number) {
        const decomposedColor = this.decomposeColor(color);
        coefficient = this.clamp(coefficient);
      
        if (decomposedColor.type.indexOf('hsl') !== -1) {
            decomposedColor.values[2] = String((1 - coefficient) * Number(decomposedColor.values[2]))
            
        } else if (decomposedColor.type.indexOf('rgb') !== -1 || decomposedColor.type.indexOf('color') !== -1) {
            for (let i = 0; i < 3; i += 1) {
                decomposedColor.values[i] = String((1 - coefficient) * Number(decomposedColor.values[i]));
            }
        }
      
        return this.recomposeColor(decomposedColor);
    }

    public createPalette(paletteSheet: IPaletteSheet) {
        let palette: IPalette = {
            black: paletteSheet.black,
            background: paletteSheet.background,
        }

        const coefficient = 0.3

        if (paletteSheet.primary !== undefined) {
            palette.primary = {
                main: paletteSheet.primary,
                light: this.lighten(paletteSheet.primary, coefficient)
            }
        }

        for (const target of ["primary", "secondary", "error", "warning", "info", "success"]) {
            if (paletteSheet[target as TConvertableColor] !== undefined) {
                palette[target as TConvertableColor] = {
                    main: paletteSheet[target as TConvertableColor] as string,
                    light: this.lighten(paletteSheet[target as TConvertableColor] as string, coefficient),
                    dark: this.darken(paletteSheet[target as TConvertableColor] as string, coefficient)
                }
            }
        }

        //* Set gray
        const greySet: IColor = {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        }

        palette.grey = greySet
        
        this.palette = palette
    }

    public getColor(target: TConvertableColor, role: "main" | "light" | "dark") {
        let targetColor: string | undefined

        if (this.palette !== undefined) {
            if (this.palette[target] !== undefined) {
                const color = this.palette[target]
                
                if (color !== undefined) {
                    if (color[role] !== undefined) {
                        targetColor = color[role]
                    }
                }
            }
        }

        if (targetColor === undefined) {
            return "#000"
        } else {
            return targetColor
        }
    }
}

export default PaletteManager