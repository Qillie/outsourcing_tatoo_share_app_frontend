//* Import intefaces
import TTypographyWeights from '../../../design/ThemeCore/interfaces/typography/TTypographyWeights';
import TFontVariant from './TFontVariant';

interface ITypography {
    children?: string | React.ReactElement | number
    variant?: TFontVariant
    fontSize?: number
    fontWeight?: TTypographyWeights
    color?: string
    textAlign?: "auto" | "center" | "justify" | "left" | "right"
    decorationLine?: "none" | "underline" | "line-through" | "underline line-through"
}

export default ITypography