//* Import libraries
import React from "react"
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
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
import IMagazineContentView from "./interfaces/IMagazineContentView"
import VerticalThumbnailPost from "../../widgets/VerticalThumbnailPost";


const MagazineContentView = (props: IMagazineContentView) => {
    //* States
    const [contents, setContents] = React.useState<{
        src: string, 
        title: string,
        link: string,
        views: number,
        category: string
    }[]>([
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게\n선택받은 타투",
            link: "/planned_detail",
            views: 500,
            category: "트렌드/핫이슈"
        },
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            link: "/planned_detail",
            views: 500,
            category: "부위"
        },
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            link: "/planned_detail",
            views: 500,
            category: "주제"
        },
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            link: "/planned_detail",
            views: 500,
            category: "트렌드/핫이슈"
        }
    ])

    return (
        <ScrollView>
            <Box pb={200} flexDirection="column">
                <Box flexDirection="column">
                    {
                        contents.map((content) => (
                            <Link to={content.link}>
                                <View
                                    style={{
                                        width: "100%",
                                        height: 200
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            width: "100%",
                                            height: "100%",
                                            position: "relative"
                                        }}
                                    >
                                        <Image
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0
                                            }}
                                            source={{
                                                uri: content.src
                                            }}
                                        />
                                    </View>

                                    <Box
                                        pl={20}
                                        pb={20}
                                        flexDirection={"column"}
                                        width="100%"
                                        height="100%"
                                        position="absolute"
                                        backgroundColor={`rgba(0, 0, 0, 0.5)`}
                                        alignX={"right"}
                                        alignY={"top"}
                                    >
                                        <Box mb={7}>
                                            <Typography
                                                variant="h2"
                                                color="white"
                                                fontWeight="500"
                                            >
                                                {content.title}
                                            </Typography>
                                        </Box>
                                        
                                        <Box>
                                            <Typography
                                                variant="body1"
                                                color="white"
                                                fontWeight="400"
                                            >
                                                {`${content.category} · 조회수 ${content.views}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </View>
                            </Link>
                        ))
                    }
                </Box>
            </Box>
        </ScrollView>
    )
}

export default MagazineContentView