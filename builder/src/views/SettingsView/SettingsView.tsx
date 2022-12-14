//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Switch } from "react-native-switch";

//* Import modules
import ThemeCoreSingleton from '../../core/design/ThemeCore/ThemeCoreSingleton';
import { Avatar, Divider, Typography, Alert } from "../../core/display";
import { Box } from "../../core/layout";
import { LinkButton } from "../../core/input";
import { Communicator } from "../../core/base";

//* Import interfaces
import ISettingsView from "./interfaces/ISettingsView"


const SettingsView = (props: ISettingsView) => {
    //* Modules
    const communicator = new Communicator()

    //* States
    const [contents, setContents] = React.useState<{title: string, link: string}[]>([
        {
            title: "기획전",
            link: "/planned"
        },
        {
            title: "매거진",
            link: "/magazine"
        },
        {
            title: "타투랭킹",
            link: "/rankings"
        },
        {
            title: "고객센터",
            link: ""
        },
        {
            title: "회원가입",
            link: "/sign_up/terms"
        },
        {
            title: "로그인",
            link: "/sign_in"
        },
        {
            title: "페이지 개설",
            link: "/store_opening"
        },
        {
            title: "구매자 견적 작성",
            link: "/quote_request"
        },
        {
            title: "리뷰 업로드",
            link: "/review_upload"
        }
    ])

    const [configs, setConfigs] = React.useState<{title: string, link: string}[]>([
        {
            title: "푸시 알림 설정",
            link: ""
        },
        {
            title: "계정설정",
            link: ""
        },
        {
            title: "내가 쓴 리뷰",
            link: ""
        },
        {
            title: "로그아웃",
            link: ""
        },
        {
            title: "앱버전",
            link: ""
        },
        {
            title: "오픈소스 라이선스",
            link: ""
        }
    ])

    const [userName, setUserName] = React.useState<string>("JSA1231")
    const [showCreateTattooistPageAlert, setShowCreateTattooistPageAlert] = React.useState<boolean>(true)

    //* Functions
    /**
     * Function to switch user type
     */
    const onClickUserTypeChangeSwitch = (val: boolean) => {
        if (props.setUserType !== undefined) {
            if (props.userType == "user") {
                props.setUserType("tattooist")

                //* Check if tattoist has own page
                setShowCreateTattooistPageAlert(true)
                
            } else {
                props.setUserType("user")
            }
        }
    }

    return (
        <ScrollView style={{height: "100%"}}>
            <Box
                mb={20}
                py={10}
                px={15}
                alignX={"space-between"}
                width={"100%"} 
                backgroundColor={(props.userType == "user") ? ThemeCoreSingleton.paletteManager.getColor("primary", "main") : ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
            >
                <Box>
                    <Typography
                        variant={"h5"}
                        fontWeight={"500"}
                        color={"white"}
                    >
                        {
                            (props.userType == "user") ?
                            "고객으로 전환"
                            :
                            "타투이스트로 전환"
                        }
                    </Typography>
                </Box>

                <Box>
                    {/* https://www.npmjs.com/package/react-native-switch */}
                    <Switch
                        activeText={""}
                        inActiveText={""}
                        backgroundActive={ThemeCoreSingleton.paletteManager.getColor("primary", "light")}
                        value={(props.userType == "user")}
                        onValueChange={onClickUserTypeChangeSwitch}
                    />
                </Box>
            </Box>

            <Box px={14} pb={250} flexDirection="column">
                {/* Thumbnail */}
                <Box alignY="center">
                        <Box mr={15} alignX="center" alignY="center">
                            <Avatar
                                diameter={60}
                                src="https://picsum.photos/200/300"
                            />
                        </Box>

                        <Box>
                            <Typography
                                variant={"h4"} 
                                fontWeight={"500"}
                            >
                                {userName}
                            </Typography>
                        </Box>
                </Box>

                <Divider my={20} />

                {/* Contents */}
                <Box flexDirection="column" mb={25} mt={10}>
                    <Box mb={25}>
                        <Typography variant="h5" fontWeight="500">
                            더 보기
                        </Typography>
                    </Box>

                    <Box flexDirection="column">
                        {
                            contents.map((content) => (
                                <Box flexDirection="column">
                                    <LinkButton to={content.link}>
                                        <Typography variant="body1">
                                            {
                                                content.title
                                            }
                                        </Typography>
                                    </LinkButton>

                                    <Divider my={20} />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>

                {/* Configs */}
                <Box flexDirection="column">
                    <Box mb={25}>
                        <Typography variant="h5" fontWeight="500">
                            설정
                        </Typography>
                    </Box>

                    <Box flexDirection="column">
                        {
                            configs.map((config) => (
                                <Box key={config.title} flexDirection="column">
                                    <Typography variant="body1">
                                        {
                                            config.title
                                        }
                                    </Typography>

                                    <Divider my={20} />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>

                {/* Outer links */}
                <Box>
                    
                </Box>

                <Alert
                show={true}
                setShow={setShowCreateTattooistPageAlert}
            />
            </Box>
        </ScrollView>
    )
}

export default SettingsView