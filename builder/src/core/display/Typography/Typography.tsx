//* Import libraries
import React from "react"
import { StyleSheet, Text } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import TTypographyWeights from "../../design/ThemeCore/interfaces/typography/TTypographyWeights"
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

    const setFontFamily = (fontWeight?: TTypographyWeights) => {
        return ThemeCoreSingleton.typograhpyManager.getFontFamily(fontWeight)
    }

    const setDecoration = (style: { default: TextStyle }) => {
        style.default.textDecorationLine = props.decorationLine
    }

    const setStyle = () => {
        let style:{ default: TextStyle } = { default: {} }
        
        style.default.fontSize = setFontSize(props.variant)
        style.default.fontWeight = props.fontWeight
        style.default.color = (props.color !== undefined) ? props.color : ThemeCoreSingleton.paletteManager.palette?.black
        style.default.fontFamily = setFontFamily(props.fontWeight)
        style.default.textAlign = props.textAlign
        style.default.flexWrap = "wrap"

        //* Set decoration
        setDecoration(style)

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Text style={setStyle()}>
            {(typeof props.children == "number") ? props.children.toString() : props.children}
        </Text>
    )
}

export default Typography