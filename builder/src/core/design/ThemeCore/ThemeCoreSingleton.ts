
//* Import libraries

//* Import modules
import PaletteManager from './components/PaletteManager';
import TypographyManager from './components/TypographyManager';

//* Import interface
import IThemeSheet from './interfaces/theme/IThemeSheet';
import ITheme from './interfaces/theme/ITheme';



class ThemeCore {
    //* Members
    private typograhpyManager = new TypographyManager()
    private paletteManager = new PaletteManager()
    private theme: ITheme | undefined

    private async setPaletteConfigs() {
        
    }

    private async setTypographyConfigs() {
        // paletteConfig: Palette, breakpointsConfig: Breakpoints, themeConfigBasePath?: string, loadedTypographyConfig?: any
    }

    public setTheme(themeSheet: IThemeSheet) {
        //* Set palette
        const palette = this.paletteManager.createPalette(themeSheet.palette)
        const typography = this.typograhpyManager.createTypograhpy(themeSheet.typography)

        this.theme = {
            palette,
            typography
        }

        console.log(this.theme)
    }
}

//* Create singleton
const ThemeCoreSingleton = new ThemeCore()

export default ThemeCoreSingleton
