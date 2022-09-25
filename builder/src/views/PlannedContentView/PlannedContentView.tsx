//* Import libraries
import React from "react"
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../core/display";
import { Box } from "../../core/layout";

//* Import interfaces
import IPlannedContentView from "./interfaces/IPlannedContentView"
import VerticalThumbnailPost from "../../widgets/VerticalThumbnailPost";


const PlannedContentView = (props: IPlannedContentView) => {
    //* States
    const [contents, setContents] = React.useState<{
        src: string, 
        title: string,
        subtitle: string,
        link: string
    }[]>([
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            subtitle: "어떤 소재가 있을까?",
            link: ""
        },
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            subtitle: "어떤 소재가 있을까?",
            link: ""
        },
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            subtitle: "어떤 소재가 있을까?",
            link: ""
        },
        {
            src: "https://picsum.photos/200/300",
            title: "연예인들에게 선택받은 타투",
            subtitle: "어떤 소재가 있을까?",
            link: ""
        }
    ])

    return (
        <ScrollView>
            <Box pb={200} flexDirection="column">
                <Box flexDirection="column">
                    {
                        contents.map((content) => (
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
                                    backgroundColor={`rgba(0, 0, 0, 0.6)`}
                                    alignX={"right"}
                                    alignY={"top"}
                                >
                                    <Box>
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
                                            variant="h5"
                                            color="white"
                                            fontWeight="400"
                                        >
                                            {content.subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            </View>
                        ))
                    }
                </Box>
            </Box>
        </ScrollView>
    )
}

export default PlannedContentView