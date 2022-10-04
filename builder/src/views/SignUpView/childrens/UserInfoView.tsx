//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { useNavigate } from "react-router-native";
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box, Grid } from "../../../core/layout";

//* Import modules
import { Button, TextField } from "../../../core/input";

//* Import interfaces
import IUserInfoView from "../interfaces/IUserInfoView"
import IUserInputStatus from '../../../core/input/TextField/interfaces/IUserInputStatus';

//* Import contexts
import { SignUpContext } from "../components/SignUpContext";


const UserInfoView = (props: IUserInfoView) => {
    //* Modules
    const navigate = useNavigate()

    //* Received contexts
    const { 
        userName, setUserName,
        fullName, setFullName,
        password, setPassword,
        email, setEmail,
        phoneNumber, setPhoneNumber
    } = React.useContext(SignUpContext)

    /**
     * States
     */
    //* Basic states
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>("")

    //* States for validation
    const [userNameInputStatus, setUserNameInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [fullNameInputStatus, setFullNameInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [passwordInputStatus, setPasswordInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [passwordConfirmInputStatus, setPasswordConfirmInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [emailInputStatus, setEmailInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [phoneNumberInputStatus, setPhoneNumberInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [genderInputStatus, setGenderInputStatus] = React.useState<IUserInputStatus>({status: "default"})

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box px={14} pb={250} flexDirection="column">
                {/* User name with double check button */}
                <Box flexDirection="column">
                    {/* Label */}
                    <Box
                        mb={6}
                    >
                        <Typography variant="body2">
                            아이디
                        </Typography>
                    </Box>
                
                    <Grid role={"container"} alignItems={"flex-start"}>
                        <Grid role={"item"} xs={8}>
                            {/* Input */}
                            <TextField
                                fullWidth
                                value={userName}
                                setValue={setUserName}
                                placeholder={"아이디를 입력해주세요."}
                                inputStatus={userNameInputStatus}
                                inputCaptionConfig={{
                                    defaultMessage: ""
                                }}
                            />
                        </Grid>

                        <Grid role={"item"} xs={4}>
                            <Box pl={10}>
                                <Button
                                    onClick={() => {
                                        navigate("/sign_up/user_info")
                                    }}
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
                                    중복확인
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                

                {/* Full name */}
                <Box flexDirection="column">
                    {/* Label */}
                    <Box
                        mb={6}
                    >
                        <Typography variant="body2">
                            이름
                        </Typography>
                    </Box>

                    {/* Input */}
                    <TextField
                        fullWidth
                        value={fullName}
                        setValue={setFullName}
                        placeholder={"이름을 입력해주세요."}
                        inputStatus={userNameInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                    />
                </Box>

                {/* Password */}
                <Box flexDirection="column">
                    {/* Label */}
                    <Box
                        mb={6}
                    >
                        <Typography variant="body2">
                            비밀번호
                        </Typography>
                    </Box>

                    {/* Input */}
                    <TextField
                        fullWidth
                        value={password}
                        setValue={setPassword}
                        placeholder={"비밀번호를 입력해주세요."}
                        inputStatus={userNameInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                    />
                </Box>

                {/* Password confirm */}
                <Box flexDirection="column">
                    {/* Input */}
                    <TextField
                        fullWidth
                        value={passwordConfirm}
                        setValue={setPasswordConfirm}
                        placeholder={"비밀번호를 한번 더 입력해주세요."}
                        inputStatus={passwordConfirmInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                    />
                </Box>

                {/* Email */}
                <Box flexDirection="column">
                    {/* Label */}
                    <Box
                        mb={6}
                    >
                        <Typography variant="body2">
                            이메일
                        </Typography>
                    </Box>

                    {/* Input */}
                    <TextField
                        fullWidth
                        value={email}
                        setValue={setEmail}
                        placeholder={"이메일을 입력해주세요."}
                        inputStatus={userNameInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                    />
                </Box>

                {/* Phone number */}
                <Box flexDirection="column" mb={20}>
                    {/* Label */}
                    <Box
                        mb={6}
                    >
                        <Typography variant="body2">
                            전화번호
                        </Typography>
                    </Box>

                    {/* Input */}
                    <TextField
                        fullWidth
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        placeholder={"전화번호를 입력해주세요."}
                        inputStatus={userNameInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                    />
                </Box>

                {/* Controller section */}
                <Box>
                    <Button
                        onClick={() => {
                            navigate("/sign_up/user_info")
                        }}
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
                        가입하기
                    </Button>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default UserInfoView