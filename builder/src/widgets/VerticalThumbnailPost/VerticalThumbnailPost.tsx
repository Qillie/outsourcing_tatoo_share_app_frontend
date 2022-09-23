//* Import libraries
import React from "react"
import { Pressable } from "react-native";
import { useNavigate } from 'react-router-native';

//* Import modules
import { Typography } from "../../core/display"
import { Box, Grid } from "../../core/layout"
import { ThumbnailTypePost } from "../../modules";
import { ThemeCoreSingleton } from "../../core/design";

//* Import interfaces
import IVerticalThumbnailPost from "./interfaces/IVerticalThumbnailPost"

const VerticalThumbnailPost = (props: IVerticalThumbnailPost) => {
    const navigate = useNavigate()

    return (
        <Box>
            <Grid role={"container"} spacing={1} spacingWrap={true}>
                {
                    props.items.map((item) => (
                        <Grid key={item.title} role={"item"} xs={6}>
                            <Box 
                                mb={25}
                            >
                                <Pressable 
                                    onPress={
                                        () => {
                                            navigate(item.link)
                                        }
                                    }
                                    style={{
                                        width: "100%"
                                    }}
                                >
                                    <ThumbnailTypePost
                                        thumbnailWidth="100%"
                                        direction="column"
                                        borderRadius={7}
                                        ratio={"1:1"}
                                        gap={7}
                                    >
                                        <Box flexDirection="column">
                                            {/* Title */}
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Box>

                                            {/* Location */}
                                            <Box mb={5}>
                                                <Typography
                                                    variant="body1"
                                                    fontWeight="400"
                                                    color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                                >
                                                    {item.location}
                                                </Typography>
                                            </Box>

                                            {/* Price */}
                                            <Box alignX="left">
                                                <Box alignY="center">
                                                    <Typography variant="h3" fontWeight="700">
                                                        {`${(item.price.sale !== undefined) ? item.price.sale : item.price.original}만원`}
                                                    </Typography>

                                                    <React.Fragment>
                                                    {
                                                        (item.price.sale !== undefined) && (
                                                            <Box alignY="center">

                                                                <Box>
                                                                    <Typography variant="body1" fontWeight="400">
                                                                        {`${item.price.original}만원`}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        )
                                                    }
                                                    </React.Fragment>
                                                    
                                                    
                                                </Box>
                                            </Box>
                                        </Box>
                                    </ThumbnailTypePost>
                                </Pressable>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default VerticalThumbnailPost