//* Import libraries
import React from "react"
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

//* Import modules
import { Thumbnail, Typography } from "../../core/display"
import { IconButton } from "../../core/input";
import { Box, Grid } from "../../core/layout"

//* Import interfaces
import IImagePicker from "./interfaces/IImagePicker"

const ImagePicker = (props: IImagePicker) => {
    //* States

    //* Functions

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Grid role="container" spacing={0.5}>
            {
                props.photos.map((photo, photoIndex) => (
                    <Grid role="item" xs={4} key={photo.node.image.uri}>
                        <Box>
                            <Thumbnail 
                                src={photo.node.image}
                            />

                            {/* Selector */}
                            <Box
                                position={"absolute"}
                                right={5}
                                top={5}
                            >
                                <IconButton 
                                    iconName="check"
                                    iconSize={20}
                                    buttonSize={28}
                                    buttonPalette={(props.selectedImageIndex == photoIndex) ? "primary" : "grey"}
                                    variant={"contained"}
                                    onClick={
                                        () => {
                                            props.setSelectedImageIndex(photoIndex)
                                        }
                                    }
                                />
                            </Box>
                        </Box>
                        
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ImagePicker