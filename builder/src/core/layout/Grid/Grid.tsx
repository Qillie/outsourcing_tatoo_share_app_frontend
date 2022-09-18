//* Import libraries
import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IGrid from "./interfaces/IGrid"
import IRegularBreakpoints from "./interfaces/IRegularBreakpoints"

//* Import styles
import GridStyles from "./styles/GridStyles"

const Grid = (props: IGrid & IRegularBreakpoints) => {
    //* Constants
    const space = 14
    
    //* States
    // const [typographyStyle, setTypographyStyle

    //* Functions
    // const setFontSize = (variant?: TFontVariant) => {
        
    // }

    const setSpacing = (style: { default: ViewStyle }, role: "item" | "container", direction?: "row" | "column") => {
        if (props.spacing !== undefined) {
            
            
            if ( 0 < props.spacing && props.spacing <= 12 ) {
                if (role == "container") {
                    style.default.width = `calc(100% + ${props.spacing * space}px)`
                } else {

                }

            } else if (12 < props.spacing) {

            }
        }
    }

    const setGridContainerStyle = (style: { default: ViewStyle }) => {
        style.default.flexDirection = "row"

        style.default.width = "100%"

        //* Set display
        style.default.display = "flex"

        //* Set flex wrap
        style.default.flexWrap = "wrap"
    }

    const setGridItemStyle = (style: { default: ViewStyle }) => {
        //* Set base style
        if (typeof props.xs == "number") {
            style.default = Object.assign(GridStyles[`grid-item-${props.xs}`], style.default)
        } else if (props.xs == true) {
            style.default  = Object.assign(GridStyles[`grid-item-auto`], style.default)
        }
    }

    const setStyle = () => {
        let style:{ default: ViewStyle } = {default: {
            //* Set justify contents
            justifyContent: props.justifyContent,

            //* Set align items
            alignItems: props.alignItems
        }}

        if (props.role == "container") {
            setGridContainerStyle(style)
        } else {
            setGridItemStyle(style)
        }

        console.log(StyleSheet.create(style).default)

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
        // console.log(React.Children.toArray(props.children))
    }, [])

    return (
        <View style={setStyle()}>
            {props.children}
        </View>
    )
}

export default Grid