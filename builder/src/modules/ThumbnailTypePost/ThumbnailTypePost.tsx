//* Import libraries
import React from "react"
import { StyleSheet, Text } from "react-native"

//* Import modules
import { Thumbnail, Typography } from "../../core/display"
import { Box } from "../../core/layout"

//* Import interfaces
import IThumbnailTypePost from "./interfaces/IThumbnailTypePost"

const ThumbnailTypePost = (props: IThumbnailTypePost) => {
    //* States

    //* Functions

    const setStyle = () => {
        // let style:{ default: TextStyle } = { default: {} }
        
        // style.default.fontSize = setFontSize(props.variant)

        // return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box backgroundColor="blue" width={"100%"}>
            <Thumbnail
                src="https://reactnative.dev/img/tiny_logo.png"
                ratio={"1:1"}
                width={"100%"}
            />

            <Box>
                {
                    props.children
                }
            </Box>
        </Box>
    )
}

export default ThumbnailTypePost