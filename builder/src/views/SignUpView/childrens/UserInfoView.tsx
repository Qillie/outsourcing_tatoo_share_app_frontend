//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { useNavigate } from "react-router-native";
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box } from "../../../core/layout";

//* Import modules
import { TextField } from "../../../core/input";

//* Import interfaces
import IUserInfoView from "../interfaces/IUserInfoView"

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
        phoneNumber, setPhoneNumber,
        gender, setGender
    } = React.useContext(SignUpContext)

    //* States
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>("")

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


                    {/* Input */}
                    <TextField
                        fullWidth
                        value={userName}
                        setValue={setUserName}
                        placeholder={"아이디를 입력해주세요."}
                    />

                    {/* Validation message */}
                    <Box
                        mt={4}
                    >
                        <Typography variant="subtitle1">
                            아이디를 입력해주세요.
                        </Typography>
                    </Box>
                </Box>

                {/* Full name */}
                <Box>
                    
                </Box>

                {/* Password */}
                <Box>
                    
                </Box>

                {/* Password confirm */}
                <Box>
                    
                </Box>

                {/* Email */}
                <Box>
                    
                </Box>

                {/* Phone number */}
                <Box>
                    
                </Box>

                {/* Email */}
                <Box>

                </Box>
            </Box>
        </ScrollView>
    )
}

export default UserInfoView