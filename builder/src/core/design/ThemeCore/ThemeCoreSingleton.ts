
//* Import libraries

//* Import modules
import PaletteManager from './components/PaletteManager';

//* Import interface
import IThemeSheet from './interfaces/theme/IThemeSheet';


class ThemeCore {
    //* Members
    private palette = new PaletteManager()

    private theme: {} = {}

    constructor() {}

    private async setPaletteConfigs() {
        
    }

    private async setTypographyConfigs() {
        // paletteConfig: Palette, breakpointsConfig: Breakpoints, themeConfigBasePath?: string, loadedTypographyConfig?: any
    }

    private async loadPresetThemes() {

    }

    public setTheme(themeSheet: IThemeSheet) {

    }
}

//* Create singleton
const ThemeCoreSingleton = new ThemeCore()

export default ThemeCoreSingleton
