//* Import libraries
import React from "react"
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

//* Import modules
import { Thumbnail, Typography } from "../../core/display"
import { Box } from "../../core/layout"

//* Import interfaces
import IThumbnailTypePost from "./interfaces/IThumbnailTypePost"

const ThumbnailTypePost = (props: IThumbnailTypePost) => {
    //* States

    //* Functions
    const setChildrenViewStyle = () => {
        let style:{ childrenView: ViewStyle } = { childrenView: {} }
        
        if (props.gap !== undefined) {
            if (props.direction == "column") {
                style.childrenView.marginTop = props.gap
                
            } else if (props.direction == "row") {
                style.childrenView.marginLeft = props.gap

            }
        }

        return StyleSheet.create(style).childrenView
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box width={"100%"} flexDirection={props.direction}>
            <Thumbnail
                borderRadius={props.borderRadius}
                src="https://picsum.photos/200/300"
                ratio={(props.ratio !== undefined) ? props.ratio : "1:1"}
                width={props.thumbnailWidth}
            />

            <View
                style={setChildrenViewStyle()}
            >
                {
                    props.children
                }
            </View>
        </Box>
    )
}

export default ThumbnailTypePost