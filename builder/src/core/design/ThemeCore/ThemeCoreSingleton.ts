//* Import libraries

//* Import modules

//* Import interface


class ThemeCore {
    //* Variables
    private themePresetDict: {} = {}

    constructor() {
        //* Load presets
        this.loadPresetThemes().then((presetThemes) => {
            this.themePresetDict = presetThemes
        })
    }

    private async setPaletteConfigs(themeConfigBasePath?: string, loadedPaletteConfig?: any) {
        //* Set fallback config
        loadedPaletteConfig = (loadedPaletteConfig !== undefined) ? loadedPaletteConfig : {} 
        const targetPaletteConfig = (themeConfigBasePath !== undefined) ? await this.loadConfig(this.mergePath(themeConfigBasePath, "paletteConfig.json")) : loadedPaletteConfig

        const paletteConfig = createPalette(targetPaletteConfig as PaletteOptions)

        return paletteConfig
    }

    private async setTypographyConfigs(paletteConfig: Palette, breakpointsConfig: Breakpoints, themeConfigBasePath?: string, loadedTypographyConfig?: any) {
        //* Set fallback config
        loadedTypographyConfig = (loadedTypographyConfig !== undefined) ? loadedTypographyConfig : {} 
        const targetTypographyConfig = (themeConfigBasePath !== undefined) ? await this.loadConfig(this.mergePath(themeConfigBasePath, "typographyConfig.json")) : loadedTypographyConfig

        //* Abstract font family
        const typographyConfigSet = this.typographyHandlerModule.parseTypographyConfig(targetTypographyConfig, paletteConfig, breakpointsConfig)

        return typographyConfigSet
    }

    private async loadPresetThemes() {

    }
}

//* Create singleton
const ThemeCoreSingleton = new ThemeCore()

export default ThemeCoreSingleton
