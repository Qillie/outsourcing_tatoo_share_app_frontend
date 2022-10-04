//* Import libraries
import React from "react"
import { ScrollView, Text, View } from 'react-native';
import { useNavigate } from "react-router-native";

//* Import modules
import { Avatar, Divider, Typography } from "../../../core/display";
import { Box } from "../../../core/layout";
import { Button, IconButton } from "../../../core/input";
import ThemeCoreSingleton from '../../../core/design/ThemeCore/ThemeCoreSingleton';

//* Import interfaces
import ITermsView from "../interfaces/ITermsView"

//* Import contexts
import { SignUpContext } from "../components/SignUpContext";
import Communicator from '../../../core/base/Communicator';



const TermsView = (props: ITermsView) => {
    //* Modules
    const navigate = useNavigate()
    const communicator = new Communicator({
        FIND_ALL: {path: "/api/term/find_all", method: "get"}
    },
    {
        FIND_ALL: {
            FIND_OPTION_KEY_LIST: {
                termType: "TERM_TYPE",
            },
            RESPONSE_OPTION_KEY_LIST: {}
        }
    })

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
        //* Set
        const tempValue = !value

        if (tempValue == false) {
            setAgreeAllTerms(false)
        }
        
        setter(tempValue)
    }

    const onClickAgreeAllButton = () => {
        //* Set
        const tempAgreeAllterms = !agreeAllTerms
        setServiceTermAgreement(tempAgreeAllterms)
        setPrivacyTermAgreement(tempAgreeAllterms)
        setAgreeAllTerms(tempAgreeAllterms)
    }

    const disableNextButton = () => {
        if (serviceTermAgreement && privacyTermAgreement) {
            return false
        } else {
            return true
        }
    }
    
    //* Hooks
    /**
     * Hook to get terms (serviceTerm, privacyTerm)
     */
    React.useEffect(() => {
        //* Get service term
        communicator.findAll(
            {
                termType: "SERVICE"
            },
            (response) => {
                setServiceTerm(response.data.result)
            },
            (error) => {
                console.log(JSON.stringify(error))
            }
        )

        //* Get privacy term
        communicator.findAll(
            {
                termType: "PRIVACY"
            },
            (response) => {
                setPrivacyTerm(response.data.result)
            },
            (error) => {
                console.log(JSON.stringify(error))
            }
        )
    }, [])

    return (
        <ScrollView style={{height: "100%", paddingTop: 20}}>
            <Box pb={250} flexDirection="column">
                {/* Agree all terms */}
                <Box mb={30}>
                    <Box alignY={"center"}>
                        {/* Toggle button */}
                        <Box mr={10}>
                            <IconButton 
                                iconName="check"
                                iconSize={23}
                                buttonSize={32}
                                buttonPalette={(agreeAllTerms) ? "primary" : "grey"}
                                variant={(agreeAllTerms) ? "contained" : "outlined"}
                                onClick={onClickAgreeAllButton}
                            />
                        </Box>

                        {/* Title */}
                        <Box flexDirection="column">
                            <Typography
                                variant="h5"
                            >
                                이용약관, 개인정보 수집 및 이용,
                            </Typography>

                            <Typography
                                variant="h5"
                            >
                                서비스 이용약관 동의에 모두 동의합니다.
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>

                    </Box>
                </Box>

                {/* Service term */}
                <Box flexDirection="column" mb={30}>
                    <Box alignY={"center"} mb={15}>
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
                                fontWeight="500"
                            >
                                서비스 이용약관 동의
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>
                        <Box
                            borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")}
                            borderWidth={1}
                            width={"100%"}  
                            overflow={"scroll"}
                            height={100}
                        >
                            <ScrollView>
                                <Box
                                    p={10}
                                    
                                >
                                    <Typography>
                                        {serviceTerm}
                                    </Typography>
                                </Box>
                            </ScrollView>
                        </Box>
                    </Box>
                </Box>

                {/* Privacy term */}
                <Box flexDirection="column" mb={40}>
                    <Box alignY={"center"} mb={15}>
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
                                fontWeight="500"
                            >
                                개인정보 수집 및 이용 동의
                            </Typography>
                        </Box>
                    </Box>

                    {/* term info */}
                    <Box>
                        <Box
                            borderColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "400")}
                            borderWidth={1}
                            width={"100%"}  
                            overflow={"scroll"}
                            height={100}
                        >
                            <ScrollView>
                                <Box
                                    p={10}
                                    
                                >
                                    <Typography>
                                        {privacyTerm}
                                    </Typography>
                                </Box>
                            </ScrollView>
                        </Box>
                    </Box>
                </Box>

                {/* Controller section */}
                <Box>
                    <Button
                        onClick={() => {
                            navigate("/sign_up/user_info")
                        }}
                        fullWidth
                        disabled={disableNextButton()}
                        variant="contained"
                        buttonPalette="primary"
                        borderRadius={5}
                        typographyProps={{
                            variant: "h6"
                        }}
                        size={"large"}
                    >
                        다음으로
                    </Button>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default TermsView