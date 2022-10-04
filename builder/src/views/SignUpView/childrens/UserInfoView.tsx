//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { useNavigate } from "react-router-native";
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box, Grid } from "../../../core/layout";

//* Import modules
import { Button, TextField } from "../../../core/input";
import { Communicator, RegexManager } from "../../../core/base";

//* Import interfaces
import IUserInfoView from "../interfaces/IUserInfoView"
import IUserInputStatus from '../../../core/input/TextField/interfaces/IUserInputStatus';

//* Import contexts
import { SignUpContext } from "../components/SignUpContext";


const UserInfoView = (props: IUserInfoView) => {
    //* Modules
    const navigate = useNavigate()
    const regex = new RegexManager()
    const communicator = new Communicator({
        FIND_ALL: {path: "/api/auth/find_one", method: "get"}
    },
    {
        FIND_ALL: {
            FIND_OPTION_KEY_LIST: {
                userName: "USER_NAME",
            },
            RESPONSE_OPTION_KEY_LIST: {}
        }
    })

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
    const [isUserNameDoubleChecked, setIsUserNameDoubleChecked] = React.useState<boolean>(false)

    const [userNameInputStatus, setUserNameInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [fullNameInputStatus, setFullNameInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [passwordInputStatus, setPasswordInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [passwordConfirmInputStatus, setPasswordConfirmInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [emailInputStatus, setEmailInputStatus] = React.useState<IUserInputStatus>({status: "default"})
    const [phoneNumberInputStatus, setPhoneNumberInputStatus] = React.useState<IUserInputStatus>({status: "default"})

    //* Functions
    const doubleCheckUserName = () => {
        //* Double check
        communicator.findAll(
            {
                userName: userName
            },
            (response) => {
                console.log(response.data.result)

                if (response.data.result == false) {
                    setUserNameInputStatus({status: "passed"})
                } else {
                    setUserNameInputStatus({status: "error2"})
                }
            },
            (error) => {
                console.log(JSON.stringify(error))
            }
        )
    }

    const validateInputs = () => {
        //* Check status
        let allInputValidated = true
        
        // Check userName & double check
        if (userNameInputStatus.status != "passed") {
            if (userName.length == 0) {
                setUserNameInputStatus({status: "required"})
            } else {
                // Need double check
                setUserNameInputStatus({status: "required2"})
            }

            allInputValidated = false
        }

        //* Validate full name

        //* Validate password
        if (passwordInputStatus.status != "passed") {
            if (password.length == 0) {
                setPasswordInputStatus({status: "required"})
            }

            allInputValidated = false
        }

        //* Validate password confirm
        if (passwordConfirmInputStatus.status != "passed") {
            if (passwordConfirm.length == 0) {
                setPasswordConfirmInputStatus({status: "required"})
            }

            allInputValidated = false
        }

        //* Validate email
        if (emailInputStatus.status != "passed") {
            if (email.length == 0) {
                setEmailInputStatus({status: "required"})
            }
            

            allInputValidated = false
        }

        //* Validate phone number
        if (phoneNumberInputStatus.status != "passed") {
            if (phoneNumber.length == 0) {
                setPhoneNumberInputStatus({status: "required"})
            }

            allInputValidated = false
        }

        return allInputValidated
    }

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box px={14} pb={250} flexDirection="column">
                {/* User name with double check button */}
                <Box flexDirection="column" mb={15}>
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
                                onChange={(text) => {
                                    setIsUserNameDoubleChecked(false)
                                }}
                                onBlur={(text) => {
                                    if (text.length == 0) {
                                        setUserNameInputStatus({status: "default"})

                                    } else {
                                        //* Validate user name
                                        const userNameValidationResult = regex.validateUserName(
                                            text,
                                            5,
                                            20
                                        )

                                        if (userNameValidationResult == true) {
                                            setUserNameInputStatus({status: "default"})

                                        } else {
                                            setUserNameInputStatus({status: "error"})
                                        }
                                    }
                                }}
                                fullWidth
                                value={userName}
                                setValue={setUserName}
                                placeholder={"아이디를 입력해주세요."}
                                inputStatus={userNameInputStatus}
                                inputCaptionConfig={{
                                    defaultMessage: "5~20자의 영문, 숫자를 입력해주세요.",
                                    errorMessage: "잘못된 형식의 아이디입니다. 다시 입력해주세요.",
                                    secondErrorMessage: "이미 사용중인 아이디입니다.",
                                    requiredMessage: "아이디를 입력해주세요.",
                                    secondRequiredMessage: "중복 확인이 필요합니다.",
                                    passedMessage: "사용 가능한 아이디입니다."
                                }}
                                
                            />
                        </Grid>

                        <Grid role={"item"} xs={4}>
                            <Box pl={10}>
                                <Button
                                    onClick={() => {
                                        doubleCheckUserName()
                                    }}
                                    fullWidth
                                    disabled={!(userName.length >= 5)}
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
                <Box flexDirection="column" mb={15}>
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
                        maxLength={10}
                        inputStatus={fullNameInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                        onBlur={(text) => {
                            if (text.length == 0) {
                                setFullNameInputStatus({status: "default"})

                            } else {
                                //* Validate email
                                const fullNameValidationResult = regex.validateFullName(text, 1, 10)

                                if (fullNameValidationResult) {
                                    setFullNameInputStatus({status: "passed"})

                                } else {
                                    setFullNameInputStatus({status: "error"})
                                }
                            }
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
                        maxLength={20}
                        setValue={setPassword}
                        placeholder={"비밀번호를 입력해주세요."}
                        inputStatus={passwordInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                        onChange={
                            (text) => {
                                //* Check password confirm if field is not empty
                                if (passwordConfirm.length != 0) {
                                    const passwordConfirmValidationResult = (text == passwordConfirm)

                                    //* Re-validate password confirm
                                    if (passwordConfirmValidationResult) {
                                        setPasswordConfirmInputStatus({status: "passed"})

                                    } else {
                                        setPasswordConfirmInputStatus({status: "error"})
                                    }
                                }
                            }
                        }
                        onBlur={(text) => {
                            if (text.length == 0) {
                                setPasswordConfirmInputStatus({status: "default"})

                            } else {
                                //* Validate password
                                const validationResult = regex.validatePassword(
                                    text,
                                    8,
                                    20
                                )

                                if (validationResult == true) {
                                    setPasswordInputStatus({status: "passed"})

                                } else {
                                    setPasswordInputStatus({status: "error"})
                                }
                            }
                        }}
                    />
                </Box>

                {/* Password confirm */}
                <Box flexDirection="column" mb={15}>
                    {/* Input */}
                    <TextField
                        fullWidth
                        value={passwordConfirm}
                        maxLength={20}
                        setValue={setPasswordConfirm}
                        placeholder={"비밀번호를 한번 더 입력해주세요."}
                        inputStatus={passwordConfirmInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                        onBlur={(text) => {
                            if (passwordConfirm.length != 0) {
                                const passwordConfirmValidationResult = (text == password)

                                //* Re-validate password confirm
                                if (passwordConfirmValidationResult) {
                                    setPasswordConfirmInputStatus({status: "passed"})

                                } else {
                                    setPasswordConfirmInputStatus({status: "error"})
                                }
                            }
                        }}
                    />
                </Box>

                {/* Email */}
                <Box flexDirection="column" mb={15}>
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
                        inputStatus={emailInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                        onBlur={(text) => {
                            //* Check email if field is not empty
                            if (text.length == 0) {
                                setEmailInputStatus({status: "default"})

                            } else {
                                //* Validate email
                                const emailValidationResult = regex.validateEmail(text)

                                if (emailValidationResult) {
                                    setEmailInputStatus({status: "passed"})

                                } else {
                                    setEmailInputStatus({status: "error"})
                                }
                            }
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
                        maxLength={11}
                        setValue={setPhoneNumber}
                        placeholder={"전화번호를 입력해주세요."}
                        inputStatus={phoneNumberInputStatus}
                        inputCaptionConfig={{
                            defaultMessage: ""
                        }}
                        onBlur={(text) => {
                            if (text.length == 0) {
                                setPhoneNumberInputStatus({status: "default"})

                            } else {
                                //* Validate email
                                const phoneNumberValidationResult = regex.validateCellphoneNumber(text, 10, 11)

                                if (phoneNumberValidationResult) {
                                    setPhoneNumberInputStatus({status: "passed"})

                                } else {
                                    setPhoneNumberInputStatus({status: "error"})
                                }
                            }
                        }}
                    />
                </Box>

                {/* Controller section */}
                <Box>
                    <Button
                        onClick={() => {
                            if (validateInputs() == true) {
                                navigate("/sign_up/user_info")
                            }
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