
//* Import libraries

//* Import modules
import PaletteManager from './components/PaletteManager';
import TypographyManager from './components/TypographyManager';

//* Import interface
import IThemeSheet from './interfaces/theme/IThemeSheet';
import ITheme from './interfaces/theme/ITheme';



class ThemeCore {
    //* Members
    public typograhpyManager = new TypographyManager()
    public paletteManager = new PaletteManager()
    public theme: ITheme | undefined

    public setTheme(themeSheet: IThemeSheet) {
        //* Set palette
        this.paletteManager.createPalette(themeSheet.palette)
        this.typograhpyManager.createTypograhpy(themeSheet.typography)

        this.theme = {
            palette: this.paletteManager.palette,
            typography: this.typograhpyManager.typography
        }

        console.log(this.theme)
    }
}

//* Create singleton
const ThemeCoreSingleton = new ThemeCore()

export default ThemeCoreSingleton
