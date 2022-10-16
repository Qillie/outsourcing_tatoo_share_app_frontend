//* Import libraries
import React from "react"
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Link, Outlet, useNavigate } from "react-router-native";
import Postcode from '@actbase/react-daum-postcode';
import Icon from "react-native-vector-icons/MaterialIcons";

//* Import modules
import { PermissionManager } from "../../core/base";
import { Avatar, Divider, Modal, Thumbnail, Typography, Accordion } from "../../core/display";
import { Button, IconButton, TextField } from "../../core/input";
import { Box, Grid } from "../../core/layout";
import { ThemeCoreSingleton } from "../../core/design";
import { ImagePicker } from "../../modules";
import Communicator from '../../core/base/Communicator/Communicator';

//* Import interfaces
import IStoreOpeningView from "./interfaces/IStoreOpeningView"
import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";
import TWrappedImage from '../../core/base/Communicator/interfaces/TWrappedImage';


const StoreOpeningView = (props: IStoreOpeningView) => {
    //* Modules
    const communicator = new Communicator({
        CREATE: {path: "/api/tattooist_page/create", method: "post"}
    },
    {
        CREATE: {
            CREATE_OPTION_KEY_LIST: {
                mainService: "TATTOOIST_PAGE_MAIN_SERVICE",
                pageName: "PAGE_NAME",
                primaryAddress: "TATTOOIST_PAGE_PRIMARY_ADDRESS",
                useCreditCard: "USE_CREDIT_CARD",
                isMaleArtist: "IS_MALE_ARTIST",
                isFemaleArtist: "IS_FEMALE_ARTIST",
                isParkingAvailable: "IS_PARKING_AVAILABLE",
                introduce: "INTRODUCE",
                instagramAddress: "INSTAGRAM_ADDRESS",
                contact: "CONTACT",
                thumbnailImage: "THUMBNAIL_IMAGE_PATH",
                bannerImageList: "BANNER_IMAGE_PATH_LIST"
            }
        }
    })
    const navigate = useNavigate()
    const permission = new PermissionManager()

    /**
     * States
     */
    //* User info
    // Thumbnail
    const [profileThumbnail, setProfileThumbnail] = React.useState<PhotoIdentifier | null>(null)

    // Basic
    const [mainService, setMainService] = React.useState<string | null>(null)
    const [pageName, setPageName] = React.useState<string>("")
    const [primaryAddress, setPrimaryAddress] = React.useState<string>("")
    const [kakaoTalkLink, setKakaoTalkLink] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")
    const [useCreditCard, setUseCreditCard] = React.useState<boolean>(false)
    const [isMaleArtist, setIsMaleArtist] = React.useState<boolean>(false)
    const [isFemaleArtist, setIsFemaleArtist] = React.useState<boolean>(false)
    const [isParkingAvailable, setIsParkingAvailable] = React.useState<boolean>(false)
    const [introduce, setIntroduce] = React.useState<string>("")
    const [instagramAddress, setInstagramAddress] = React.useState<string>("")
    const [tattooistServiceTerm, setTattooistServiceTerm] = React.useState<string>("")

    //* Accordion
    const [selectedCommunicationMethod, setSelectedCommunicationMethod] = React.useState<number[]>([])
    const [selectedAdditionalInfoAccordion, setSelectedAdditionalInfoAccordion] = React.useState<number[]>([])
    const [agreeTerm, setAgreeTerm] = React.useState<string>("")

    //* Modal states 
    const [isPostCodeModalVisible, setPostCodeModalIsVisible] = React.useState<boolean>(false)
    const [isBannerRegisterModalVisible, setBannerRegisterModalIsVisible] = React.useState<boolean>(false)
    const [isUserThumbnailModalVisible, setUserThumbnailModalIsVisible] = React.useState<boolean>(false)

    //* Photos
    const [photos, setPhotos] = React.useState<PhotoIdentifier[]>([])
    const [selectedThumbnailPhotoIndex, setSelectedThumbnailPhotoIndex] = React.useState<number | null>(null)
    const [selectedCoverPhotoIndexList, setSelectedCoverPhotoIndexList] = React.useState<number[]>([])
    const [fixedCoverPhotoIndexList, setFixedCoverPhotoIndexList] = React.useState<number[]>([])
    const [showPhotoListForCover, setShowPhotoListForCover] = React.useState<boolean>(false)

    //* Functions
    const sendCreateStoreRequest = () => {
        const storeCreatePayload: {
            mainService: string | null
            pageName: string
            primaryAddress: string
            useCreditCard: boolean
            isMaleArtist: boolean 
            isFemaleArtist: boolean
            isParkingAvailable: boolean
            introduce: string
            instagramAddress: string
            contact?: {type: string, value: string}
            thumbnailImage?: TWrappedImage
        } = {
            mainService: mainService,
            pageName: pageName,
            primaryAddress: primaryAddress,
            useCreditCard: useCreditCard,
            isMaleArtist: isMaleArtist,
            isFemaleArtist: isFemaleArtist,
            isParkingAvailable: isParkingAvailable,
            introduce: introduce,
            instagramAddress: instagramAddress
        }

        if ((JSON.stringify(selectedCommunicationMethod) === JSON.stringify([0]))) {
            storeCreatePayload.contact = {
                type: "kakaotalk",
                value: kakaoTalkLink
            }

        } else if ((JSON.stringify(selectedCommunicationMethod) === JSON.stringify([1]))) {
            storeCreatePayload.contact = {
                type: "phone",
                value: phoneNumber
            }
        }

        if (profileThumbnail !== null) {
            storeCreatePayload.thumbnailImage = communicator.wrapImage(profileThumbnail)
        }

        let bannerImageList: PhotoIdentifier[] = []

        fixedCoverPhotoIndexList.map((index) => {
            bannerImageList.push(photos[index])
        })

        const wrappedBannerImageListDict = communicator.wrapImageList("bannerImageList", bannerImageList)
        
        communicator.create(
            Object.assign(storeCreatePayload, wrappedBannerImageListDict),
            (response) => {
                
            },
            (error) => {

            },
            true
        )
    }

    const setCoverModalHeaderColor = () => {
        let color: string = ""

        if (showPhotoListForCover) {
            color = (selectedThumbnailPhotoIndex !== null) ?
            ThemeCoreSingleton.paletteManager.getColor("primary", "main")
            :
            ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")
        } else {
            color = (selectedCoverPhotoIndexList.length != 0) ? 
            ThemeCoreSingleton.paletteManager.getColor("primary", "main")
            :
            ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")
        }

        return color
    }

    const onClickBannerImageUpload = () => {
        //* Get photo library permission
        permission.getPhotos().then((result) => {
            //* Open modal
            if (result !== null) {
                result.edges.map((edge) => {
                    console.log(edge.node.image)
                })

                setPhotos(result.edges)
                setBannerRegisterModalIsVisible(true)
            }
        })
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
                setUserThumbnailModalIsVisible(true)
            }
        })
    }

    //* Hooks
    React.useEffect(() => {
    }, [])

    return (
        <ScrollView style={{height: "100%"}}>
            {/* Cover photo register modal */}
            <Modal
                onClose={() => {
                    setSelectedThumbnailPhotoIndex(null)
                    setShowPhotoListForCover(false)
                    setSelectedCoverPhotoIndexList([])
                }}
                title={(showPhotoListForCover) ? "사진" : "커버사진"} 
                headerElement={
                    (closeModal) => {
                        return (
                            <Box pr={17}>
                                <Button
                                    onClick={() => {
                                        if (showPhotoListForCover) {
                                            if (selectedThumbnailPhotoIndex !== null) {
                                                const clonedSelectedCoverPhotoIndexList = [...selectedCoverPhotoIndexList]
                                                clonedSelectedCoverPhotoIndexList.push(selectedThumbnailPhotoIndex)

                                                setSelectedCoverPhotoIndexList(clonedSelectedCoverPhotoIndexList)
                                                setShowPhotoListForCover(false)
                                                setSelectedThumbnailPhotoIndex(null)
                                            }
                                        } else {
                                            const clonedSelectedCoverPhotoIndexList = [...selectedCoverPhotoIndexList]
                                            setFixedCoverPhotoIndexList(fixedCoverPhotoIndexList.concat(clonedSelectedCoverPhotoIndexList))
                                            closeModal()
                                        }
                                    }}
                                    fontColor={setCoverModalHeaderColor()}
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
                isVisible={isBannerRegisterModalVisible}
                setIsVisible={setBannerRegisterModalIsVisible}
            >
                <Box flex={1} flexDirection={"column"} px={(showPhotoListForCover) ? 0 : 10}>
                    <React.Fragment>
                        {
                            fixedCoverPhotoIndexList.map((fixedCoverPhotoIndex, elementIndex) => (
                                <Box
                                    hidden={showPhotoListForCover}
                                    mb={10}
                                >
                                    <Thumbnail
                                        height={230}
                                        borderRadius={10}
                                        src={photos[fixedCoverPhotoIndex].node.image}
                                    />

                                    <Box
                                        position="absolute"
                                        top={8}
                                        right={8}
                                    >
                                        <IconButton
                                            variant={"contained"}
                                            background={"rgba(0, 0, 0, 0.6)"}
                                            fontColor={"white"}
                                            iconName="close"
                                            iconSize={22}
                                            buttonSize={30}
                                            onClick={() => {
                                                let clonedFixedCoverPhotoIndexList = [...fixedCoverPhotoIndexList]
                                                clonedFixedCoverPhotoIndexList.splice(elementIndex, 1)

                                                setFixedCoverPhotoIndexList(clonedFixedCoverPhotoIndexList)
                                            }}
                                        />
                                    </Box>
                                </Box>
                            ))
                        }
                    </React.Fragment>

                    <React.Fragment>
                        {
                            selectedCoverPhotoIndexList.map((selectedCoverPhotoIndex, elementIndex) => (
                                <Box
                                    hidden={showPhotoListForCover}
                                    mb={10}
                                >
                                    <Thumbnail
                                        height={230}
                                        borderRadius={10}
                                        src={photos[selectedCoverPhotoIndex].node.image}
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
                                                let clonedSelectedCoverPhotoIndexList = [...selectedCoverPhotoIndexList]
                                                clonedSelectedCoverPhotoIndexList.splice(elementIndex, 1)

                                                setSelectedCoverPhotoIndexList(clonedSelectedCoverPhotoIndexList)
                                            }}
                                        />
                                    </Box>
                                </Box>
                            ))
                        }
                    </React.Fragment>

                    <React.Fragment>
                        {
                            ((selectedCoverPhotoIndexList.length + fixedCoverPhotoIndexList.length) < 5) && (
                                <React.Fragment>
                                    {
                                        (showPhotoListForCover == false) ?
                                        <Box
                                            onClick={(e) => {
                                                setShowPhotoListForCover(true)
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
                                                        {`(${selectedCoverPhotoIndexList.length + fixedCoverPhotoIndexList.length}/5)`}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        :
                                        <ImagePicker
                                            photos={photos}
                                            selectedImageIndex={selectedThumbnailPhotoIndex}
                                            setSelectedImageIndex={setSelectedThumbnailPhotoIndex}
                                        />
                                    }
                                </React.Fragment>
                            )
                        }
                    </React.Fragment>
                </Box>
            </Modal>

            {/* User thumbnail modal */}
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
                                            setProfileThumbnail(photos[selectedThumbnailPhotoIndex])
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
                isVisible={isUserThumbnailModalVisible}
                setIsVisible={setUserThumbnailModalIsVisible}
            >
                <ImagePicker
                    photos={photos}
                    selectedImageIndex={selectedThumbnailPhotoIndex}
                    setSelectedImageIndex={setSelectedThumbnailPhotoIndex}
                />
            </Modal>

            {/* Image wrapper section */}
            <Box
                mb={60}
                height={250}
                flex={1}
                alignX="center"
                alignY="center"
                backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")}
            >
                {/* 배경 이미지 */}
                <Box
                    position={"absolute"}
                    width={"100%"}
                >
                    {
                        (fixedCoverPhotoIndexList.length != 0) && (
                            <Thumbnail
                                height={250}
                                src={photos[fixedCoverPhotoIndexList[0]].node.image}
                            />
                        )
                    }
                </Box>
                
                {/* Camera icon */}
                <Box
                    position="absolute"
                    right={10}
                    bottom={10}
                >
                    <IconButton
                        variant={"contained"}
                        background={"rgba(245, 245, 245, 0.8)"}
                        fontColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")}
                        iconName="camera-alt"
                        iconSize={22}
                        buttonSize={36}
                        onClick={onClickBannerImageUpload}
                    />
                </Box>

                {/* Thumbnail */}
                <Box
                    position="absolute"
                    left={"50%"}
                    bottom={0}
                >
                    <Box
                        position="relative"
                        width={90}
                        height={90}
                        borderRadius={45}
                        backgroundColor={"white"}
                        translateX={-45}
                        translateY={17.5}
                        alignX={"center"}
                        alignY={"center"}
                    >
                        <Box
                            width={80}
                            height={80}
                            borderRadius={40}
                            backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "300")}
                        >
                            {/* Thumbnail image */}
                            <React.Fragment>
                            {
                                (profileThumbnail === null) ?
                                    <Box 
                                        width={80}
                                        height={80}
                                        alignX="center"
                                        alignY="center"
                                    >
                                        <Icon 
                                            name={"person"} 
                                            size={70} 
                                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                        />
                                    </Box>    
                                :
                                    <Box>
                                        <Thumbnail
                                            width={80}
                                            height={80}
                                            borderRadius={40}
                                            src={profileThumbnail.node.image}
                                        />
                                    </Box>
                                
                            }
                            </React.Fragment>

                            {/* Camera icon */}
                            <Box
                                position="absolute"
                                right={0}
                                bottom={0}
                            >
                                <IconButton
                                    variant={"contained"}
                                    background={"rgba(245, 245, 245, 0.8)"}
                                    fontColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")}
                                    iconName="camera-alt"
                                    iconSize={18}
                                    buttonSize={26}
                                    onClick={onClickThumbnailImageUpload}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box px={14} pb={250} flexDirection="column">
                {/* 주력 서비스 */}
                <Box flexDirection="column" mb={25}>
                    {/* Label */}
                    <Box mb={15}>
                        <Typography variant="h5" fontWeight="500">
                            주력 서비스
                        </Typography>
                    </Box>

                    {/* Input */}
                    <Box>
                        <Grid role="container">
                            <Grid role="item" xs={6}>
                                <Box pr={5}>
                                    <Button
                                        onClick={() => {
                                            setMainService("tatoo")
                                        }}
                                        fullWidth
                                        variant={(mainService == "tatoo") ? "contained" : "outlined"}
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
                                            setMainService("semiPermanent")
                                        }}
                                        fullWidth
                                        variant={(mainService == "semiPermanent") ? "contained" : "outlined"} 
                                        buttonPalette="primary"
                                        borderRadius={5}
                                        typographyProps={{
                                            variant: "body1"
                                        }}
                                        size={"medium"}
                                    >
                                        반영구
                                    </Button>
                                    </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                {/* 페이지명 */}
                <Box flexDirection="column" mb={25}>
                    {/* Label */}
                    <Box mb={15}>
                        <Typography variant="h5" fontWeight="500">
                            페이지명 (타투이스트명)
                        </Typography>
                    </Box>

                    {/* Input */}
                    <Box>
                        <TextField
                            fullWidth
                            value={pageName}
                            setValue={setPageName}
                            placeholder={"페이지명을 입력해주세요."}
                        />
                    </Box>
                </Box>

                {/* 활동지역 */}
                <Box flexDirection="column" mb={25}>
                    {/* Label */}
                    <Box mb={15}>
                        <Typography variant="h5" fontWeight="500">
                            활동지역
                        </Typography>
                    </Box>

                    {/* Input */}
                    <Box>
                        <Modal 
                            variant="drawer"
                            isVisible={isPostCodeModalVisible}
                            setIsVisible={setPostCodeModalIsVisible}
                            openerElement={
                                (openModal) => {
                                    return (
                                        <Pressable
                                            style={{
                                                width: "100%"
                                            }}
                                            onPress={() => {
                                                openModal()
                                            }}
                                        >
                                            <Box 
                                                borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")}
                                                borderWidth={1}
                                                borderRadius={4}
                                                width={"100%"}
                                                p={12}
                                            >
                                                <Typography
                                                    fontSize={14}
                                                    color={
                                                        (primaryAddress.length == 0) ?
                                                        ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    {
                                                        (primaryAddress.length == 0) ?
                                                        "활동 지역을 입력해주세요."
                                                        :
                                                        primaryAddress
                                                    }
                                                    
                                                </Typography>
                                            </Box>
                                        </Pressable>
                                    )
                                }
                            }
                        >
                            <Box px={10} width={"100%"}>
                                <Postcode
                                    style={{ width: "100%", height: 600 }}
                                    jsOptions={{ animation: true }}
                                    onSelected={data => {
                                        setPrimaryAddress(data.address)
                                        setPostCodeModalIsVisible(false)
                                    }} 
                                    onError={function (error: unknown): void {
                                        throw new Error("Function not implemented.");
                                    }}                            
                                />
                            </Box>
                        </Modal>
                    </Box>
                </Box>
                
                {/* 상담 방식 */}
                <Box flexDirection="column" mb={25}>
                    {/* Label */}
                    <Box mb={15}>
                        <Typography variant="h5" fontWeight="500">
                            상담방식
                        </Typography>
                    </Box>
                    
                    <Box>
                        <Accordion 
                            active={selectedCommunicationMethod}
                            setActive={setSelectedCommunicationMethod}
                            contents={[
                                {
                                    key: "kakaotalk",
                                    header: (
                                        <Box
                                            width={"100%"}
                                            alignY={"center"}
                                            alignX={"space-between"}
                                        >
                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([0])) ? 
                                                        "500"
                                                        :
                                                        "400"
                                                    }
                                                    color={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([0])) ? 
                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    카카오톡 오픈 채팅
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <IconButton 
                                                    iconName="check"
                                                    iconSize={17}
                                                    buttonSize={22}
                                                    buttonPalette={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([0])) ? "primary" : "grey"}
                                                    variant={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([0])) ? "contained" : "outlined"}
                                                    onClick={
                                                        () => {
                                                            const isSelected = JSON.stringify(selectedCommunicationMethod) === JSON.stringify([0])

                                                            setSelectedCommunicationMethod((isSelected) ? [] : [0])
                                                        }
                                                    }
                                                />
                                            </Box>
                                        </Box>
                                    ), 
                                    detail: (
                                        <Box>
                                            <TextField
                                                fullWidth
                                                value={kakaoTalkLink}
                                                setValue={setKakaoTalkLink}
                                                placeholder={"여기에 카카오톡 오픈채팅 링크를 붙여넣으세요."}
                                            />
                                        </Box>
                                    )
                                },
                                {
                                    key: "sms",
                                    header: (
                                        <Box
                                            width={"100%"}
                                            alignY={"center"}
                                            alignX={"space-between"}
                                        >
                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([1])) ? 
                                                        "500"
                                                        :
                                                        "400"
                                                    }
                                                    color={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([1])) ? 
                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    문자
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <IconButton 
                                                    iconName="check"
                                                    iconSize={17}
                                                    buttonSize={22}
                                                    buttonPalette={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([1])) ? "primary" : "grey"}
                                                    variant={(JSON.stringify(selectedCommunicationMethod) === JSON.stringify([1])) ? "contained" : "outlined"}
                                                    onClick={
                                                        () => {
                                                            const isSelected = JSON.stringify(selectedCommunicationMethod) === JSON.stringify([1])

                                                            setSelectedCommunicationMethod((isSelected) ? [] : [1])
                                                        }
                                                    }
                                                />
                                            </Box>
                                        </Box>
                                    ), 
                                    detail: (
                                        <Box>
                                            <TextField
                                                fullWidth
                                                value={phoneNumber}
                                                setValue={setPhoneNumber}
                                                placeholder={"휴대폰 번호를 입력해주세요."}
                                            />
                                        </Box>
                                    )
                                }
                            ]}
                        />
                    </Box>

                    <Box>
                        <Accordion
                            useArrow={true}
                            active={selectedAdditionalInfoAccordion}
                            setActive={setSelectedAdditionalInfoAccordion}
                            contents={[
                                {
                                    key: "additionalInfo",
                                    header: (
                                        <Box
                                            width={"100%"}
                                            alignY={"center"}
                                            alignX={"space-between"}
                                        >
                                            <Box>
                                                <Typography
                                                    variant={"h6"}
                                                    fontWeight={(JSON.stringify(selectedAdditionalInfoAccordion) === JSON.stringify([0])) ? 
                                                        "500"
                                                        :
                                                        "400"
                                                    }
                                                    color={(JSON.stringify(selectedAdditionalInfoAccordion) === JSON.stringify([0])) ? 
                                                        ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                                        :
                                                        "black"
                                                    }
                                                >
                                                    부가정보
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ), 
                                    detail: (
                                        <Box width={"100%"} flexDirection={"column"}>
                                            {
                                                [
                                                    {key: "카드 결제", value: useCreditCard, setValue: setUseCreditCard},
                                                    {key: "여성 아티스트", value: isMaleArtist, setValue: setIsMaleArtist},
                                                    {key: "남성 아티스트", value: isFemaleArtist, setValue: setIsFemaleArtist},
                                                    {key: "주차 가능", value: isParkingAvailable, setValue: setIsParkingAvailable}

                                                ].map((element) => (
                                                    <Box key={element.key} mb={15} width={"100%"} alignY="center" alignX="space-between">
                                                        <Box>
                                                            <Typography
                                                                variant={"h6"}
                                                                fontWeight={"400"}
                                                            >
                                                                {element.key}
                                                            </Typography>
                                                        </Box>

                                                        <Box>
                                                            <IconButton 
                                                                iconName="check"
                                                                iconSize={17}
                                                                buttonSize={22}
                                                                buttonPalette={(element.value) ? "primary" : "grey"}
                                                                variant={(element.value) ? "contained" : "outlined"}
                                                                onClick={() => {
                                                                    element.setValue(!element.value)
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
                </Box>

                {/* 자기소개 */}
                <Box flexDirection="column" mb={25}>
                    {/* Label */}
                    <Box mb={15}>
                        <Typography variant="h5" fontWeight="500">
                            자기소개
                        </Typography>
                    </Box>

                    {/* Input */}
                    <Box>
                        <TextField
                            fullWidth
                            value={introduce}
                            setValue={setIntroduce}
                            placeholder={"타투샵과 타투이스트님에 대해 소개해주세요."}
                            row={10}
                        />
                    </Box>
                </Box>

                {/* 인스타그램 */}
                <Box flexDirection="column" mb={25}>
                    {/* Label */}
                    <Box mb={15}>
                        <Typography variant="h5" fontWeight="500">
                            인스타그램 (선택사항)
                        </Typography>
                    </Box>

                    {/* Input */}
                    <Box>
                        <TextField
                            fullWidth
                            value={instagramAddress}
                            setValue={setInstagramAddress}
                            placeholder={"http://www.instagram.com/"}
                        />
                    </Box>
                </Box>

                {/* Controller section */}
                <Box>
                    <Button
                        onClick={sendCreateStoreRequest}
                        fullWidth
                        // disabled={disableNextButton()}
                        variant="contained"
                        buttonPalette="primary"
                        borderRadius={5}
                        typographyProps={{
                            variant: "h6"
                        }}
                        size={"large"}
                    >
                        생성하기
                    </Button>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default StoreOpeningView