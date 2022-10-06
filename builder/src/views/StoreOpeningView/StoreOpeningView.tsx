//* Import libraries
import React from "react"
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { Link, Outlet, useNavigate } from "react-router-native";
import Postcode from '@actbase/react-daum-postcode';

//* Import modules
import { Communicator } from "../../core/base";
import { Avatar, Divider, Modal, Typography } from "../../core/display";
import { Button, IconButton, TextField } from "../../core/input";
import { Box, Grid } from "../../core/layout";
import { ThemeCoreSingleton } from "../../core/design";

//* Import interfaces
import IStoreOpeningView from "./interfaces/IStoreOpeningView"



const StoreOpeningView = (props: IStoreOpeningView) => {
    //* Modules
    const navigate = useNavigate()

    /**
     * States
     */
    //* User info
    const [mainService, setMainService] = React.useState<string | null>(null)
    const [pageName, setPageName] = React.useState<string>("")
    const [primaryAddress, setPrimaryAddress] = React.useState<string>("")
    const [useKakaoTalk, setUseKakaoTalk] = React.useState<boolean>(false)
    const [kakaoTalkLink, setKakaoTalkLink] = React.useState<string>("")
    const [useSms, setUseSms] = React.useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")
    const [useCreditCard, setUseCreditCard] = React.useState<boolean>(false)
    const [isMaleArtist, setIsMaleArtist] = React.useState<boolean>(false)
    const [isFemaleArtist, setIsFemaleArtist] = React.useState<boolean>(false)
    const [isParkingAvailable, setIsParkingAvailable] = React.useState<boolean>(false)
    const [introduce, setIntroduce] = React.useState<string>("")
    const [instagramAddress, setInstagramAddress] = React.useState<string>("")
    const [agreeTerm, setAgreeTerm] = React.useState<string>("")
    const [tattooistServiceTerm, setTattooistServiceTerm] = React.useState<string>("")

    //* Modal states 
    const [isPostCodeModalVisible, setPostCodeModalIsVisible] = React.useState<boolean>(false)
    const [isBannerRegisterModalVisible, setBannerRegisterModalIsVisible] = React.useState<boolean>(false)
    const [isUserThumbnailModalVisible, setUserThumbnailModalIsVisible] = React.useState<boolean>(false)

    //* Functions
    const sendCreateStoreRequest = () => {
        
    }

    return (
        <ScrollView style={{height: "100%"}}>
            {/* Banner register modal */}
            <Modal
                variant="drawer"
                isVisible={isBannerRegisterModalVisible}
                setIsVisible={setBannerRegisterModalIsVisible}
            ></Modal>

            {/* User thumbnail modal */}
            <Modal 
                isVisible={isUserThumbnailModalVisible}
                setIsVisible={setUserThumbnailModalIsVisible}
            ></Modal>

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
                    width={"100%"}
                    height={"100%"}
                >
                    
                </Box>
                
                {/* Camera icon */}
                <Box
                    position="absolute"
                    right={10}
                    bottom={10}
                >
                    <IconButton
                        variant={"contained"}
                        background={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "100")}
                        fontColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "900")}
                        iconName="camera-alt"
                        iconSize={22}
                        buttonSize={36}
                        onClick={() => {
                            setBannerRegisterModalIsVisible(true)
                        }}
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
                            backgroundColor={"red"}
                        >
                            
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
                                    onClick={() => {
                                        setUserThumbnailModalIsVisible(true)
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* 프로필 이미지 */}

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
            </Box>
        </ScrollView>
    )
}

export default StoreOpeningView