//* Import libraries
import React from "react"
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Link, Outlet, useNavigate } from "react-router-native";
import Postcode from '@actbase/react-daum-postcode';
import Icon from "react-native-vector-icons/MaterialIcons";

//* Import modules
import { PermissionManager } from "../../core/base";
import { Avatar, Divider, Modal, Thumbnail, Typography, Accordion, Carousel } from "../../core/display";
import { Button, IconButton, TextField } from "../../core/input";
import { Box, Grid } from "../../core/layout";
import { ThemeCoreSingleton } from "../../core/design";
import { ImagePicker } from "../../modules";

//* Import interfaces
import IWorkUploadView from "./interfaces/IWorkUploadView"
import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";


const WorkUploadView = (props: IWorkUploadView) => {
    //* Modules
    const permission = new PermissionManager()

    /**
     * States
     */
    // Basic
    const [page, setPage] = React.useState<number>(0)
    const [workType, setWorkType] = React.useState<string | null>(null)

    //* Photos
    const [photos, setPhotos] = React.useState<PhotoIdentifier[]>([])
    const [selectedWorkPhotoIndex, setSelectedWorkPhotoIndex] = React.useState<number | null>(null)
    const [workPhotoIndexList, setWorkPhotoIndexList] = React.useState<number[]>([])

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

    //* Style
    const [styleIndex, setStyleIndex] = React.useState<number | null>(null)
    const [isStylePickerModalVisible, setIsStylePickerModalVisible] = React.useState<boolean>(false)
    const [styleDataList, setStyleDataList] = React.useState<{label: string}[]>([
        {
            label: "심플한"
        },
        {
            label: "감성적인"
        },
        {
            label: "귀여운"
        },
        {
            label: "시크한"
        },
        {
            label: "섹시한"
        }
    ])

    //* Tatto topic
    const [tatooTopic, setTatooTopic] = React.useState<string | null>(null)
    const [tatooTopicDirectInput, setTatooTopicDirectInput] = React.useState<string>("")
    const [selectedTatooTopicIndex, setSelectedTatooTopicIndex] = React.useState<number | null>(null)
    const [isTatooTopicPickerModalVisible, setIsTatooTopicPickerModalVisible] = React.useState<boolean>(false)
    const [tatooTopicList, setTatooTopicList] = React.useState<{main: string}[]>([
        {
            main: "직접 입력"
        },
        {
            main: "꽃"
        },
        {
            main: "장미"
        },
        {
            main: "고래"
        },
        {
            main: "맹수"
        },
        {
            main: "뱀"
        },
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

    //* Tatto information
    const [tatooInformation, setTatooInformation] = React.useState<string | null>(null)
    const [isTatooInformationPickerModalVisible, setIsTatooInformationPickerModalVisible] = React.useState<boolean>(false)

    const [numOfOperations, setNumOfOperations] = React.useState<string>("")

    const [hourOfWork, setHourOfWork] = React.useState<string>("")
    const [minuteOfWork, setMinuteOfWork] = React.useState<string>("")

    const [price, setPrice] = React.useState<string>("")
    const [priceBeforeSale, setPriceBeforeSale] = React.useState<string>("")
    const [priceAfterSale, setPriceAfterSale] = React.useState<string>("")

    const [isOnSale, setIsOnSale] = React.useState<boolean>(false)

    const [allowIsPaymentDivided, setAllowIsPaymentDivided] = React.useState<boolean>(false)
    const [allowSameDayReservation, setAllowSameDayReservation] = React.useState<boolean>(false)

    //* Modals
    const [isWorkPhotoSelectorModalVisible, setIsWorkPhotoSelectorIsVisible] = React.useState<boolean>(false)

    /**
     * Functions
     */ 
    const onClickNextPage = () => {
        setPage(page + 1)
    }

    const onClickWorkImageUpload = () => {
        //* Get photo library permission
        permission.getPhotos().then((result) => {
            //* Open modal
            if (result !== null) {
                result.edges.map((edge) => {
                    console.log(edge.node.image)
                })

                setPhotos(result.edges)
                setIsWorkPhotoSelectorIsVisible(true)
            }
        })
    }

    const isTattoTopicSelectorActivated = () => {
        let isActivated = false
        
        if (selectedTatooTopicIndex !== null) {
            if (selectedTatooTopicIndex == 0) {
                if (tatooTopicDirectInput.length != 0) {
                    isActivated = true
                }
            } else {
                isActivated = true
            }
        }

        return isActivated
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
                            title: "게시글의 유형은 \n무엇인가요?",
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
                                                            setWorkType("tatoo")
                                                        }}
                                                        fullWidth
                                                        variant={(workType == "tatoo") ? "contained" : "outlined"}
                                                        buttonPalette="primary"
                                                        borderRadius={5}
                                                        typographyProps={{
                                                            variant: "body1"
                                                        }}
                                                        size={"medium"}
                                                    >
                                                        타투
                                                    </Button>
                                                </Box>
                                            </Grid>

                                            <Grid role="item" xs={6}>
                                                <Box pl={5}>
                                                    <Button
                                                        onClick={() => {
                                                            setWorkType("blueprint")
                                                        }}
                                                        fullWidth
                                                        variant={(workType == "blueprint") ? "contained" : "outlined"} 
                                                        buttonPalette="primary"
                                                        borderRadius={5}
                                                        typographyProps={{
                                                            variant: "body1"
                                                        }}
                                                        size={"medium"}
                                                    >
                                                        도안
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "1",
                        args: {
                            title: "사진을 \n첨부해 주세요!",
                            subtitle: "게시글 사진",
                            content: (
                                <Box flex={1} flexDirection={"column"}>
                                    <Modal
                                        onClose={() => {
                                            setSelectedWorkPhotoIndex(null)
                                        }}
                                        title="사진"
                                        headerElement={
                                            (closeModal) => {
                                                return (
                                                    <Box pr={17}>
                                                        <Button
                                                            onClick={() => {
                                                                if (selectedWorkPhotoIndex !== null) {
                                                                    const clonedWorkPhotoIndexList = [...workPhotoIndexList]
                                                                    clonedWorkPhotoIndexList.push(selectedWorkPhotoIndex)
                    
                                                                    setWorkPhotoIndexList(clonedWorkPhotoIndexList)
                                                                    setIsWorkPhotoSelectorIsVisible(false)
                                                                    setSelectedWorkPhotoIndex(null)
                                                                }
                                                            }}
                                                            fontColor={
                                                                (selectedWorkPhotoIndex !== null) ?
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
                                        isVisible={isWorkPhotoSelectorModalVisible}
                                        setIsVisible={setIsWorkPhotoSelectorIsVisible}
                                    >
                                        <ImagePicker
                                            photos={photos}
                                            selectedImageIndex={selectedWorkPhotoIndex}
                                            setSelectedImageIndex={setSelectedWorkPhotoIndex}
                                        />
                                    </Modal>

                                    <Box flexDirection="row">
                                        <React.Fragment>
                                        {
                                            workPhotoIndexList.map((workPhotoIndex, elementIndex) => (
                                                <Box
                                                    p={3}
                                                    mb={10}
                                                    width={"33.3%"}
                                                >
                                                    <Thumbnail
                                                        height={80} 
                                                        borderRadius={10}
                                                        src={photos[workPhotoIndex].node.image}
                                                    />

                                                    <Box
                                                        position="absolute"
                                                        top={6}
                                                        right={6}
                                                    >
                                                        <IconButton
                                                            variant={"contained"}
                                                            background={"rgba(0, 0, 0, 0.6)"}
                                                            fontColor={"white"}
                                                            iconName="close"
                                                            iconSize={17}
                                                            buttonSize={25}
                                                            onClick={() => {
                                                                let clonedWorkPhotoIndexList = [...workPhotoIndexList]
                                                                clonedWorkPhotoIndexList.splice(elementIndex, 1)

                                                                setWorkPhotoIndexList(clonedWorkPhotoIndexList)
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>
                                            ))
                                        }
                                        </React.Fragment>

                                        {
                                            ((workPhotoIndexList.length) < 5) && (
                                                <Box p={3} width={"33.3333%"}>
                                                    <Box
                                                        onClick={(e) => {
                                                            onClickWorkImageUpload()
                                                        }}
                                                        alignX="center" 
                                                        alignY="center" 
                                                        height={80} 
                                                        width={"100%"}
                                                        borderRadius={10}
                                                        backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "200")}
                                                    >
                                                        <Box flexDirection="column">
                                                            <Box alignX="center">
                                                                <Typography
                                                                    variant="body2"
                                                                    color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                                                >
                                                                    사진 추가
                                                                </Typography>
                                                            </Box>

                                                            <Box alignX="center">
                                                                <Typography
                                                                    variant="body2"
                                                                    color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                                                >
                                                                    {`(${workPhotoIndexList.length}/5)`}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )
                                        }
                                    </Box>
                                </Box>
                            )
                        }
                    },
                    {
                        key: "2",
                        args: {
                            title: "장르와 스타일을 \n선택해 주세요!",
                            subtitle: "타투 장르",
                            content: (
                                <Box flexDirection="column">
                                    <Box mb={20}>
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
                                                spacingWrap={true}
                                            >
                                                {
                                                    genreDataList.map((genreData, index) => (
                                                        <Grid key={genreData.label} role="item" xs={4}>
                                                            <Box
                                                                alignX="center"
                                                                alignY="center"
                                                                py={10}
                                                                width={"100%"}
                                                                borderRadius={15}
                                                                borderWidth={1}
                                                                borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")}
                                                                onClick={() => {
                                                                    setGenreIndex(index)
                                                                    setIsGenrePickerModalVisible(false)
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="h6"
                                                                    color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                                                >
                                                                    {genreData.label}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        </Modal>
                                    </Box>

                                    <Box flexDirection="column">
                                        <Box mb={10}>
                                            <Typography
                                                color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")}
                                                fontWeight="400"
                                                variant="h6"
                                            >
                                                스타일
                                            </Typography>
                                        </Box>

                                        <Box
                                            onClick={() => {
                                                setIsStylePickerModalVisible(true)
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
                                                        (styleIndex === null) ?
                                                        "장르를 선택해주세요."
                                                        :
                                                        styleDataList[styleIndex].label
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
                                            isVisible={isStylePickerModalVisible}
                                            setIsVisible={setIsStylePickerModalVisible}
                                        >
                                            <Grid
                                                role="container"
                                                spacing={1}
                                                spacingWrap={true}
                                            >
                                                {
                                                    styleDataList.map((styleData, index) => (
                                                        <Grid key={styleData.label} role="item" xs={4}>
                                                            <Box
                                                                alignX="center"
                                                                alignY="center"
                                                                py={10}
                                                                width={"100%"}
                                                                borderRadius={15}
                                                                borderWidth={1}
                                                                borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")}
                                                                onClick={() => {
                                                                    setStyleIndex(index)
                                                                    setIsStylePickerModalVisible(false)
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="h6"
                                                                    color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                                                >
                                                                    {`#${styleData.label}`}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        </Modal>
                                    </Box>
                                </Box>
                                
                            )
                        }
                    },
                    {
                        key: "3",
                        args: {
                            title: "주제를\n선택해주세요!",
                            subtitle: "타투 주제",
                            content: (
                                <Box>
                                    <Box
                                        onClick={() => {
                                            setIsTatooTopicPickerModalVisible(true)
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
                                                    (tatooTopic === null) ?
                                                    "사이즈를 선택해주세요."
                                                    :
                                                    tatooTopic
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
                                            setTatooTopicDirectInput("")
                                            setSelectedTatooTopicIndex(null)
                                        }}
                                        title="주제 선택"
                                        variant="drawer"
                                        isVisible={isTatooTopicPickerModalVisible}
                                        setIsVisible={setIsTatooTopicPickerModalVisible}
                                        headerElement={
                                            (closeModal) => {
                                                return (
                                                    <Box pr={17}>
                                                        <Button
                                                            onClick={() => {
                                                                if (isTattoTopicSelectorActivated()) {
                                                                    if (selectedTatooTopicIndex !== null) {
                                                                        if (selectedTatooTopicIndex == 0) {
                                                                            setTatooTopic(tatooTopicDirectInput)
                                                                        } else {
                                                                            setTatooTopic(tatooTopicList[selectedTatooTopicIndex].main)
                                                                        }
                                                                    }
                                                                    
                                                                    closeModal()
                                                                } 
                                                            }}
                                                            fontColor={(isTattoTopicSelectorActivated()) ?
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
                                                tatooTopicList.map((element, index) => (
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
                                                                    setSelectedTatooTopicIndex(index)
                                                                }}
                                                            >
                                                                <Box
                                                                    alignY="center"
                                                                >
                                                                    <Box mr={10}>
                                                                        <Typography
                                                                            variant={"h5"}
                                                                            color={
                                                                                (selectedTatooTopicIndex == index) ?
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
                                                                    <Box width={150}>
                                                                        <TextField
                                                                            fullWidth
                                                                            value={tatooTopicDirectInput}
                                                                            setValue={setTatooTopicDirectInput}
                                                                            placeholder={"주제를 입력해주세요."}
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
                                                                    setSelectedTatooTopicIndex(index)
                                                                }}
                                                            >
                                                                <Box
                                                                    alignY="center"
                                                                >
                                                                    <Box mr={10}>
                                                                        <Typography
                                                                            variant={"h5"}
                                                                            color={
                                                                                (selectedTatooTopicIndex == index) ?
                                                                                ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                                                :
                                                                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")

                                                                            }
                                                                        >
                                                                            {element.main}
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>
                                                                
                                                                {
                                                                    (selectedTatooTopicIndex == index) && (
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
                        key: "4",
                        args: {
                            title: "부위를\n선택해 주세요!",
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
                        key: "5",
                        args: {
                            title: "사이즈를\n선택해주세요!",
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
                            title: "견적 및 부가정보를\n작성해주세요!",
                            subtitle: "견적 정보",
                            content: (
                                <Box>
                                    <Box
                                        onClick={() => {
                                            setIsTatooInformationPickerModalVisible(true)
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
                                                    (tatooInformation === null) ?
                                                    "견적을 입력해주세요."
                                                    :
                                                    tatooInformation
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
                                            setTatooTopicDirectInput("")
                                            setSelectedTatooTopicIndex(null)
                                        }}
                                        title="견적"
                                        variant="drawer"
                                        isVisible={isTatooInformationPickerModalVisible}
                                        setIsVisible={setIsTatooInformationPickerModalVisible}
                                        headerElement={
                                            (closeModal) => {
                                                return (
                                                    <Box pr={17}>
                                                        <Button
                                                            onClick={() => {
                                                                if (isTattoTopicSelectorActivated()) {
                                                                    if (selectedTatooTopicIndex !== null) {
                                                                        if (selectedTatooTopicIndex == 0) {
                                                                            setTatooTopic(tatooTopicDirectInput)
                                                                        } else {
                                                                            setTatooTopic(tatooTopicList[selectedTatooTopicIndex].main)
                                                                        }
                                                                    }
                                                                    
                                                                    closeModal()
                                                                } 
                                                            }}
                                                            fontColor={(isTattoTopicSelectorActivated()) ?
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
                                            {/* Number of operations */}
                                            <Box flexDirection="column" mb={15}>
                                                {/* Label */}
                                                <Box
                                                    mb={6}
                                                >
                                                    <Typography variant="body2">
                                                        작업 횟수
                                                    </Typography>
                                                </Box>

                                                {/* Input */}
                                                <TextField
                                                    fullWidth
                                                    value={numOfOperations}
                                                    setValue={setNumOfOperations}
                                                    placeholder={"이름을 입력해주세요."}
                                                    maxLength={10}
                                                />
                                            </Box>

                                            {/* Time of work */}
                                            <Box flexDirection="column" mb={15}>
                                                {/* Label */}
                                                <Box
                                                    mb={6}
                                                >
                                                    <Typography variant="body2">
                                                        작업 횟수
                                                    </Typography>
                                                </Box>

                                                <Box>
                                                    <Box
                                                        width={"50%"}
                                                        pr={10}
                                                    >
                                                        {/* Input */}
                                                        <TextField
                                                            fullWidth
                                                            value={hourOfWork}
                                                            setValue={setHourOfWork}
                                                            maxLength={10}
                                                        />
                                                    </Box>

                                                    <Box
                                                        width={"50%"}
                                                    >
                                                        {/* Input */}
                                                        <TextField
                                                            fullWidth
                                                            value={minuteOfWork}
                                                            setValue={setMinuteOfWork}
                                                            maxLength={10}
                                                        />
                                                    </Box>
                                                </Box>

                                                
                                            </Box>
                                        </Box>
                                    </Modal>
                                </Box>
                            )
                        }
                    },
                    
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

export default WorkUploadView