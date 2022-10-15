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
import { StarRating } from "../../modules";

//* Import interfaces
import IQuoteRequestView from "./interfaces/IReviewUploadView"
import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";



const ReviewUploadView = (props: IQuoteRequestView) => {
    //* Modules
    const navigate = useNavigate()
    const permission = new PermissionManager()
    
    /**
     * States
     */
    const [page, setPage] = React.useState<number>(0)

    //* Stars
    const [satisfactionRate, setSatisfactionRate] = React.useState<number>(0)
    const [sanitaryRate, setSanitaryRate] = React.useState<number>(0)
    const [kindnessRate, setKindnessRate] = React.useState<number>(0)

    //* Photos
    const [photos, setPhotos] = React.useState<PhotoIdentifier[]>([])
    const [selectedReviewPhotoIndex, setSelectedReviewPhotoIndex] = React.useState<number | null>(null)
    const [selectedReviewPhotoIndexList, setSelectedReviewPhotoIndexList] = React.useState<number[]>([])
    const [showPhotoListForReview, setShowPhotoListForReview] = React.useState<boolean>(false)

    //* Accordion
    const [selectedActiveAccordion, setSelectedActiveAccordion] = React.useState<number[]>([])

    //* Genre
    const [genre, setGenre] = React.useState<string>()
    const [genreList, setGenreList] = React.useState<string[]>([
        "블랙위크",
        "올드스쿨",
        "뉴스쿨",
        "레터링"
    ])

    //* Topic
    const [topic, setTopic] = React.useState<string>()
    const [topicList, setTopicList] = React.useState<string[]>([
        "꽃",
        "장미",
        "고래",
        "맹수",
        "뱀",
        "용"
    ])

    //* Part
    const [part, setPart] = React.useState<string>()
    const [partList, setPartList] = React.useState<string[]>([
        "팔",
        "윗팔",
        "아래팔",
        "팔꿈치",
        "긴팔",
        "손목"
    ])

    //* Detail introduce
    const [detailIntroduce, setDetailIntroduce] = React.useState<string>("")

    /**
     * Functions
     */
    const onClickReviewImageUpload = () => {
        //* Get photo library permission
        permission.getPhotos().then((result) => {
            //* Open modal
            if (result !== null) {
                result.edges.map((edge) => {
                    console.log(edge.node.image)
                })

                setPhotos(result.edges)
                setShowPhotoListForReview(true)
            }
        })
    }

    //* Hooks
    React.useEffect(() => {
    }, [])

    return (
        <ScrollView style={{height: "100%"}}>
            {
                (page == 1) ?
                <Box flexDirection="column" pb={150} px={20}>
                    {/* Rate section */}
                    <Box flexDirection="column" mb={40}>
                        {/* Satisfaction */}
                        <Box mb={18} flexDirection="column" alignY={"center"}>
                            <Box mb={7}>
                                <Typography
                                    variant={"h5"} 
                                    fontWeight={"500"}
                                >
                                    받은 타투에 만족해요!
                                </Typography>
                            </Box>

                            <StarRating
                                value={satisfactionRate}
                                setValue={setSatisfactionRate}
                            />
                        </Box>

                        {/* Sanitary */}
                        <Box mb={18} flexDirection="column" alignY={"center"}>
                            <Box mb={7}>
                                <Typography
                                    variant={"h5"} 
                                    fontWeight={"500"}
                                >
                                    작업 환경이 위생적이에요!
                                </Typography>
                            </Box>

                            <StarRating
                                value={sanitaryRate}
                                setValue={setSanitaryRate}
                            />
                        </Box>

                        {/* Kindness */}
                        <Box flexDirection="column" alignY={"center"}>
                            <Box mb={7}>
                                <Typography
                                    variant={"h5"} 
                                    fontWeight={"500"}
                                >
                                    타투이스트 분이 친절해요!
                                </Typography>
                            </Box>

                            <StarRating
                                value={kindnessRate}
                                setValue={setKindnessRate}
                            />
                        </Box>
                    </Box>

                    {/* Photo section */}
                    <Box flexDirection="column" px={20}>
                        <React.Fragment>
                            {
                                selectedReviewPhotoIndexList.map((selectedReviewPhotoIndex, elementIndex) => (
                                    <Box
                                        hidden={showPhotoListForReview}
                                        mb={20}
                                    >
                                        <Thumbnail
                                            height={230}
                                            borderRadius={10}
                                            src={photos[selectedReviewPhotoIndex].node.image}
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
                                                    let clonedSelectedReviewPhotoIndexList = [...selectedReviewPhotoIndexList]
                                                    clonedSelectedReviewPhotoIndexList.splice(elementIndex, 1)

                                                    setSelectedReviewPhotoIndexList(clonedSelectedReviewPhotoIndexList)
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                ))
                            }
                        </React.Fragment>

                        <React.Fragment>
                            {
                                ((selectedReviewPhotoIndexList.length) < 5) && (
                                    <React.Fragment>
                                        {
                                            (showPhotoListForReview == false) ?
                                            <Box
                                                onClick={(e) => {
                                                    onClickReviewImageUpload()
                                                }}
                                                alignX="center" 
                                                alignY="center" 
                                                height={230} 
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
                                                            멋진 타투 작품을 공유해주세요
                                                        </Typography>
                                                    </Box>

                                                    <Box alignX="center">
                                                        <Typography
                                                            variant="h5"
                                                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                                        >
                                                            {`(${selectedReviewPhotoIndexList.length}/5)`}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            :
                                            <ImagePicker
                                                photos={photos}
                                                selectedImageIndex={selectedReviewPhotoIndex}
                                                setSelectedImageIndex={setSelectedReviewPhotoIndex}
                                            />
                                        }
                                    </React.Fragment>
                                )
                            }
                        </React.Fragment>

                        <Modal
                            onClose={() => {
                                setSelectedReviewPhotoIndex(null)
                            }}
                            title="사진"
                            headerElement={
                                (closeModal) => {
                                    return (
                                        <Box pr={17}>
                                            <Button
                                                onClick={() => {
                                                    if (selectedReviewPhotoIndex !== null) {
                                                        const clonedReviewPhotoIndexList = [...selectedReviewPhotoIndexList]
                                                        clonedReviewPhotoIndexList.push(selectedReviewPhotoIndex)
        
                                                        setSelectedReviewPhotoIndexList(clonedReviewPhotoIndexList)
                                                        setShowPhotoListForReview(false)
                                                        setSelectedReviewPhotoIndex(null)
                                                    }
                                                }}
                                                fontColor={
                                                    (selectedReviewPhotoIndex !== null) ?
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
                            isVisible={showPhotoListForReview}
                            setIsVisible={setShowPhotoListForReview}
                        >
                            <ImagePicker
                                photos={photos}
                                selectedImageIndex={selectedReviewPhotoIndex}
                                setSelectedImageIndex={setSelectedReviewPhotoIndex}
                            />
                        </Modal>
                    </Box>
                </Box>
                :
                <Box flexDirection="column" px={20}>
                    <Box mb={10}>
                        <Accordion
                            useArrow={true}
                            active={selectedActiveAccordion}
                            setActive={setSelectedActiveAccordion}
                            contents={[
                                {
                                    key: "genre",
                                    header: (
                                        <Box
                                            width={"100%"}
                                            alignY={"center"}
                                            alignX={"space-between"}
                                        >
                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={(JSON.stringify(selectedActiveAccordion) === JSON.stringify([0])) ? 
                                                        "500"
                                                        :
                                                        "400"
                                                    }
                                                    color={(JSON.stringify(selectedActiveAccordion) === JSON.stringify([0])) ? 
                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    장르
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={"400"}
                                                    color={"black"}
                                                >
                                                    {genre}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ), 
                                    detail: (
                                        <Box width={"100%"} flexDirection={"column"}>
                                            {
                                                genreList.map((element) => (
                                                    <Box key={element} mb={15} width={"100%"} alignY="center" alignX="space-between">
                                                        <Box>
                                                            <Typography
                                                                variant={"h6"}
                                                                fontWeight={"400"}
                                                            >
                                                                {element}
                                                            </Typography>
                                                        </Box>

                                                        <Box>
                                                            <IconButton 
                                                                iconName="check"
                                                                iconSize={17}
                                                                buttonSize={22}
                                                                buttonPalette={(genre == element) ? "primary" : "grey"}
                                                                variant={(genre == element) ? "contained" : "outlined"}
                                                                onClick={() => {
                                                                    setGenre(element)
                                                                    setSelectedActiveAccordion([1])
                                                                }}
                                                            />
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    )
                                },
                                {
                                    key: "topic",
                                    header: (
                                        <Box
                                            width={"100%"}
                                            alignY={"center"}
                                            alignX={"space-between"}
                                        >
                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={(JSON.stringify(selectedActiveAccordion) === JSON.stringify([1])) ? 
                                                        "500"
                                                        :
                                                        "400"
                                                    }
                                                    color={(JSON.stringify(selectedActiveAccordion) === JSON.stringify([1])) ? 
                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    주제
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={"400"}
                                                    color={"black"}
                                                >
                                                    {topic}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ), 
                                    detail: (
                                        <Box width={"100%"} flexDirection={"column"}>
                                            {
                                                topicList.map((element) => (
                                                    <Box key={element} mb={15} width={"100%"} alignY="center" alignX="space-between">
                                                        <Box>
                                                            <Typography
                                                                variant={"h6"}
                                                                fontWeight={"400"}
                                                            >
                                                                {element}
                                                            </Typography>
                                                        </Box>

                                                        <Box>
                                                            <IconButton 
                                                                iconName="check"
                                                                iconSize={17}
                                                                buttonSize={22}
                                                                buttonPalette={(topic == element) ? "primary" : "grey"}
                                                                variant={(topic == element) ? "contained" : "outlined"}
                                                                onClick={() => {
                                                                    setTopic(element)
                                                                    setSelectedActiveAccordion([2])
                                                                }}
                                                            />
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    )
                                },
                                {
                                    key: "part",
                                    header: (
                                        <Box
                                            width={"100%"}
                                            alignY={"center"}
                                            alignX={"space-between"}
                                        >
                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={(JSON.stringify(selectedActiveAccordion) === JSON.stringify([1])) ? 
                                                        "500"
                                                        :
                                                        "400"
                                                    }
                                                    color={(JSON.stringify(selectedActiveAccordion) === JSON.stringify([1])) ? 
                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    부위
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={"400"}
                                                    color={"black"}
                                                >
                                                    {part}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ), 
                                    detail: (
                                        <Box width={"100%"} flexDirection={"column"}>
                                            {
                                                partList.map((element) => (
                                                    <Box key={element} mb={15} width={"100%"} alignY="center" alignX="space-between">
                                                        <Box>
                                                            <Typography
                                                                variant={"h6"}
                                                                fontWeight={"400"}
                                                            >
                                                                {element}
                                                            </Typography>
                                                        </Box>

                                                        <Box>
                                                            <IconButton 
                                                                iconName="check"
                                                                iconSize={17}
                                                                buttonSize={22}
                                                                buttonPalette={(part == element) ? "primary" : "grey"}
                                                                variant={(part == element) ? "contained" : "outlined"}
                                                                onClick={() => {
                                                                    setPart(element)
                                                                    setSelectedActiveAccordion([])
                                                                }}
                                                            />
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    )
                                }
                            ]}
                        />
                    </Box>

                    {/* 상세설명 */}
                    <Box flexDirection="column" mb={25}>
                        {/* Label */}
                        <Box mb={15}>
                            <Typography variant="h6" fontWeight="400">
                                상세설명
                            </Typography>
                        </Box>

                        {/* Input */}
                        <Box>
                            <TextField
                                fullWidth
                                value={detailIntroduce}
                                setValue={setDetailIntroduce}
                                placeholder={"받으신 타투, 타투이스트에 대한 리뷰를 다른 타투 피플 분들께 남겨주세요."}
                                row={10}
                            />
                        </Box>
                    </Box>
                </Box>
            }
        </ScrollView>
    )
}

export default ReviewUploadView