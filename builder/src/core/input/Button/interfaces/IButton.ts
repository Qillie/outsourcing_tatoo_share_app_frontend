//* Import libraries
import { GestureResponderEvent } from "react-native";
import ITypography from "../../../display/Typography/interfaces/ITypography";
import TConvertableColor from "../../../design/ThemeCore/interfaces/palette/TConvertableColor";

interface IButton {
    iconName?: string
    iconSize?: number
    iconDirection?: "row" | "column"
    iconGap?: number

    children?: string

    /**
     * Defines button type
     * @default "text"
     */
    variant?: "text" | "contained" | "outlined"
    disabled?: boolean
    elevation?: boolean

    size?: "small" | "medium" | "large"
    fullWidth?: boolean

    /**
     * Margin style props
     */
    m?: number | string
    mb?: number | string
    ml?: number | string
    mr?: number | string
    mt?: number | string
    mx?: number | string
    my?: number | string
 
    /**
     * Padding style props
     */
    p?: number | string
    pb?: number | string
    pl?: number | string
    pr?: number | string
    pt?: number | string
    px?: number | string
    py?: number | string

    icon?: React.ReactElement

    /**
     * Typography props
     */
    typographyProps?: ITypography

    /**
     * Callbacks
     */
    onClick?: (event: GestureResponderEvent) => void

    /**
     * Button palette
     */
    buttonPalette?: TConvertableColor | "black" | "grey"

    borderRadius?: number
    fontColor?: string
}

export default IButton