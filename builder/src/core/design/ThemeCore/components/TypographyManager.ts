//* Import interfaces
import ITypography from "../interfaces/typography/ITypography"
import ITypographySheet from "../interfaces/typography/ITypographySheet"
import TTypographyVariant from "../interfaces/typography/TTypographyVariant"
import TTypographyWeights from "../interfaces/typography/TTypographyWeights"

class TypographyManager {
    public typography?: ITypography 
    private fontVariants = ["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2"]
    private fontWeights = ["100", "300", "400", "500", "700", "900"]

    public createTypograhpy(typographySheet: ITypographySheet) {
        let typography: ITypography = {}

        //* Create variants
        for (const target of this.fontVariants) {
            if (typography.variants === undefined) {
                typography["variants"] = {}
            }

            if (typographySheet.variants !== undefined) {
                if (typographySheet.variants[target as TTypographyVariant] !== undefined) {
                    typography.variants[target as TTypographyVariant] = typographySheet.variants[target as TTypographyVariant]
                }
            }
        }

        //* Create fonts
        for (const target of this.fontWeights) {
            if (typography.fonts === undefined) {
                typography["fonts"] = {}
            }

            if (typographySheet.fonts !== undefined) {
                if (typographySheet.fonts[target as TTypographyWeights] !== undefined) {
                    typography.fonts[target as TTypographyWeights] = typographySheet.fonts[target as TTypographyWeights]
                }
            }
        }

        this.typography = typography
    }

    public getFontSize(variant?: string) {
        let defaultFontSize: number | undefined = 14

        if (variant !== undefined && this.typography !== undefined) {
            if (this.typography.variants !== undefined) {
                if (this.fontVariants.indexOf(variant) != -1) {
                    defaultFontSize = this.typography.variants[variant as TTypographyVariant]
                } else {
                    defaultFontSize = this.typography.variants["body1"]
                }
            }
        }

        return defaultFontSize
    }

    public getFontFamily(weight?: string) {
        let defaultFontFamily: string | undefined = "NanumMyeongjo"

        if (weight !== undefined && this.typography !== undefined) {
            if (this.typography.fonts !== undefined) {
                if (this.fontVariants.indexOf(weight) != -1) {
                    defaultFontFamily = this.typography.fonts[weight as TTypographyWeights]
                } else {
                    defaultFontFamily = this.typography.fonts["400"]
                }
            }
        }

        return defaultFontFamily
    }
}

export default TypographyManager