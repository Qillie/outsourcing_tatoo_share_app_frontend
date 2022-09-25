//* Import libraries
import React from "react"
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../core/display";
import { Box } from "../../core/layout";
import { CardTypePost } from "../../modules";

//* Import interfaces
import IPlannedContentDetailsView from "./interfaces/IPlannedContentDetailsView"


const PlannedContentDetailsView = (props: IPlannedContentDetailsView) => {
    //* States
    const [imageSrc, setImageSrc] = React.useState<string>("https://picsum.photos/200/300")
    const [title, setTitle] = React.useState<string>("연예인들에게 선택받은 타투")
    const [subtitle, setSubtitle] = React.useState<string>("어떤 소재가 있을까?")
    const [introduce, setIntroduce] = React.useState<string>("연예인들에게 선택받은 타투\n무엇이 있을까?")


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
                {/* Thumbnail */}
                <Box>
                    <View
                        style={{
                            width: "100%",
                            height: 250
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
                                    uri: imageSrc
                                }}
                            />
                        </View>

                        <Box
                            flexDirection={"column"}
                            width="100%"
                            height="100%"
                            position="absolute"
                            backgroundColor={`rgba(0, 0, 0, 0.6)`}
                            alignX={"center"}
                            alignY={"center"}
                        >
                            <Box mb={5}>
                                <Typography
                                    variant="h1"
                                    color="white"
                                    fontWeight="500"
                                >
                                    {title}
                                </Typography>
                            </Box>
                            
                            <Box>
                                <Typography
                                    variant="h5"
                                    color="white"
                                    fontWeight="500"
                                >
                                    {subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    </View>
                </Box>

                {/* Introduction */}
                <Box>
                    <Box
                        width={"100%"}
                        height={100}
                        flexDirection={"column"}
                        alignX={"center"}
                        alignY={"center"}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="500"
                            textAlign="center"
                        >
                            {introduce}
                        </Typography>
                    </Box>
                </Box>

                {/* List */}
                <Box flexDirection="column">
                    {
                        contents.map((content) => (
                            <CardTypePost
                                thumbnailWidth={"100%"}
                            />
                        ))
                    }
                </Box>
            </Box>
        </ScrollView>
    )
}

export default PlannedContentDetailsView