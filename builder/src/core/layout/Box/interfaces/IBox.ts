import { ViewProps } from "react-native";

interface IBox {
    children: React.ReactElement[] | React.ReactElement
    viewProps?: ViewProps

    /**
     * Border style props
     */
    borderRadius?: number
    borderWidth?: number
    borderColor?: string
    borderTopWidth?: number
    borderRightWidth?: number
    borderBottomWidth?: number
    borderLeftWidth?: number
    borderTopColor?: string
    borderRightColor?: string
    borderBottomColor?: string
    borderLeftColor?: string
    borderBottomLeftRadius?: number
    borderBottomRightRadius?: number
    borderTopLeftRadius?: number
    borderTopRightRadius?: number
    hidden?: boolean

    /**
     * Position style props
     */
    left?: string
    right?: string
    top?: string
    bottom?: string
    position?: "absolute" | "relative"
    zIndex?: number

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

    /**
     * Size style props
     */
    width?: string
    height?: string
    minWidth?: string
    minHeight?: string

    /**
     * Alignment style props
     */
    alignX?: "left" | "center" | "right"
    alignY?: "top" | "middle" | "bottom"

    /**
     * Background style props
     */
    backgroundColor?: string
}

export default IBox