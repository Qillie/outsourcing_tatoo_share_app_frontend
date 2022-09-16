//* Import libraries
import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IGrid from "./interfaces/IGrid"
import IRegularBreakpoints from "./interfaces/IRegularBreakpoints"

const Grid = (props: IGrid & IRegularBreakpoints) => {
    //* States
    // const [typographyStyle, setTypographyStyle

    //* Functions
    // const setFontSize = (variant?: TFontVariant) => {
        
    // }

    const setGridContainerStyle = (style: { default: ViewStyle }) => {
        //* Set display
        style.default.display = "flex"

        //* Set justify contents
        style.default.justifyContent = props.justifyContent

        //* Set align items
        style.default.alignItems = props.alignItems
    }

    const setGridItemStyle = (style: { default: ViewStyle }) => {

    }

    const setStyle = () => {
        let style:{ default: ViewStyle } = { default: {} }

        if (props.role == "container") {
            setGridContainerStyle(style)
        } else {
            setGridItemStyle(style)
        }

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <View style={setStyle()}>
            {props.children}
        </View>
    )
}

export default Grid