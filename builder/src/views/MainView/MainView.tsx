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
        link: string,
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
            link: "/item",
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
            link: "/item",
            location: "경기/수원",
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
                    <Box alignX={"space-between"} alignY={"center"}>
                        <Box flexDirection="column">
                            <Typography>
                                레터링
                            </Typography>

                            <Typography>
                                엄마도 레터링은 괜찮다고 하셨어
                            </Typography>
                        </Box>

                        <IconButton />
                    </Box>

                    <Box>
                        <VerticalThumbnailPost
                            items={items}
                        />
                    </Box>
                    
                    <Divider my={10}></Divider>

                    <Box>
                        <Box width={"100%"} alignX="center">
                            <Typography>
                                + 다른 타투 더보기
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default MainView