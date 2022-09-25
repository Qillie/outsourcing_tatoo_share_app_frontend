//* Import interfaces
import TFontVariant from "../../Typography/interfaces/TFontVariant"
import TTypographyWeights from '../../../design/ThemeCore/interfaces/typography/TTypographyWeights';
import TBoxRatio from "./TBoxRatio"

interface IThumbnail {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    borderRadius?: number
    borderBottomLeftRadius?: number
    borderBottomRightRadius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    ratio?: TBoxRatio
    src: string
    label?: string
    labelBackgroundOpacity?: number
    labelVariant?: TFontVariant
    labelColor?: string
    labelFontWeight?: TTypographyWeights
}

export default IThumbnail