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
    const [originalPrice, setOriginalPrice] = React.useState<number>(15)
    const [salePrice, setSalePrice] = React.useState<number>(5)
    const [tags, setTags] = React.useState<string[]>([])
    const [genre, setGenre] = React.useState<string>("레터링")
    const [topic, setTopic] = React.useState<string>("미용")
    const [part, setPart] = React.useState<string>("팔")
    const [size, setSize] = React.useState<string>("5")
    const [numOfOperations, setNumOfOperations] = React.useState<number>(1)
    const [timeTaken, setTimeTaken] = React.useState<number>(1)
    const [ment, setMent] = React.useState<string>("ㅎㅇㅎㅇㅇㅎ")
    const [warning, setWarning] = React.useState<string>("비의료인의 타투 시술은 '보건범죄 단속에 대한 특별조치법'에 따른 형사 처벌의 대상이 될 수 있습니다. 비의료인은 타투 도안 디자인에 관한 서비스만 제공할 수 있습니다.")

    return (
        <ScrollView>
            <Box flexDirection="column">
                {/* Carousel */}
                <Box
                    mb={25}
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
                
                {/* Informations */}
                <Box px={16} flexDirection="column">
                    {/* Title */}
                    <Box mb={4}>
                        <Typography 
                            variant={"h4"} 
                            fontWeight={"500"}
                        >
                            {title}
                        </Typography>
                    </Box>

                    {/* Location */}
                    <Box mb={2}>
                        <Typography
                            variant={"h5"} 
                            fontWeight={"400"}
                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                        >
                            {location}
                        </Typography>
                    </Box>

                    {/* Price */}
                    <Box mb={40} alignY="center">
                        <React.Fragment>
                            {
                                (salePrice != 0 && originalPrice != 0) && (
                                    <Box mr={8}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="500"
                                            color={ThemeCoreSingleton.paletteManager.getColor("primary", "main")}
                                        >
                                            {`${100 - parseInt(String(salePrice / originalPrice * 100))}%`}
                                        </Typography>
                                    </Box>
                                )
                            }
                        </React.Fragment>

                        <React.Fragment>
                            {
                                (salePrice != 0) && (
                                    <Box mr={8}>
                                        <Typography
                                            variant="h3"
                                            fontWeight="500"
                                            color={ThemeCoreSingleton.paletteManager.getColor("black")}
                                        >
                                            {`${salePrice}만원`}
                                        </Typography>
                                    </Box>
                                )
                            }
                        </React.Fragment>
                        
                        <Box>
                            {
                                (salePrice != 0) ? 
                                    <Typography
                                        variant="h5"
                                        fontWeight="400"
                                        color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                        decorationLine="line-through"
                                    >
                                        {`${originalPrice}만원`}
                                    </Typography>
                                :
                                    <Typography
                                        variant="h3"
                                        fontWeight="500"
                                        color={ThemeCoreSingleton.paletteManager.getColor("black")}
                                    >
                                        {`${originalPrice}만원`}
                                    </Typography>
                            }
                        </Box>
                    </Box>
                </Box>
                
                {/* Details */}
                <Box flexDirection="column">
                    <Box flexDirection="column" mb={16}>
                        <Box px={14} mb={16}>
                            <Typography
                                variant={"h4"} 
                                fontWeight={"500"}
                            >
                                상세정보
                            </Typography>
                        </Box>

                        <Box>
                            <Grid role="container" spacing={1} spacingWrap={true}>
                                <Grid xs={6} role={"item"}>
                                    <Box alignX="space-between" pr={30} alignY="center">
                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"500"}
                                        >
                                            장르
                                        </Typography>

                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"400"}
                                        >
                                            {genre}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid xs={6} role={"item"}>
                                    <Box alignX="space-between" pr={30} alignY="center">
                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"500"}
                                        >
                                            주제
                                        </Typography>

                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"400"}
                                        >
                                            {topic}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Divider mt={16} />

                                <Grid xs={6} role={"item"}>
                                    <Box alignX="space-between" pr={30} alignY="center">
                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"500"}
                                        >
                                            부위
                                        </Typography>

                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"400"}
                                        >
                                            {part}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid xs={6} role={"item"}>
                                    <Box alignX="space-between" pr={30} alignY="center">
                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"500"}
                                        >
                                            사이즈
                                        </Typography>

                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"400"}
                                        >
                                            {size}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Divider mt={16} />

                                <Grid xs={6} role={"item"}>
                                    <Box alignX="space-between" pr={30} alignY="center">
                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"500"}
                                        >
                                            작업횟수
                                        </Typography>

                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"400"}
                                        >
                                            {`${numOfOperations}회`}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid xs={6} role={"item"}>
                                    <Box alignX="space-between" pr={30} alignY="center">
                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"500"}
                                        >
                                            소요시간
                                        </Typography>

                                        <Typography
                                            variant={"h6"} 
                                            fontWeight={"400"}
                                        >
                                            {`${timeTaken}시간`}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Divider mt={16} />
                            </Grid>
                        </Box>
                    </Box>

                    {/* Warning */}
                    <Box px={16} mb={30}>
                        <Typography
                            variant="body2"
                            fontWeight="400"
                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                        >
                            {warning}
                        </Typography>
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
            </Box>
        </ScrollView>
    )
}

export default ItemDetailsView