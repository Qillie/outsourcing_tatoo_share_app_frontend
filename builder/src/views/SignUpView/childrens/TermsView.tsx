//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box } from "../../../core/layout";

//* Import modules

//* Import interfaces
import ITermsView from "../interfaces/ITermsView"

const TermsView = (props: ITermsView) => {
    //* Modules

    //* States
    const [userName, setUserName] = React.useState<string>("")

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box px={14} pb={250} flexDirection="column">
                
            </Box>
        </ScrollView>
    )
}

export default TermsView