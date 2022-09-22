//* Import intefaces
import { GestureResponderEvent } from "react-native";

interface IIconButton {
    background?: string
    fontColor?: string
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

     size?: "small" | "medium" | "large"

     /**
     * Callbacks
     */
    onClick?: (event: GestureResponderEvent) => void
}

export default IIconButton