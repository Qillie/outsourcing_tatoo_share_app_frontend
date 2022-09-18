//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";
import { Divider, Typography } from "../../core/display";
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
            link: ""
        },
        {
            title: "매거진",
            link: ""
        },
        {
            title: "타투랭킹",
            link: ""
        },
        {
            title: "고객센터",
            link: ""
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

    return (
        <ScrollView style={{height: "100%"}}>
            {/* Thumbnail */}
            <Box>
                
            </Box>

            {/* Contents */}
            <Box flexDirection="column" mb={25}>
                <Box>
                    <Typography variant="h5" fontWeight="700">
                        더 보기
                    </Typography>
                </Box>

                <Divider my={20} />

                <Box flexDirection="column">
                    {
                        contents.map((content) => (
                            <Box flexDirection="column">
                                <Typography variant="body1">
                                    {
                                        content.title
                                    }
                                </Typography>

                                <Divider my={20} />
                            </Box>
                        ))
                    }
                </Box>
            </Box>

            {/* Configs */}
            <Box flexDirection="column">
                <Box>
                    <Typography variant="h5" fontWeight="700">
                        설정
                    </Typography>
                </Box>

                <Divider my={20} />

                <Box flexDirection="column">
                    {
                        configs.map((config) => (
                            <Box flexDirection="column">
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
        </ScrollView>
    )
}

export default SettingsView