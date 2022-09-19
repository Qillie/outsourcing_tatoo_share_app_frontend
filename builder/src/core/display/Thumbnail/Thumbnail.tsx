//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IThumbnail from "./interfaces/IThumbnail"

const Thumbnail = (props: IThumbnail) => {
    //* States

    //* Functions
    const setSize = () => {
        let style:{ size: ViewStyle } = {size: {
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
        }}

        //* Set base size
        if (props.width !== undefined) {
            style.size.width = props.width
        }

        if (props.height !== undefined) {
            style.size.height = props.height
        }

        if (props.maxWidth !== undefined) {
            style.size.maxWidth = props.maxWidth
        }

        if (props.maxHeight !== undefined) {
            style.size.maxHeight = props.maxHeight
        }

        return StyleSheet.create(style).size
    }

    const setRatio = () => {
        let style:{ ratio: ViewStyle } = {ratio: {}}

        //* Set ratio
        if (props.ratio !== undefined) {
            style.ratio.width = "100%"
            style.ratio.position = "relative"

            if (props.ratio == "1:1") {
                style.ratio.paddingTop = "100%"

            } else if (props.ratio == "16:9") {
                style.ratio.paddingTop = "56.25%"

            } else if (props.ratio == "4:3") {
                style.ratio.paddingTop = "75%"
                
            } else if (props.ratio == "3:2") {
                style.ratio.paddingTop = "66.66%"
                
            } else if (props.ratio == "8:5") {
                style.ratio.paddingTop = "62.5%"
            }
        }

        return StyleSheet.create(style).ratio
    }

    const setStyle = () => {
        let style:{ default: ImageStyle } = { default: {} }

        //* Set basic styles
        style.default.position = "absolute"
        style.default.top = 0
        style.default.left = 0
        style.default.bottom = 0
        style.default.right = 0

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <View
            style={setSize()}
        >
            <View
                style={setRatio()}
            >
                <Image
                    style={setStyle()}
                    source={{
                        uri: props.src
                    }}
                />
            </View>
        </View>
    )
}

export default Thumbnail