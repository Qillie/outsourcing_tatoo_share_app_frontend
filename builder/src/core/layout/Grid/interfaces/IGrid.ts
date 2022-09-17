
//* Import intefaces
import TGridDirection from './TGridDirection';

interface IGrid {
    children: React.ReactElement[]

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
    spacing?: number;

    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline"
}

export default IGrid