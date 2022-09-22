//* Import libraries
import React from "react"
import { Dimensions, Image, LogBox, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";
import Carousel from 'react-native-reanimated-carousel';

//* Import modules
import { Typography, Tab, Divider, Badge, Thumbnail } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import ThemeCoreSingleton from '../../core/design/ThemeCore/ThemeCoreSingleton';

//* Import interfaces
import IItemDetailsView from "./interfaces/IItemDetailsView"

// LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

const ItemDetailsView = (props: IItemDetailsView) => {
    //* Modules

    //* Constants
    const carouselWidth = Dimensions.get('window').width;

    //* States
    const [images, setImages] = React.useState<string[]>([
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300"
    ])
    const [title, setTitle] = React.useState<string>("수유 레터링 전문점")
    const [location, setLocation] = React.useState<string>("서울 / 강북구")
    const [discountRate, setDiscountRate] = React.useState<number>(0)
    const [originalPrice, setOriginalPrice] = React.useState<number>(0)
    const [salePrice, setSalePrice] = React.useState<number>(0)
    const [tags, setTags] = React.useState<string[]>([])
    const [genre, setGenre] = React.useState<string>("ggg")
    const [topic, setTopic] = React.useState<string>("ggg")
    const [part, setPart] = React.useState<string>("ggg")
    const [size, setSize] = React.useState<string>("ggg")
    const [numOfOperations, setNumOfOperations] = React.useState<number>(0)
    const [timeTaken, setTimeTaken] = React.useState<number>(0)
    const [ment, setMent] = React.useState<string>("ㅎㅇㅎㅇㅇㅎ")

    return (
        <ScrollView>
            <Box flexDirection="column">
                {/* Carousel */}
                <Box 
                    flex={1}
                >
                    <Carousel
                        loop
                        width={carouselWidth}
                        height={250}
                        autoPlay={false}
                        data={images}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ item, index }) => (
                            <Box
                                flex={1}
                                alignX="center"
                                alignY="center"
                                backgroundColor={"red"}
                            >
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    source={{
                                        uri: item
                                    }}
                                />
                            </Box>
                        )}
                    />
                </Box>
                
                {/* Title */}
                <Box>
                    <Typography>
                        {title}
                    </Typography>
                </Box>

                {/* Location */}
                <Box>
                    <Typography>
                        {location}
                    </Typography>
                </Box>

                {/* Price */}
                <Box>
                    <Typography>
                        {`${originalPrice}원`}
                    </Typography>
                </Box>

                {/* Details */}
                <Box flexDirection="column">
                    <Box>
                        <Typography>
                            상세정보
                        </Typography>
                    </Box>

                    <Box>
                        <Grid role="container">
                            <Grid xs={6} role={"item"}>
                                <Box alignX="space-between">
                                    <Typography>
                                        장르
                                    </Typography>

                                    <Typography>
                                        {genre}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={6} role={"item"}>
                                <Box alignX="space-between">
                                    <Typography>
                                        주제
                                    </Typography>

                                    <Typography>
                                        {topic}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Divider my={3} />

                            <Grid xs={6} role={"item"}>
                                <Box alignX="space-between">
                                    <Typography>
                                        부위
                                    </Typography>

                                    <Typography>
                                        {part}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={6} role={"item"}>
                                <Box alignX="space-between">
                                    <Typography>
                                        사이즈
                                    </Typography>

                                    <Typography>
                                        {size}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Divider my={3} />

                            <Grid xs={6} role={"item"}>
                                <Box alignX="space-between">
                                    <Typography>
                                        작업횟수
                                    </Typography>

                                    <Typography>
                                        {`${numOfOperations}회`}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={6} role={"item"}>
                                <Box alignX="space-between">
                                    <Typography>
                                        소요시간
                                    </Typography>

                                    <Typography>
                                        {`${timeTaken}시간`}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                
                {/* Words */}
                <Box flexDirection="column">
                    <Box>
                        <Typography>
                            타투이스트 한마디
                        </Typography>
                    </Box>

                    <Box>
                        <Typography>
                            {ment}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default ItemDetailsView