//* Import libraries
import React from "react"
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { Tab } from "../../core/display";
import { Thumbnail } from "../../core/display";

//* Import interfaces
import IMainView from "./interfaces/IMainView"

const MainView = (props: IMainView) => {
    //* Modules

    //* States
    const [thumbnailWidth, setThumbnailWidth] = React.useState<number>(0)

    const [genreItems, setGenreItems] = React.useState<{src: string, label: string, link: string}[]>([
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
            <View>
            <ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
                <Box 
                    pl={16} 
                    pr={16} 
                    flexDirection="column" 
                    flex={1}
                    width={(thumbnailWidth * 5) + 16}
                >
                    <Box mb={16}>
                        <Grid
                            wrap="nowrap"
                            role="container"
                            spacing={1}
                        >

                            {
                                genreItems.map((genreItem) => (
                                    <Grid role="item" xs={4} onLayout={
                                        (e) => {
                                            setThumbnailWidth(e.nativeEvent.layout.width)
                                        }
                                    }>
                                        <Link to={genreItem.link}>
                                            <Thumbnail
                                                src={"https://reactnative.dev/img/tiny_logo.png"}
                                                borderRadius={10}
                                                label={genreItem.label}
                                                labelBackgroundOpacity={0.5}
                                            />
                                        </Link>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        
                    </Box>

                    <Box>
                        <Grid
                            wrap="nowrap"
                            role="container"
                            spacing={1}
                        >

                            {
                                genreItems.map((genreItem) => (
                                    <Grid role="item" xs={4}>
                                        <Link to={genreItem.link}>
                                            <Thumbnail
                                                src={"https://reactnative.dev/img/tiny_logo.png"}
                                                borderRadius={10}
                                                label={genreItem.label}
                                                labelBackgroundOpacity={0.5}
                                            />
                                        </Link>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        
                    </Box>
                </Box>
                
            </ScrollView>
            </View>

            {/* <Tab
                // contentsDirection="horizontal"
                tabContents={[
                    {
                        title: "장르",
                        element: (
                            <Box backgroundColor="red">
                                
                                
                            </Box>
                        )
                    },
                    {
                        title: "주제",
                        element: (
                            <Box>
                                <Thumbnail
                                    src={"https://reactnative.dev/img/tiny_logo.png"}
                                    borderRadius={10}
                                />
                            </Box>
                        )
                    }
                ]}
            /> */}
        </Box>
    )
}

export default MainView