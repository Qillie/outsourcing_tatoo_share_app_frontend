//* Import libraries
import React from "react"
import { ScrollView, Text } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography, Tab } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { ThumbnailTypePost } from "../../modules";

//* Import interfaces
import IFavoritesView from "./interfaces/IFavoritesView"

const FavoritesView = (props: IFavoritesView) => {
    //* Modules

    //* States
    const [items, setItems] = React.useState<number[]>([0, 1, 2, 3, 4, 5, 6])

    return (
        <Box>
            <Tab 
                tabContents={[
                    {
                        title: "최근 본",
                        element: (
                            <Box>
                                <Grid role={"container"}>
                                    {
                                        items.map((item) => (
                                            <Grid role={"item"} xs={6}>
                                                <ThumbnailTypePost 
                                                    direction="column"
                                                />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                
                            </Box>
                        )
                    },
                    {
                        title: "찜",
                        element: (
                            <Box>
                                <Typography>
                                    B
                                </Typography>
                            </Box>
                        )
                    },
                    {
                        title: "대화내역",
                        element: (
                            <Box>
                                <Typography>
                                    C
                                </Typography>
                            </Box>
                        )
                    },
                    {
                        title: "추천",
                        element: (
                            <Box>
                                <Typography>
                                    D
                                </Typography>
                            </Box>
                        )
                    }
                ]}
            />

            
        </Box>
    )
}

export default FavoritesView