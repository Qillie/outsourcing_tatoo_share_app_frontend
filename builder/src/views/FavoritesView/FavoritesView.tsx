//* Import libraries
import React from "react"
import { ScrollView, Text } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography, Tab } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";

//* Import interfaces
import IFavoritesView from "./interfaces/IFavoritesView"

const FavoritesView = (props: IFavoritesView) => {
    //* Modules

    //* States

    return (
        <Box>
            <Tab 
                tabContents={[
                    {
                        title: "최근 본",
                        element: (
                            <Box>
                                <Typography>
                                    AasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfgAasdasdasdasfdfggsdfgsdfgfg
                                </Typography>
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