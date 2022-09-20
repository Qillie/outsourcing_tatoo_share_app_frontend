//* Import libraries
import React from "react"
import { ScrollView, Text } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography, Tab, Divider } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { ThumbnailTypePost } from "../../modules";

//* Import interfaces
import IFavoritesView from "./interfaces/IFavoritesView"

const FavoritesView = (props: IFavoritesView) => {
    //* Modules

    //* States
    const [items, setItems] = React.useState<{
        title: string,
        shopName: string,
        location: string,
        tags: string[],
        price: {
            original: number,
            sale?: number
        }
    }[]>([
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            location: "경기/수원",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15,
                sale: 12
            }
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            location: "경기/수원",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15,
                sale: 12
            }
        }
    ])

    return (
        <Box>
            <Tab 
                tabContents={[
                    {
                        title: "최근 본",
                        element: (
                            <Box>
                                <Grid id={"asdf"} role={"container"}>
                                    {
                                        items.map((item) => (
                                            <Grid role={"item"} xs={12}>
                                                <Divider my={15} />

                                                <Box pl={15} pr={15}>
                                                    <ThumbnailTypePost 
                                                        direction="column"
                                                        borderRadius={7}
                                                        ratio={"4:3"}
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

                                                            {/* Shop name */}
                                                            <Box mb={5}>
                                                                <Typography
                                                                    variant="body1"
                                                                    fontWeight="400"
                                                                >
                                                                    {item.shopName}
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

                                                            {/* Tags */}
                                                            <Box></Box>

                                                            {/* Price */}
                                                            <Box>
                                                                <Typography>
                                                                    {`${item.price.original}만원`}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </ThumbnailTypePost>
                                                </Box>
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