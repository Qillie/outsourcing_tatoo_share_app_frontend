//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box } from "../../../core/layout";
import { IconButton } from "../../../core/input";

//* Import interfaces
import ITermsView from "../interfaces/ITermsView"

//* Import contexts
import { SignUpContext } from "../components/SignUpContext";


const TermsView = (props: ITermsView) => {
    //* Modules

    //* Received contexts
    const { 
        serviceTermAgreement, setServiceTermAgreement, 
        privacyTermAgreement, setPrivacyTermAgreement 
    } = React.useContext(SignUpContext)

    //* States
    const [agreeAllTerms, setAgreeAllTerms] = React.useState<boolean>(false)
    const [serviceTerm, setServiceTerm] = React.useState<string>("")
    const [privacyTerm, setPrivacyTerm] = React.useState<string>("")

    //* Functions
    const onClickToggleButton = (value: boolean, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter(!value)

        console.log(value)
    }

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box px={14} pb={250} flexDirection="column">
                {/* Agree all terms */}
                <Box>
                    <Box alignY={"center"}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={23}
                                buttonSize={32}
                                buttonPalette={(agreeAllTerms) ? "primary" : "grey"}
                                variant={(agreeAllTerms) ? "contained" : "outlined"}
                                onClick={
                                    () => {
                                        onClickToggleButton(
                                            agreeAllTerms,
                                            setAgreeAllTerms
                                        )
                                    }
                                }
                            />
                        </Box>

                        {/* Title */}
                        <Box>
                            <Typography
                                variant="h5"
                            >
                                이용약관, 개인정보 수집 및 이용, 서비스 이용약관 동의에 모두 동의합니다.
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>

                    </Box>
                </Box>

                {/* Service term */}
                <Box>
                    <Box alignY={"center"}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={20}
                                buttonSize={28}
                                buttonPalette={(serviceTermAgreement) ? "primary" : "grey"}
                                variant={(serviceTermAgreement) ? "contained" : "outlined"}
                                onClick={
                                    () => {
                                        onClickToggleButton(
                                            serviceTermAgreement,
                                            setServiceTermAgreement
                                        )
                                    }
                                }
                            />
                        </Box>

                        {/* Title */}
                        <Box>
                            <Typography
                                variant="h5"
                            >
                                서비스 이용약관 동의
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>

                    </Box>
                </Box>

                {/* Privacy term */}
                <Box>
                    <Box alignY={"center"}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={20}
                                buttonSize={28}
                                buttonPalette={(privacyTermAgreement) ? "primary" : "grey"}
                                variant={(privacyTermAgreement) ? "contained" : "outlined"}
                                onClick={
                                    () => {
                                        onClickToggleButton(
                                            privacyTermAgreement,
                                            setPrivacyTermAgreement
                                        )
                                    }
                                }
                            />
                        </Box>

                        {/* Title */}
                        <Box>
                            <Typography
                                variant="h5"
                            >
                                개인정보 수집 및 이용 동의
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>

                    </Box>
                </Box>

                {/* Controller section */}
                <Box>

                </Box>
            </Box>
        </ScrollView>
    )
}

export default TermsView