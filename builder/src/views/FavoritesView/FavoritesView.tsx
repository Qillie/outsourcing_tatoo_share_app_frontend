//* Import libraries
import React from "react"
import { ScrollView, Text } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography, Tab, Divider, Badge } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { ThumbnailTypePost } from "../../modules";
import ThemeCoreSingleton from '../../core/design/ThemeCore/ThemeCoreSingleton';

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
                original: 15
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
                                            <Grid key={item.title} role={"item"} xs={12}>
                                                <Divider my={15} />

                                                <Box pl={15} pr={15}>
                                                    <ThumbnailTypePost 
                                                        
                                                        thumbnailWidth={"40%"}
                                                        direction="row"
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
                                                            <Box mb={12}>
                                                                {
                                                                    item.tags.map((tag) => (
                                                                        <Box mr={7} key={tag}>
                                                                            <Badge>
                                                                                {tag}
                                                                            </Badge>
                                                                        </Box>
                                                                    ))
                                                                }
                                                            </Box>

                                                            {/* Price */}
                                                            <Box alignX="right">
                                                                <Box alignY="center">
                                                                    <React.Fragment>
                                                                    {
                                                                        (item.price.sale !== undefined) && (
                                                                            <Box alignY="center">
                                                                                <Badge 
                                                                                    fontColor="white" 
                                                                                    background={ThemeCoreSingleton.paletteManager.getColor("primary", "main")}
                                                                                    fontVariant={"body1"}
                                                                                    px={8}
                                                                                    py={5}
                                                                                    borderRadius={20}
                                                                                >
                                                                                    할인
                                                                                </Badge>

                                                                                <Box ml={4} mr={4}>
                                                                                    <Typography variant="body1" fontWeight="400">
                                                                                        {`${item.price.original}만원`}
                                                                                    </Typography>
                                                                                </Box>
                                                                            </Box>
                                                                        )
                                                                    }
                                                                    </React.Fragment>
                                                                    
                                                                    <Typography variant="h3" fontWeight="700">
                                                                        {`${(item.price.sale !== undefined) ? item.price.sale : item.price.original}만원`}
                                                                    </Typography>
                                                                </Box>
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