//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"
import Typography from "../Typography"

//* Import interfaces
import IThumbnail from "./interfaces/IThumbnail"

const Thumbnail = (props: IThumbnail) => {
    //* States

    //* Functions
    const setSize = () => {
        let style:{ size: ViewStyle } = {size: {
            width: "100%",
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

        let selectedRatio = (props.ratio !== undefined) ? props.ratio : "1:1"

        //* Set ratio
        style.ratio.flex = 0.5
        style.ratio.flexDirection="column"
        style.ratio.width = "100%"
        style.ratio.position = "relative"

        if (selectedRatio == "1:1") {
            style.ratio.paddingTop = "100%"

        } else if (selectedRatio == "16:9") {
            style.ratio.paddingTop = "56.25%"

        } else if (selectedRatio == "4:3") {
            style.ratio.paddingTop = "75%"
            
        } else if (selectedRatio == "3:2") {
            style.ratio.paddingTop = "66.66%"
            
        } else if (selectedRatio == "8:5") {
            style.ratio.paddingTop = "62.5%"
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

        style.default.justifyContent='center'
        style.default.alignItems='center'

        //* Set border
        style.default.borderRadius = props.borderRadius

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
            
            {
                (props.label !== undefined) && (
                    <Box
                        width="100%"
                        height="100%"
                        position="absolute"
                        backgroundColor={`rgba(0, 0, 0, ${(props.labelBackgroundOpacity !== undefined) ? props.labelBackgroundOpacity : 0.5})`}
                        alignX={"center"}
                        alignY={"center"}
                    >
                        <Typography
                            variant={(props.labelVariant !== undefined) ? props.labelVariant : "h3"}
                            color={(props.labelColor !== undefined) ? props.labelColor : "white"}
                            fontWeight={(props.labelFontWeight !== undefined) ? props.labelFontWeight : "700"}
                        >
                            {props.label}
                        </Typography>
                    </Box>
                )
            }
        </View>
    )
}

export default Thumbnail