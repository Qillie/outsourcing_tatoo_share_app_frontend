//* Import intefaces
import TTypographyWeights from '../../../design/ThemeCore/interfaces/typography/TTypographyWeights';
import TFontVariant from './TFontVariant';

interface ITypography {
    children?: string | React.ReactElement | number
    variant?: TFontVariant
    fontWeight?: TTypographyWeights
    color?: string
    decorationLine?: "none" | "underline" | "line-through" | "underline line-through"
}

export default ITypography