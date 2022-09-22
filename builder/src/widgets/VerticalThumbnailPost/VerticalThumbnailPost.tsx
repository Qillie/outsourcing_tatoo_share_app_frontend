//* Import libraries
import React from "react"

//* Import modules
import { Typography } from "../../core/display"
import { Box, Grid } from "../../core/layout"
import { ThumbnailTypePost } from "../../modules";

//* Import interfaces
import IVerticalThumbnailPost from "./interfaces/IVerticalThumbnailPost"

const VerticalThumbnailPost = (props: IVerticalThumbnailPost) => {
    return (
        <Grid role={"container"} spacing={1}>
            {
                props.items.map((item) => (
                    <Grid key={item.title} role={"item"} xs={6}>
                        <Box mb={25}>
                            <ThumbnailTypePost 
                                thumbnailWidth="100%"
                                direction="column"
                                borderRadius={7}
                                ratio={"1:1"}
                                gap={15}
                            >
                                <Box flexDirection="column">
                                    {/* Title */}
                                    <Box mb={6}>
                                        <Typography
                                            variant="h5"
                                            fontWeight="700"
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>

                                    {/* Location */}
                                    <Box mb={5}>
                                        <Typography
                                            variant="body1"
                                            fontWeight="400"
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
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default VerticalThumbnailPost