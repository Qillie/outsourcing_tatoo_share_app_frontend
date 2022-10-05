import { LayoutChangeEvent, ViewProps } from "react-native";

interface IBox {
    children?: React.ReactElement[] | React.ReactElement
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
    left?: string | number
    right?: string | number
    top?: string | number
    bottom?: string | number
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
    width?: string | number
    height?: string | number
    minWidth?: string | number
    minHeight?: string | number
    overflow?: "hidden" | "scroll" | "visible"

    /**
     * Alignment style props
     */
    alignX?: "left" | "center" | "right" | "space-between"
    alignY?: "top" | "center" | "bottom"
    alignSelfX?: "left" | "center" | "right"
    alignSelfY?: "top" | "center" | "bottom"

    /**
     * Background style props
     */
    backgroundColor?: string

    /**
     * Flex styles
     */
    flexGrow?: number
    flexDirection?: "row" | "column"
    flex?: number

    /**
     * Transforms
     */
    translateX?: number
    translateY?: number

    /**
     * Callbacks
     */
    onLayout?: (event: LayoutChangeEvent) => void

    /**
     * Shadow
     */
    shadowType?: "0"
}

export default IBox