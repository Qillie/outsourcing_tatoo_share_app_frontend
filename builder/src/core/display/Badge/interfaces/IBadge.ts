//* Import intefaces
import TFontVariant from '../../Typography/interfaces/TFontVariant';

interface IBadge {
    children?: string
    px?: string | number
    py?: string | number
    background?: string
    borderRadius?: number
    fontVariant?: TFontVariant
    fontColor?: string
    onClick?: () => void
    minWidth?: number
}

export default IBadge