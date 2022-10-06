
//* Import intefaces
import { LayoutChangeEvent } from 'react-native';
import TGridDirection from './TGridDirection';

interface IGrid {
    children: React.ReactElement[] | React.ReactElement

    role: "container" | "item"

    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     * @default 'row'
     */
    direction?: TGridDirection;

    /**
     * Defines the vertical space between the type `item` components.
     * It overrides the value of the `spacing` prop.
     */
    rowSpacing?: number | string;
    /**
     * Defines the space between the type `item` components.
     * It can only be used on a type `container` component.
     * @default 0
     */
    spacing?: 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    spacingWrap?: boolean

    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline"

    pl?: number | string
    pt?: number | string

    id?: string

    wrap?: "wrap" | "nowrap" | "wrap-reverse"

    /**
     * Callbacks
     */
     onLayout?: (event: LayoutChangeEvent) => void
}

export default IGrid