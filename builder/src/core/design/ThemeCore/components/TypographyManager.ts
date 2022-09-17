//* Import interfaces
import ITypography from "../interfaces/typography/ITypography"
import ITypographySheet from "../interfaces/typography/ITypographySheet"
import TTypographyVariant from "../interfaces/typography/TTypographyVariant"

class TypographyManager {
    public createTypograhpy(typographySheet: ITypographySheet) {
        let typography: ITypography = {}

        for (const target of ["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2"]) {
            if (typographySheet[target as TTypographyVariant] !== undefined) {
                typography[target as TTypographyVariant] = typographySheet[target as TTypographyVariant]
            }
        }

        return typography
    }
}

export default TypographyManager