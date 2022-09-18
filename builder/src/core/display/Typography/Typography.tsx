//* Import libraries
import React from "react"
import { StyleSheet, Text } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import ITypography from "./interfaces/ITypography"
import TFontVariant from "./interfaces/TFontVariant"
import { TextStyle } from "react-native"


const Typography = (props: ITypography) => {
    //* States
    // const [typographyStyle, setTypographyStyle

    //* Functions
    const setFontSize = (variant?: TFontVariant) => {
        return ThemeCoreSingleton.typograhpyManager.getFontSize(variant)
    }

    const setStyle = () => {
        let style:{ default: TextStyle } = { default: {} }
        
        style.default.fontSize = setFontSize(props.variant)
        style.default.fontWeight = props.fontWeight
        style.default.color = (props.color !== undefined) ? props.color : ThemeCoreSingleton.paletteManager.palette?.black

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Text style={setStyle()}>
            {props.children}
        </Text>
    )
}

export default Typography