//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import IAvatar from "./interfaces/IAvatar"

const Avatar = (props: IAvatar) => {
    //* States

    //* Functions
    const setStyle = () => {
        let style:{ default: ImageStyle } = { default: {} }

        //* Set basic styles
        style.default.width = props.diameter
        style.default.height = props.diameter

        //* Set border
        style.default.borderRadius = props.diameter / 2

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <Image
            style={setStyle()}
            source={{
                uri: props.src
            }}
        />
    )
}

export default Avatar