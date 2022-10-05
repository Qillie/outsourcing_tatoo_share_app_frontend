//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";
import { Avatar, Divider, Typography } from "../../core/display";
import { Box } from "../../core/layout";

//* Import modules

//* Import interfaces
import ISettingsView from "./interfaces/ISettingsView"

const SettingsView = (props: ISettingsView) => {
    //* Modules

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

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
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
                                    <Link to={content.link}>
                                        <Typography variant="body1">
                                            {
                                                content.title
                                            }
                                        </Typography>
                                    </Link>

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
            </Box>
        </ScrollView>
    )
}

export default SettingsView