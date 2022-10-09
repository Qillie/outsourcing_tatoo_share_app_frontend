//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"
import Typography from "../Typography"

//* Import interfaces
import IThumbnail from "./interfaces/IThumbnail"
import { ImageSourcePropType } from "react-native";

const Thumbnail = (props: IThumbnail) => {
    //* States
    const [wrapperSize, setWrapperSize] = React.useState<{width: number | string, height: number | string} | undefined>(undefined)

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

    const calcRatio = (ratioString: string) => {
        let splitRatio = ratioString.split(":")

        return `${Number(splitRatio[1]) / Number(splitRatio[0]) * 100}%`
    }

    const setRatio = () => {
        let style:{ ratio: ViewStyle } = {ratio: {}}

        let selectedRatio = (props.ratio !== undefined) ? props.ratio : "1:1"

        //* Set ratio
        style.ratio.flex = 0.5
        style.ratio.flexDirection="column"
        style.ratio.width = "100%"
        style.ratio.height = "100%"
        style.ratio.position = "relative"
        style.ratio.paddingTop = calcRatio(selectedRatio)

        return StyleSheet.create(style).ratio
    }

    const setStyle = (width: number | string, height: number | string) => {
        let style:{ default: ImageStyle } = { default: {} }

        //* Set basic styles
        style.default.position = "absolute"
        style.default.top = 0
        style.default.left = 0
        style.default.bottom = 0
        style.default.right = 0

        style.default.width = width
        style.default.height = height

        style.default.justifyContent='center'
        style.default.alignItems='center'

        //* Set border
        style.default.borderRadius = props.borderRadius
        style.default.borderBottomLeftRadius = props.borderBottomLeftRadius
        style.default.borderBottomRightRadius = props.borderBottomRightRadius
        style.default.borderTopLeftRadius = props.borderTopLeftRadius
        style.default.borderTopRightRadius = props.borderTopRightRadius

        return StyleSheet.create(style).default
    }

    const setImageSource = () => {
        let imageSource: undefined | ImageSourcePropType = undefined

        if (typeof props.src == "string") {
            imageSource = {
                uri: props.src
            }
        } else {
            imageSource = props.src
        }

        return imageSource
    }

    return (
        <View
            style={setSize()}
        >
            <View
                style={setRatio()}
                onLayout={(event) =>
                    setWrapperSize({
                        width: (props.width !== undefined) ? props.width : event.nativeEvent.layout.width,
                        height: (props.height !== undefined) ? props.height : event.nativeEvent.layout.height
                    })
                }
            >
                {
                    (wrapperSize !== undefined) && (
                        <Image
                            style={setStyle(wrapperSize.width, wrapperSize.height)}
                            source={setImageSource()}
                            resizeMode={"cover"}
                        />
                    )
                }
            </View>
            
            {
                (props.label !== undefined) && (
                    <Box
                        width="100%"
                        height="100%"
                        position="absolute"
                        borderRadius={props.borderRadius}
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