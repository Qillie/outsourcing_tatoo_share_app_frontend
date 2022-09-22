//* Import interfaces
import TFontVariant from "../../Typography/interfaces/TFontVariant"
import TFontWeight from "../../Typography/interfaces/TFontWeight"

interface IThumbnail {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    borderRadius?: number
    ratio?: "1:1" | "4:3" | "3:2" | "8:5" | "16:9"
    src: string
    label?: string
    labelBackgroundOpacity?: number
    labelVariant?: TFontVariant
    labelColor?: string
    labelFontWeight?: TFontWeight
}

export default IThumbnail