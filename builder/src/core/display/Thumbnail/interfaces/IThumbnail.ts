//* Import interfaces
import TFontVariant from "../../Typography/interfaces/TFontVariant"
import TFontWeight from "../../Typography/interfaces/TFontWeight"
import TBoxRatio from "./TBoxRatio"

interface IThumbnail {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    borderRadius?: number
    ratio?: TBoxRatio
    src: string
    label?: string
    labelBackgroundOpacity?: number
    labelVariant?: TFontVariant
    labelColor?: string
    labelFontWeight?: TFontWeight
}

export default IThumbnail