//* Import libraries
import React from "react"
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import HorizontalThumbnails from "./components/HorizontalThumbnails";
import { Badge, Divider, Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { Tab } from "../../core/display";
import { Thumbnail } from "../../core/display";
import { ThemeCoreSingleton } from "../../core/design";
import { ThumbnailTypePost } from "../../modules";
import { IconButton } from "../../core/input";

//* Import interfaces
import IMainView from "./interfaces/IMainView"
import VerticalThumbnailPost from "../../widgets/VerticalThumbnailPost";
import IProduct from "../../widgets/CardProductPost/interfaces/IProduct";


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

    const [items, setItems] = React.useState<IProduct[]>([
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            link: "/item",
            location: "경기/수원",
            src: "https://picsum.photos/200/300",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 16,
                sale: 5
            }
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            link: "/item",
            location: "경기/수원",
            src: "https://picsum.photos/200/300",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15
            }
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            link: "/item",
            location: "경기/수원",
            src: "https://picsum.photos/200/300",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15,
                sale: 12
            }
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            link: "/item",
            location: "경기/수원",
            src: "https://picsum.photos/200/300",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15
            }
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            link: "/item",
            location: "경기/수원",
            src: "https://picsum.photos/200/300",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15,
                sale: 12
            }
        },
        {
            title: "가족 생일 타투",
            shopName: "Black hands tatoo",
            link: "/item",
            location: "경기/수원",
            src: "https://picsum.photos/200/300",
            tags: ["당일예약", "주차가능"],
            price: {
                original: 15
            }
        }
    ])

    return (
        <ScrollView>
            <Box pb={200} flexDirection="column">
                <Tab
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
                        },
                        {
                            title: "부위",
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
                            title: "지역",
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
                    <Link to="">
                        <Box px={16} py={16} alignX={"space-between"} alignY={"center"}>
                            <Box flexDirection="column">
                                <Typography variant={"h4"} fontWeight={"500"}>
                                    레터링
                                </Typography>

                                <Typography variant={"h5"}>
                                    엄마도 레터링은 괜찮다고 하셨어
                                </Typography>
                            </Box>

                            <IconButton iconSize={25} iconName="arrow-forward-ios" fontColor={ThemeCoreSingleton.paletteManager.getColor("black")} />
                        </Box>
                    </Link>

                    <Box>
                        <VerticalThumbnailPost
                            items={items}
                        />
                    </Box>
                    
                    <Divider my={10}></Divider>

                    <Link to="">
                        <Box my={6}>
                            <Box width={"100%"} alignX="center">
                                <Box mr={4}>
                                    <Typography
                                        color={ThemeCoreSingleton.paletteManager.getColor("primary", "main")}
                                        variant={"h6"}
                                        fontWeight={"500"}
                                    >
                                        + 다른 타투
                                    </Typography>
                                </Box>

                                <Typography
                                    variant={"h6"}
                                    fontWeight={"500"}
                                >
                                    더보기
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default MainView