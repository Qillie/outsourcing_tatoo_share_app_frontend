//* Import libraries
import React from "react"
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Link, Outlet, useNavigate } from "react-router-native";
import Icon from "react-native-vector-icons/MaterialIcons";

//* Import modules
import { PermissionManager } from "../../core/base";
import { Avatar, Divider, Modal, Thumbnail, Typography, Accordion, Badge } from "../../core/display";
import { Button, IconButton, TextField } from "../../core/input";
import { Box, Grid } from "../../core/layout";
import { ThemeCoreSingleton } from "../../core/design";
import { Carousel } from "../../core/display";
import { ImagePicker } from "../../modules";

//* Import interfaces
import IQuoteRequestView from "./interfaces/IQuoteRequestView"
import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";



const QuoteRequestView = (props: IQuoteRequestView) => {
    //* Modules
    const navigate = useNavigate()
    const permission = new PermissionManager()
    
    /**
     * States
     */
    const [page, setPage] = React.useState<number>(0)

    // Basic
    const [mainService, setMainService] = React.useState<string | null>(null)
    
    //* Photos
    const [photos, setPhotos] = React.useState<PhotoIdentifier[]>([])
    const [selectedThumbnailPhotoIndex, setSelectedThumbnailPhotoIndex] = React.useState<number | null>(null)
    const [isImagePickerModalVisible, setImagePickerModalIsVisible] = React.useState<boolean>(false)
    const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoIdentifier | null>(null)

    //* Genre
    const [genreIndex, setGenreIndex] = React.useState<number | null>(null)
    const [isGenrePickerModalVisible, setIsGenrePickerModalVisible] = React.useState<boolean>(false)
    const [genreDataList, setGenreDataList] = React.useState<{src: string, label: string}[]>([
        {
            src: "https://picsum.photos/200/300",
            label: "블랙위크"
        },
        {
            src: "https://picsum.photos/200/300",
            label: "블랙앤그레이"
        },
        {
            src: "https://picsum.photos/200/300",
            label: "올드스쿨"
        },
        {
            src: "https://picsum.photos/200/300",
            label: "뉴스쿨"
        },
        {
            src: "https://picsum.photos/200/300",
            label: "이레즈미"
        }
    ])

    //* Keyword
    const [keyword, setKeyword] = React.useState<string>("")
    const [risingKeyword, setRisingKeyword] = React.useState<string[]>([
        "가족사진", "고래", "꽃", "나비", "레터링", "나침반", "반려동물", "뱀", "장미", "호랑이"
    ])
    const [recommendedKeyword, setRecommendedKeyword] = React.useState<string[]>([
        "가족사진", "고래", "꽃", "나비", "레터링", "나침반", "반려동물", "뱀", "장미", "호랑이"
    ])

    //* Tatto part
    const [tatooPart, setTatooPart] = React.useState<{part: string, detail: string} | null>(null)
    const [selectedTattoPartSection, setSelectedTattoPartSection] = React.useState<number>(0)
    const [isTatooPartPickerModalVisible, setIsTatooPartPickerModalVisible] = React.useState<boolean>(false)
    const [tatooPartList, setTatooPartList] = React.useState<{part: string, detailList: string[]}[]>([
        {
            part: "팔",
            detailList: [
                "팔 위쪽(상박) - 바깥 부분",
                "팔 위쪽(상박) - 안쪽 부분",
                "팔 위쪽(상박) - 전체 두르기",
                "팔 아래쪽(하박) - 바깥 부분",
                "팔 아래쪽(하박) - 안쪽 부분",
                "팔 아래쪽(하박) - 전체 두르기",
                "팔꿈치",
                "긴팔",
                "가슴 반팔",
                "가슴 긴팔"
            ]
        },
        {
            part: "하체",
            detailList: [
                "허벅지 - 앞 부분",
                "허벅지 - 뒷 부분",
                "허벅지 - 전체 두르기",
                "무릎",
                "정강이",
                "종아리",
                "발목",
                "발등",
                "발가락",
                "발바닥",
            ]
        },
        {
            part: "몸통",
            detailList: [
                "쇄골",
                "어깨",
                "가슴 한쪽",
                "양쪽 가슴 전체",
                "명치",
                "옆구리",
                "골반(장골)",
                "가슴 반팔",
                "가슴 긴팔",
                "앞판 전체",
            ]
        },
        {
            part: "등",
            detailList: [
                "날개뼈",
                "등 - 윗부분",
                "등 - 아랫 부분 (허리)",
                "등 반판 (세로방향으로 반파 ",
                "등 전체"
            ]
        },
        {
            part: "손",
            detailList: [
                "손목",
                "손등",
                "손가락",
                "손날",
                "손바닥",
                "손톱"
            ]
        },
        {
            part: "머리, 얼굴, 목",
            detailList: [
                "귀",
                "귀 뒷부분",
                "목",
                "두피",
                "얼굴 (눈썹 위, 이마, 구레나룻, 턱)",
                "입술"
            ]
        }
    ])

    //* Tatto size
    const [tatooSize, setTatooSize] = React.useState<string | null>(null)
    const [tatooSizeDirectInputWidth, setTatooSizeDirectInputWidth] = React.useState<string>("")
    const [tatooSizeDirectInputHeight, setTatooSizeDirectInputHeight] = React.useState<string>("")
    const [selectedTatooSizeIndex, setSelectedTatooSizeIndex] = React.useState<number | null>(null)
    const [isTatooSizePickerModalVisible, setIsTatooSizePickerModalVisible] = React.useState<boolean>(false)
    const [tatooSizeList, setTatooSizeList] = React.useState<{main: string, sub?: string}[]>([
        {
            main: "직접 입력"
        },
        {
            main: "미니 5cm 이하"
        },
        {
            main: "A4 1/4",
            sub: "ex: 엽서, 손바닥 크기"
        },
        {
            main: "A4 1/2",
            sub: "ex: 다이어리, 아래 팔 한쪽 면 채울 정도"
        },
        {
            main: "A4",
            sub: "ex: 한쪽 위 팔, 한쪽 가슴, 한쪽 허벅지 채울 정도"
        },
        {
            main: "A4 2장",
            sub: "ex: 양쪽 가슴, 허벅지 전체 두를 정도"
        },
        {
            main: "A4 4장",
            sub: "ex: 등 전체 채울 정도"
        },
        {
            main: "팔 전체 (긴 팔)"
        },
        {
            main: "다리 전체 (긴 다리)"
        },
        {
            main: "등 전체 (등 한판)"
        },
    ])

    //* Location
    const [selectedLocations, setSelectedLocations] = React.useState<number[]>([])
    const [locationList, setLocationList] = React.useState<string[]>([
        "서울",
        "홍대/신촌",
        "이태원",
        "강남",
        "경기남부",
        "경기북부",
        "인천",
        "부산",
        "대구",
        "대전",
        "전북",
        "전남",
        "충북",
        "충남",
        "경북",
        "경남",
        "울산",
        "광주",
        "강원",
        "세종",
        "제주도"
    ])

    /**
     * Functions
     */ 
    const onClickNextPage = () => {
        setPage(page + 1)
    }

    const divideListByLength = (targetList: any[], length: number) => {
        let dividedLists: any[][] = []
        let dividedList: any[] = []

        targetList.map((element, index) => {
            if (dividedList.length < 4) {
                dividedList.push(element)
            } else {
                dividedLists.push([...dividedList])
                dividedList = [element]
            }

            if (index == targetList.length - 1) {
                dividedLists.push([...dividedList])
            }
        })

        return dividedLists
    }

    const isTattoSizeSelectorActivated = () => {
        let isActivated = false
        
        if (selectedTatooSizeIndex !== null) {
            if (selectedTatooSizeIndex == 0) {
                if (tatooSizeDirectInputWidth.length != 0 && tatooSizeDirectInputHeight.length != 0) {
                    isActivated = true
                }
            } else {
                isActivated = true
            }
        }

        return isActivated
    }

    const onClickThumbnailImageUpload = () => {
        //* Get photo library permission
        permission.getPhotos().then((result) => {
            //* Open modal
            if (result !== null) {
                result.edges.map((edge) => {
                    console.log(edge.node.image)
                })

                setPhotos(result.edges)
                setImagePickerModalIsVisible(true)
            }
        })
    }

    const appendKeyword = (target: string) => {
        if (keyword.length == 0) {
            setKeyword(target)
        } else {
            setKeyword(`${keyword}, ${target}`)
        }
    }

    //* Constants
    const dividedLocationList = divideListByLength(locationList, 4)

    //* Hooks
    React.useEffect(() => {
    }, [])



    return (
        <ScrollView style={{height: "100%"}}>
            <Carousel
                page={page}
                setPage={setPage}
                sliderWidth={"100%"}
                itemWidth={"80%"}
                contents={[
                    {
                        key: "0",
                        args: {
                            title: "어떤 타투 도안을 \n희망하세요?",
                            subtitle: "유형",
                            content: (
                                <Box 
                                    flexDirection="column"
                                >
                                    {/* Input */}
                                    <Box mb={20}>
                                        <Grid role="container">
                                            <Grid role="item" xs={6}>
                                                <Box pr={5}>
                                                    <Button
                                                        onClick={() => {
                                                            setMainService("new")
                                                        }}
                                                        fullWidth
                                                        variant={(mainService == "new") ? "contained" : "outlined"}
                                                        buttonPalette="primary"
                                                        borderRadius={5}
                                                        typographyProps={{
                                                            variant: "body1"
                                                        }}
                                                        size={"medium"}
                                                    >
                                                        새로운 타투
                                                    </Button>
                                                </Box>
                                            </Grid>

                                            <Grid role="item" xs={6}>
                                                <Box pl={5}>
                                                    <Button
                                                        onClick={() => {
                                                            setMainService("cover")
                                                        }}
                                                        fullWidth
                                                        variant={(mainService == "cover") ? "contained" : "outlined"} 
                                                        buttonPalette="primary"
                                                        borderRadius={5}
                                                        typographyProps={{
                                                            variant: "body1"
                                                        }}
                                                        size={"medium"}
                                                    >
                                                        커버업 타투
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant={"body2"}
                                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")}
                                        >
                                            터치업, 리터치, 기존 타투 또는 흉터 커버업 등의 타투 도안이 필요한 경우에는 커버업 타투를 선택해주세요.
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "1",
                        args: {
                            title: "참고할 만한 \n사진이 있으신가요?",
                            subtitle: "참고 사진",
                            content: (
                                <Box>
                                    <Modal
                                        onClose={() => {
                                            setSelectedThumbnailPhotoIndex(null)
                                        }}
                                        title="사진"
                                        headerElement={
                                            (closeModal) => {
                                                return (
                                                    <Box pr={17}>
                                                        <Button
                                                            onClick={() => {
                                                                if (selectedThumbnailPhotoIndex !== null) {
                                                                    setSelectedPhoto(photos[selectedThumbnailPhotoIndex])
                                                                    closeModal()
                                                                }
                                                            }}
                                                            fontColor={
                                                                (selectedThumbnailPhotoIndex !== null) ?
                                                                ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                                :
                                                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")
                                                            }
                                                            typographyProps={{
                                                                variant: "h5"
                                                            }}
                                                        >
                                                            확인
                                                        </Button>
                                                    </Box>
                                                )
                                            }
                                        }
                                        variant="drawer"
                                        isVisible={isImagePickerModalVisible}
                                        setIsVisible={setImagePickerModalIsVisible}
                                    >
                                        <ImagePicker
                                            photos={photos}
                                            selectedImageIndex={selectedThumbnailPhotoIndex}
                                            setSelectedImageIndex={setSelectedThumbnailPhotoIndex}
                                        />
                                    </Modal>

                                    {
                                        (selectedPhoto !== null) ?
                                        <Box
                                            mb={10}
                                        >
                                            <Thumbnail
                                                height={170}
                                                borderRadius={10}
                                                src={selectedPhoto.node.image}
                                            />

                                            <Box
                                                position="absolute"
                                                top={5}
                                                right={5}
                                            >
                                                <IconButton
                                                    variant={"contained"}
                                                    background={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "100")}
                                                    fontColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")}
                                                    iconName="close"
                                                    iconSize={22}
                                                    buttonSize={36}
                                                    onClick={() => {
                                                        setSelectedPhoto(null)
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        :
                                        <Box
                                            onClick={(e) => {
                                                onClickThumbnailImageUpload()
                                            }}
                                            alignX="center" 
                                            alignY="center" 
                                            height={170} 
                                            width={"100%"}
                                            borderRadius={10}
                                            backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "200")}
                                        >
                                            <Box flexDirection="column">
                                                <Box alignX="center">
                                                    <Icon 
                                                        name={"camera-alt"} 
                                                        size={45} 
                                                        color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")}
                                                    />
                                                </Box>

                                                <Box alignX="center">
                                                    <Typography
                                                        variant="h5"
                                                        color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                                    >
                                                        사진 추가
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    }
                                </Box>
                            )
                        }
                    },
                    {
                        key: "2",
                        args: {
                            title: "희망하는 타투 장르는 \n무엇인가요?",
                            subtitle: "타투 장르",
                            content: (
                                <Box>
                                    <Box
                                        onClick={() => {
                                            setIsGenrePickerModalVisible(true)
                                        }} 
                                        pb={5} 
                                        borderBottomColor="black" 
                                        borderBottomWidth={1} 
                                        alignY="center" 
                                        alignX="space-between"
                                    >
                                        <Box width={"90%"}>
                                            <Typography variant={"body1"}>
                                                {
                                                    (genreIndex === null) ?
                                                    "장르를 선택해주세요."
                                                    :
                                                    genreDataList[genreIndex].label
                                                }
                                            </Typography>
                                        </Box>

                                        <Box width={"10%"} alignX={"right"}>
                                            <Icon
                                                name={"keyboard-arrow-down"} 
                                                size={25} 
                                                color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                            />
                                        </Box>
                                    </Box>

                                    <Modal
                                        onClose={() => {}}
                                        title="장르 선택"
                                        variant="drawer"
                                        isVisible={isGenrePickerModalVisible}
                                        setIsVisible={setIsGenrePickerModalVisible}
                                    >
                                        <Grid
                                            role="container"
                                            spacing={1}
                                        >
                                            {
                                                genreDataList.map((genreData, index) => (
                                                    <Grid key={genreData.label} role="item" xs={4}>
                                                        <Box
                                                            onClick={() => {
                                                                setGenreIndex(index)
                                                                setIsGenrePickerModalVisible(false)
                                                            }}
                                                        >
                                                            <Thumbnail
                                                                src={genreData.src}
                                                                borderRadius={10}
                                                                label={genreData.label}
                                                                labelBackgroundOpacity={0.5}
                                                            />
                                                        </Box>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Modal>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "4",
                        args: {
                            title: "무엇을 주제로한 타투를\n희망하세요?",
                            subtitle: "타투 주제",
                            content: (
                                <Box 
                                    flexDirection="column"
                                >
                                    <Box>
                                        <TextField
                                            fullWidth
                                            value={keyword}
                                            setValue={setKeyword}
                                            placeholder={"ex) 나침반과 뱀"}
                                        />
                                    </Box>

                                    <Box mt={5} mb={30}>
                                        <Typography 
                                            variant={"body2"}
                                            color={ThemeCoreSingleton.paletteManager.getColor("primary", "main")}
                                        >
                                            주제를 입력하면 견적서가 더 빠르고 정확하게 도착합니다.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
                                            <Box>
                                                <Box 
                                                    pl={10} 
                                                    mr={10}
                                                    pt={7.5} 
                                                    width={220} 
                                                    height={140} 
                                                    backgroundColor={"rgba(0, 0, 255, 0.2)"}
                                                    flexDirection={"column"}
                                                >
                                                    <Box
                                                        mb={10}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            fontWeight="500"
                                                        >
                                                            급상승 키워드
                                                        </Typography>
                                                    </Box>

                                                    <Box width={"100%"} height={90}>
                                                        <ScrollView>
                                                            <Box flexWrap={"wrap"} width={"100%"}>
                                                                {
                                                                    risingKeyword.map((element) => (
                                                                        <Box mb={4} mr={4}>
                                                                            <Badge
                                                                                minWidth={30}
                                                                                key={element}
                                                                                fontVariant={"subtitle1"}
                                                                                background={"white"}
                                                                                fontColor={"rgba(0, 0, 255, 0.5)"}
                                                                                onClick={() => {
                                                                                    appendKeyword(element)
                                                                                }}
                                                                            >
                                                                                {element}
                                                                            </Badge>
                                                                        </Box>
                                                                    ))
                                                                }
                                                            </Box>
                                                        </ScrollView>
                                                    </Box>
                                                </Box>

                                                <Box 
                                                    pl={10} 
                                                    pt={7.5} 
                                                    width={220} 
                                                    height={140} 
                                                    backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                                                    flexDirection={"column"}
                                                >
                                                    <Box
                                                        mb={10}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            fontWeight="500"
                                                        >
                                                            추천 키워드
                                                        </Typography>
                                                    </Box>

                                                    <Box width={"100%"} height={90}>
                                                        <ScrollView>
                                                            <Box flexWrap={"wrap"} width={"100%"}>
                                                                {
                                                                    recommendedKeyword.map((element) => (
                                                                        <Box mb={4} mr={4}>
                                                                            <Badge
                                                                                minWidth={30}
                                                                                key={element}
                                                                                fontVariant={"subtitle1"}
                                                                                background={"white"}
                                                                                fontColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")}
                                                                                onClick={() => {
                                                                                    appendKeyword(element)
                                                                                }}
                                                                            >
                                                                                {element}
                                                                            </Badge>
                                                                        </Box>
                                                                    ))
                                                                }
                                                            </Box>
                                                        </ScrollView>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </ScrollView>
                                    </Box>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "5",
                        args: {
                            title: "어떤 부위의 타투 도안을\n희망하세요?",
                            subtitle: "타투 부위",
                            content: (
                                <Box>
                                    <Box
                                        onClick={() => {
                                            setIsTatooPartPickerModalVisible(true)
                                        }} 
                                        pb={5} 
                                        borderBottomColor="black" 
                                        borderBottomWidth={1} 
                                        alignY="center" 
                                        alignX="space-between"
                                    >
                                        <Box width={"90%"}>
                                            <Typography variant={"body1"}>
                                                {
                                                    (tatooPart === null) ?
                                                    "부위를 선택해주세요."
                                                    :
                                                    tatooPart.detail
                                                }
                                            </Typography>
                                        </Box>

                                        <Box width={"10%"} alignX={"right"}>
                                            <Icon
                                                name={"keyboard-arrow-down"} 
                                                size={25} 
                                                color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                            />
                                        </Box>
                                    </Box>

                                    <Modal
                                        onClose={() => {}}
                                        title="부위 선택"
                                        variant="drawer"
                                        isVisible={isTatooPartPickerModalVisible}
                                        setIsVisible={setIsTatooPartPickerModalVisible}
                                    >
                                        <Box>
                                            <Box
                                                width={"30%"} 
                                                flexDirection={"column"}
                                                height={675}
                                                backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                                            >
                                                {
                                                    tatooPartList.map((element, elementIndex) => (
                                                        <Box
                                                            borderBottomColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                                                            borderBottomWidth={1}
                                                            py={17}
                                                            alignX={"center"}
                                                            width={"100%"}
                                                            onClick={() => {
                                                                setSelectedTattoPartSection(elementIndex)
                                                            }}
                                                            backgroundColor={
                                                                (selectedTattoPartSection == elementIndex) ?
                                                                "white" 
                                                                :
                                                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")
                                                            }
                                                        >
                                                            <Typography 
                                                                variant={"h6"}
                                                                color={
                                                                    (selectedTattoPartSection == elementIndex) ?
                                                                    "black" 
                                                                    :
                                                                    ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")
                                                                }
                                                            >
                                                                {element.part}
                                                            </Typography>
                                                        </Box>
                                                    ))
                                                }
                                            </Box>

                                            <Box
                                                width={"70%"}
                                                pl={20}
                                            >
                                                <ScrollView>
                                                    {
                                                        tatooPartList[selectedTattoPartSection].detailList.map((detailPart) => (
                                                            <Box
                                                                onClick={() => {
                                                                    setTatooPart({
                                                                        part: tatooPartList[selectedTattoPartSection].part,
                                                                        detail: detailPart
                                                                    })
                                                                    setIsTatooPartPickerModalVisible(false)
                                                                }}
                                                                borderBottomColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                                                                borderBottomWidth={1}
                                                                py={17}
                                                            >
                                                                <Typography 
                                                                    variant={"h6"}
                                                                >
                                                                    {detailPart}
                                                                </Typography>
                                                            </Box>
                                                        ))
                                                    }
                                                </ScrollView>
                                            </Box>
                                        </Box>
                                    </Modal>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "6",
                        args: {
                            title: "타투 도안의 사이즈를\n선택해주세요!",
                            subtitle: "타투 사이즈",
                            content: (
                                <Box>
                                    <Box
                                        onClick={() => {
                                            setIsTatooSizePickerModalVisible(true)
                                        }} 
                                        pb={5} 
                                        borderBottomColor="black" 
                                        borderBottomWidth={1} 
                                        alignY="center" 
                                        alignX="space-between"
                                    >
                                        <Box width={"90%"}>
                                            <Typography variant={"body1"}>
                                                {
                                                    (tatooSize === null) ?
                                                    "사이즈를 선택해주세요."
                                                    :
                                                    tatooSize
                                                }
                                            </Typography>
                                        </Box>

                                        <Box width={"10%"} alignX={"right"}>
                                            <Icon
                                                name={"keyboard-arrow-down"} 
                                                size={25} 
                                                color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                            />
                                        </Box>
                                    </Box>

                                    <Modal
                                        onClose={() => {
                                            setTatooSizeDirectInputWidth("")
                                            setTatooSizeDirectInputHeight("")
                                            setSelectedTatooSizeIndex(null)
                                        }}
                                        title="사이즈 선택"
                                        variant="drawer"
                                        isVisible={isTatooSizePickerModalVisible}
                                        setIsVisible={setIsTatooSizePickerModalVisible}
                                        headerElement={
                                            (closeModal) => {
                                                return (
                                                    <Box pr={17}>
                                                        <Button
                                                            onClick={() => {
                                                                if (isTattoSizeSelectorActivated()) {
                                                                    if (selectedTatooSizeIndex !== null) {
                                                                        if (selectedTatooSizeIndex == 0) {
                                                                            setTatooSize(`${tatooSizeDirectInputWidth} x ${tatooSizeDirectInputHeight}`)
                                                                        } else {
                                                                            setTatooSize(tatooSizeList[selectedTatooSizeIndex].main)
                                                                        }
                                                                    }
                                                                    
                                                                    closeModal()
                                                                } 
                                                            }}
                                                            fontColor={(isTattoSizeSelectorActivated()) ?
                                                                ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                                :
                                                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")
                                                            }
                                                            typographyProps={{
                                                                variant: "h5"
                                                            }}
                                                        >
                                                            확인
                                                        </Button>
                                                    </Box>
                                                )
                                            }
                                        }
                                    >
                                        <Box flexDirection="column" px={14}>
                                            {
                                                tatooSizeList.map((element, index) => (
                                                    <React.Fragment>
                                                        {
                                                            (index == 0) ?
                                                            <Box
                                                                alignX={"space-between"}
                                                                width={"100%"}
                                                                py={17}
                                                                borderBottomColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                                                                borderBottomWidth={1}
                                                                onClick={() => {
                                                                    setSelectedTatooSizeIndex(index)
                                                                }}
                                                            >
                                                                <Box
                                                                    alignY="center"
                                                                >
                                                                    <Box mr={10}>
                                                                        <Typography
                                                                            variant={"h5"}
                                                                            color={
                                                                                (selectedTatooSizeIndex == index) ?
                                                                                ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                                                :
                                                                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")

                                                                            }
                                                                        >
                                                                            {element.main}
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                
                                                                <Box alignY="center">
                                                                    <Box width={100}>
                                                                        <TextField
                                                                            fullWidth
                                                                            value={tatooSizeDirectInputWidth}
                                                                            setValue={setTatooSizeDirectInputWidth}
                                                                            placeholder={"가로 cm"}
                                                                            onBlur={
                                                                                (text) => {
                                                                                    if (text.length != 0) {
                                                                                        setTatooSizeDirectInputWidth(
                                                                                            `${tatooSizeDirectInputWidth.replace(/cm/gi, "")}cm`
                                                                                        )
                                                                                    }
                                                                                }
                                                                            }
                                                                        />
                                                                    </Box>

                                                                    <Box mx={6}>
                                                                        <Icon 
                                                                            name={"close"} 
                                                                            size={24} 
                                                                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")}
                                                                        />
                                                                    </Box>

                                                                    <Box width={100}>
                                                                        <TextField
                                                                            fullWidth
                                                                            value={tatooSizeDirectInputHeight}
                                                                            setValue={setTatooSizeDirectInputHeight}
                                                                            placeholder={"세로 cm"}
                                                                            onBlur={
                                                                                (text) => {
                                                                                    if (text.length != 0) {
                                                                                        setTatooSizeDirectInputHeight(
                                                                                            `${tatooSizeDirectInputHeight.replace(/cm/gi, "")}cm`
                                                                                        )
                                                                                    }
                                                                                }
                                                                            }
                                                                        />
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                            :
                                                            <Box 
                                                                alignX={"space-between"}
                                                                width={"100%"}
                                                                py={17}
                                                                borderBottomColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                                                                borderBottomWidth={1}
                                                                onClick={() => {
                                                                    setSelectedTatooSizeIndex(index)
                                                                }}
                                                            >
                                                                <Box
                                                                    alignY="center"
                                                                >
                                                                    <Box mr={10}>
                                                                        <Typography
                                                                            variant={"h5"}
                                                                            color={
                                                                                (selectedTatooSizeIndex == index) ?
                                                                                ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                                                :
                                                                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")

                                                                            }
                                                                        >
                                                                            {element.main}
                                                                        </Typography>
                                                                    </Box>

                                                                    {
                                                                        (element.sub !== undefined) && (
                                                                            <Box>
                                                                                <Typography
                                                                                    variant={"body1"}
                                                                                    color={
                                                                                        (selectedTatooSizeIndex == index) ?
                                                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                                                        :
                                                                                        ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")
        
                                                                                    }
                                                                                >
                                                                                    {element.sub}
                                                                                </Typography>
                                                                            </Box>
                                                                        )
                                                                    }
                                                                </Box>
                                                                
                                                                {
                                                                    (selectedTatooSizeIndex == index) && (
                                                                        <Box>
                                                                            <Icon 
                                                                                name={"check"} 
                                                                                size={24} 
                                                                                color={ThemeCoreSingleton.paletteManager.getColor("primary", "main")}
                                                                            />
                                                                        </Box>
                                                                    )
                                                                }
                                                            </Box>
                                                        }
                                                    </React.Fragment>
                                                ))
                                            }
                                        </Box>
                                    </Modal>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "7",
                        args: {
                            title: "방문할 수 있는 지역은\n어디인가요?",
                            subtitle: "지역",
                            content: (
                                <Box 
                                    width={"100%"}
                                    flexDirection="column"
                                >
                                    {/* Input */}
                                    {
                                        dividedLocationList.map((dividedList, dividedListIndex) => (
                                            <Box
                                                width={"100%"}
                                            >
                                                {
                                                    dividedList.map((element, elementIndex) => (
                                                        <Box
                                                            py={8}
                                                            width={"25%"}
                                                            alignX={"center"}
                                                            borderTopWidth={(dividedListIndex == 0) ? 1 : 0}
                                                            borderBottomWidth={1}
                                                            borderLeftWidth={(elementIndex == 0) ? 1 : 0}
                                                            borderRightWidth={1}
                                                            borderTopLeftRadius={(elementIndex == 0 && dividedListIndex == 0) ? 10 : 0}
                                                            borderTopRightRadius={(elementIndex == (dividedList.length - 1) && dividedListIndex == 0) ? 10 : 0}
                                                            borderBottomRightRadius={(elementIndex == (dividedList.length - 1) && dividedListIndex == dividedLocationList.length - 1) ? 10 : 0}
                                                            borderBottomLeftRadius={(elementIndex == (dividedList.length - 1) && dividedListIndex == dividedLocationList.length - 1) ? 10 : 0}
                                                        >
                                                            <Typography>
                                                                {element}
                                                            </Typography>
                                                            
                                                        </Box>
                                                    ))
                                                }
                                            </Box>
                                        ))
                                    }
                                </Box>
                            )
                        }
                    }
                ]}
                render={
                    ({item, index}) => {
                        return (
                            <Box
                                width={"100%"}
                                alignX={"center"}
                                alignY={"center"}
                                height={550}
                            >
                                <Box
                                    
                                    borderRadius={10}
                                    width={"100%"}
                                    height={"90%"}
                                    shadowType={"0"}
                                    backgroundColor={"white"}
                                    
                                    flexDirection="column"
                                >
                                    <Box
                                        p={20}
                                        flexDirection="column"
                                    >
                                        <Box mb={20}>
                                            <Typography
                                                fontWeight="700"
                                                variant="h2"
                                            >
                                                {item.args.title}
                                            </Typography>
                                        </Box>

                                        <Box mb={10}>
                                            <Typography
                                                color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")}
                                                fontWeight="400"
                                                variant="h6"
                                            >
                                                {item.args.subtitle}
                                            </Typography>
                                        </Box>

                                        <Box>
                                            {
                                                item.args.content
                                            }
                                        </Box>
                                    </Box>

                                    <Box
                                        width={"100%"}
                                        position={"absolute"}
                                        bottom={20}
                                        alignX={"center"}
                                        px={20}
                                    >
                                        <Button
                                            onClick={onClickNextPage}
                                            fullWidth
                                            disabled={false}
                                            variant="contained"
                                            buttonPalette="primary"
                                            borderRadius={5}
                                            typographyProps={{
                                                variant: "h6"
                                            }}
                                            size={"large"}
                                        >
                                            다음으로
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                }
            />
        </ScrollView>
    )
}

export default QuoteRequestView