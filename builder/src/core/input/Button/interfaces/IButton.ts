//* Import libraries
import { GestureResponderEvent, ViewProps } from "react-native";

interface IButton {
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
     * Callbacks
     */
    onClick?: (event: GestureResponderEvent) => void
}

export default IButton