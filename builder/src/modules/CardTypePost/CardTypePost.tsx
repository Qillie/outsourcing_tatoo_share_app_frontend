//* Import libraries
import React from "react"
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

//* Import modules
import { Thumbnail, Typography } from "../../core/display"
import { Box } from "../../core/layout"

//* Import interfaces
import ICardTypePost from "./interfaces/ICardTypePost"

const CardTypePost = (props: ICardTypePost) => {
    //* States

    //* Functions
    const setChildrenViewStyle = () => {
        let style:{ childrenView: ViewStyle } = { childrenView: {} }

        return StyleSheet.create(style).childrenView
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box shadowType="0" width={"100%"} flexDirection={"column"}>
            <Box>
                <Thumbnail
                    borderTopLeftRadius={props.borderRadius}
                    borderTopRightRadius={props.borderRadius}
                    src={(props.src !== undefined) ? props.src : "https://picsum.photos/200/300"} 
                    ratio={(props.ratio !== undefined) ? props.ratio : "16:9"}
                    width={props.thumbnailWidth}
                />
            </Box>

            <Box
                py={10}
                backgroundColor={"white"}
                borderBottomLeftRadius={props.borderRadius}
                borderBottomRightRadius={props.borderRadius}
            >
                <View
                    style={setChildrenViewStyle()}
                >
                    {
                        props.children
                    }
                </View>
            </Box>
        </Box>
    )
}

export default CardTypePost