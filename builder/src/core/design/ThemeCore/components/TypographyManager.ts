//* Import interfaces
import ITypography from "../interfaces/typography/ITypography"
import ITypographySheet from "../interfaces/typography/ITypographySheet"
import TTypographyVariant from "../interfaces/typography/TTypographyVariant"

class TypographyManager {
    public typography?: ITypography 
    private fontVariants = ["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2"]

    public createTypograhpy(typographySheet: ITypographySheet) {
        let typography: ITypography = {}

        for (const target of this.fontVariants) {
            if (typographySheet[target as TTypographyVariant] !== undefined) {
                typography[target as TTypographyVariant] = typographySheet[target as TTypographyVariant]
            }
        }

        this.typography = typography
    }

    public getFontSize(variant?: string) {
        if (variant !== undefined && this.typography !== undefined) {
            if (this.fontVariants.indexOf(variant) != -1) {
                return this.typography[variant as TTypographyVariant]
            } else {
                return this.typography["body1"]
            }
        } else {
            return 14
        }
    }
}

export default TypographyManager