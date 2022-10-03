//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link, Outlet } from "react-router-native";
import { Avatar, Divider, Typography } from "../../core/display";
import { Box } from "../../core/layout";

//* Import modules

//* Import interfaces
import ISignUpView from "./interfaces/ISignUpView"

const SignUpView = (props: ISignUpView) => {
    //* Modules

    /**
     * States
     */ 
    //* Terms
    const [serviceTermAgreement, setServiceTermAgreement] = React.useState<boolean>(false)
    const [privacyTermAgreement, setPrivacyTermAgreement] = React.useState<boolean>(false)

    //* User info
    const [userName, setUserName] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")
    const [primaryAddress, setPrimaryAddress] = React.useState<string>("")
    const [zipcode, setZipcode] = React.useState<number | null>(null)
    const [detailedAddress, setDetailedAddress] = React.useState<string>("")
    const [birthday, setBirthday] = React.useState<Date | null>(null)
    const [gender, setGender] = React.useState<string>("")

    return (
        <Box px={14} pb={250} flexDirection="column">
            <Outlet />
        </Box>
    )
}

export default SignUpView