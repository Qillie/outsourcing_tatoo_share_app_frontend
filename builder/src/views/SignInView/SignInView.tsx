//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link, Outlet, useNavigate } from "react-router-native";
import { Communicator } from "../../core/base";
import { Avatar, Divider, Typography } from "../../core/display";
import { Button, TextField } from "../../core/input";
import { Box } from "../../core/layout";

//* Import modules

//* Import interfaces
import ISignInView from "./interfaces/ISignInView"


const SignInView = (props: ISignInView) => {
    //* Modules
    const navigate = useNavigate()
    const communicator = new Communicator({
        PRESET: {
            SIGN_IN: {path: "/api/auth/sign_in", method: "post"}
        }
    },
    {
        PRESET: {
            SIGN_IN: {
                SIGN_IN_OPTION_KEY_LIST: {
                    userName: "USER_NAME",
                    password: "PASSWORD"
                }
            }
        }
    })

    /**
     * States
     */
    //* User info
    const [userName, setUserName] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")

    //* Functions
    const sendSignInRequest = () => {
        communicator.preset(
            "SIGN_IN",
            {
                userName: userName,
                password: password
            },
            (response) => {
                const token: {accessToken: string, refreshToken: string} = {
                    accessToken: response.data.result.accessToken, 
                    refreshToken: response.data.result.refreshToken
                }

                console.log(token)

                communicator.setMultipleDataInSecureStore([
                    {key: "accessToken", value: token.accessToken },
                    {key: "refreshToken", value: token.refreshToken }
                ]).then(() => {
                    navigate("/")
                })
            },
            (error) => {
                console.log(JSON.stringify(error))
            }
        )
    }

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box px={14} pb={250} flexDirection="column">
                <Box mb={6}>
                    {/* user name */}
                    <TextField
                        fullWidth
                        value={userName}
                        setValue={setUserName}
                        placeholder={"아이디"}
                    />
                </Box>

                <Box mb={20}>
                    {/* password */}
                    <TextField
                        textContentType={"password"}
                        fullWidth
                        value={password}
                        setValue={setPassword}
                        placeholder={"비밀번호"}
                    />
                </Box>

                {/* Controller */}
                <Box>
                    <Button
                        onClick={sendSignInRequest}
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
                        로그인
                    </Button>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default SignInView