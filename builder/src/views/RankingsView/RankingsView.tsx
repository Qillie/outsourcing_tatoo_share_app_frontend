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
import CardProductPost from "../../widgets/CardProductPost";

//* Import interfaces
import IRankingsView from "./interfaces/IRankingsView"
import VerticalThumbnailPost from "../../widgets/VerticalThumbnailPost";
import IProduct from "../../widgets/CardProductPost/interfaces/IProduct";


const RankingsView = (props: IRankingsView) => {
    //* States
    const [products, setProducts] = React.useState<IProduct[]>([
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
                <Box flexDirection="column">
                    {/* List */}
                    <Box flexDirection="column" px={14}>
                        {
                            products.map((product) => (
                                <Box mb={20}>
                                    <CardProductPost
                                        {...product}
                                    />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default RankingsView