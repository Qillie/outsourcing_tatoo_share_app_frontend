//* Import libraries
import React from "react"
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import HorizontalThumbnails from "./components/HorizontalThumbnails";
import { Badge, Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { Tab } from "../../core/display";
import { Thumbnail } from "../../core/display";
import { ThemeCoreSingleton } from "../../core/design";
import { ThumbnailTypePost } from "../../modules";

//* Import interfaces
import IMainView from "./interfaces/IMainView"


const MainView = (props: IMainView) => {
    //* Modules

    const [viewItems, setViewItems] = React.useState<{src: string, label: string, link: string}[]>([
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        },
        {
            src: "https://reactnative.dev/img/tiny_logo.png",
            label: "둘러보기",
            link: "/abc"
        }
    ])

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
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            location: "경기/수원",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15
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
        <ScrollView>
            <Box flexDirection="column">
                {/* <View>
                    <HorizontalThumbnails 
                        itemPerRow={10}
                        maxRowLength={2}
                        viewItems={viewItems}
                    />
                </View> */}

                <Tab
                    // contentsDirection="horizontal"
                    tabContents={[
                        {
                            title: "장르",
                            element: (
                                <Box>
                                    <HorizontalThumbnails 
                                        itemPerRow={10}
                                        maxRowLength={2}
                                        viewItems={viewItems}
                                    />
                                </Box>
                            )
                        },
                        {
                            title: "주제",
                            element: (
                                <Box>
                                    <HorizontalThumbnails 
                                        itemPerRow={10}
                                        maxRowLength={2}
                                        viewItems={viewItems}
                                    />
                                </Box>
                            )
                        }
                    ]}
                />

                <Box flexDirection="column">
                    {/* Title */}
                    <Box>
                        <Box flexDirection="column">
                            <Typography>
                                레터링
                            </Typography>

                            <Typography>
                                엄마도 레터링은 괜찮다고 하셨어
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Grid id={"asdf"} role={"container"}>
                            {
                                items.map((item) => (
                                    <Grid key={item.title} role={"item"} xs={6}>
                                        <Box pl={15} pr={15}>
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
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default MainView