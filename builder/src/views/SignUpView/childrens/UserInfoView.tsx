//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box } from "../../../core/layout";

//* Import modules

//* Import interfaces
import IUserInfoView from "../interfaces/IUserInfoView"

const UserInfoView = (props: IUserInfoView) => {
    //* Modules

    //* States
    const [userName, setUserName] = React.useState<string>("")
    const [birthday, setBirthday] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")
    const [primaryAddress, setPrimaryAddress] = React.useState<string>("")
    const [zipcode, setZipcode] = React.useState<string>("")
    const [detailedAddress, setDetailedAddress] = React.useState<string>("")
    const [gender, setGender] = React.useState<string>("")

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box px={14} pb={250} flexDirection="column">
                <Typography>
                    asfdsfsdfasd
                </Typography>
            </Box>
        </ScrollView>
    )
}

export default UserInfoView