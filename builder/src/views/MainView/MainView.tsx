//* Import libraries
import React from "react"
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import HorizontalThumbnails from "./components/HorizontalThumbnails";
import { Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { Tab } from "../../core/display";
import { Thumbnail } from "../../core/display";

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

    return (
        <Box>
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
        </Box>
    )
}

export default MainView