//* Import libraries

//* Import interfaces
import IPalette from '../interfaces/palette/IPalette';
import IPaletteSheet from '../interfaces/palette/IPaletteSheet';
import { IColorObject, TColorFormat, TColorSpace } from '../interfaces/palette/IColorObject';

class PaletteManager {
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
            decomposedColor.values[2] += (100 - Number(decomposedColor.values[2])) * coefficient;

        } else if (decomposedColor.type.indexOf('rgb') !== -1) {
            for (let i = 0; i < 3; i += 1) {
                decomposedColor.values[i] += (255 - Number(decomposedColor.values[i])) * coefficient;
            }
            
        } else if (decomposedColor.type.indexOf('color') !== -1) {
            for (let i = 0; i < 3; i += 1) {
                decomposedColor.values[i] += (1 - Number(decomposedColor.values[i])) * coefficient;
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

    }
}

export default PaletteManager