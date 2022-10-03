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
                {/* Agree all */}
                <Box>

                </Box>

                {/* Service term */}
                <Box>
                    <Box>
                        {/* Toggle button */}
                        <Box>
                            <IconButton 
                                iconName="check"
                                iconSize={25}
                                buttonSize={40}
                                buttonPalette={(serviceTermAgreement) ? "primary" : "black"}
                                variant={(serviceTermAgreement) ? "outlined" : "contained"}
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
                            <Typography>
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
                    <Typography>
                        개인정보 수집 및 이용 동의
                    </Typography>
                </Box>

                {/* Controller section */}
                <Box>

                </Box>
            </Box>
        </ScrollView>
    )
}

export default TermsView