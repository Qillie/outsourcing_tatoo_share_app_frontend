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
    const [title, setTitle] = React.useState<string>("")
    const [location, setLocation] = React.useState<string>("")
    const [discountRate, setDiscountRate] = React.useState<number>(0)
    const [originalPrice, setOriginalPrice] = React.useState<number>(0)
    const [salePrice, setSalePrice] = React.useState<number>(0)
    const [tags, setTags] = React.useState<string[]>([])
    const [genre, setGenre] = React.useState<string>("")
    const [topic, setTopic] = React.useState<string>("")
    const [part, setPart] = React.useState<string>("")
    const [size, setSize] = React.useState<string>("")
    const [numOfOperations, setNumOfOperations] = React.useState<number>(0)
    const [timeTaken, setTimeTaken] = React.useState<number>(0)
    const [ment, setMent] = React.useState<string>("")

    return (
        <Box flexDirection="column">
            {/* Carousel */}
            <Box flex={1}>
                <Carousel
                    loop
                    width={carouselWidth}
                    height={carouselWidth / 2}
                    autoPlay={true}
                    data={images}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ item, index }) => (
                        <View>
                        <Box
                            flex={1}
                            alignX="center"
                            alignY="center"
                        >
                            <Image
                                style={{
                                    width: "100%",
                                    height: 300
                                }}
                                source={{
                                    uri: item
                                }}
                            />
                        </Box>
                        </View>
                    )}
                />
            </Box>
            
        </Box>
    )
}

export default ItemDetailsView