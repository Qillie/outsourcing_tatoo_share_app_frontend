//* Import libraries
import React from "react"
import { ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import ReactNativeModal from "react-native-modal";

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box, Grid } from "../../layout"
import { Button, IconButton } from "../../input"
import Typography from "../Typography";

//* Import interfaces
import IModal from "./interfaces/IModal"
import { SafeAreaView } from "react-native-safe-area-context";


const Modal = (props: IModal) => {
    //* States
    /**
     * State to control visibility
     */
    const [isVisible, setIsVisible] = React.useState<boolean>(false)

    const [modalStyle, setModalStyle] = React.useState<StyleProp<ViewStyle>>({})
    const [contentBoxStyle, setContentBoxStyle] = React.useState<{height?: string | number}>()

    //* Functions
    const openModal = () => {
        if (props.setIsVisible !== undefined) {
            props.setIsVisible(true)
        } else {
            setIsVisible(true)
        }
    }

    const closeModal = () => {
        if (props.setIsVisible !== undefined) {
            props.setIsVisible(false)
        } else {
            setIsVisible(false)
        }
    }

    const setModalType = () => {
        if (props.variant === undefined || props.variant == "basic") {
            //* Set modal style
            let basicTypeModalStyle: StyleProp<ViewStyle> = {}
            setModalStyle(basicTypeModalStyle)

            //* Set content box style
            let basicTypeModalContentStyle: {height?: string | number} = {
                height: "50%"
            }

            setContentBoxStyle(basicTypeModalContentStyle)

        } else if (props.variant == "drawer") {
            //* Set modal style
            let drawerTypeModalStyle: StyleProp<ViewStyle> = {
                margin: 0,
                justifyContent: "flex-end"
            }

            setModalStyle(drawerTypeModalStyle)

            //* Set content box style
            let drawerTypeModalContentStyle: {height?: string | number} = {
                height: "90%"
            }

            setContentBoxStyle(drawerTypeModalContentStyle)
        }
    }

    //* Hooks
    /**
     * Hook to set modal style
     */
    React.useEffect(() => {
        setModalType()
    }, [])

    return (
        <View style={{flex: 1}}>
            {/* Modal opener section */}
            {
                (props.openerElement !== undefined) && (
                    <React.Fragment>
                        {
                            props.openerElement(openModal)
                        }
                    </React.Fragment>
                )
            }

            {/* Modal section */}
            <ReactNativeModal
                onModalWillHide={() => {
                    if (props.onClose !== undefined) {
                        props.onClose()
                    }
                }}
                style={modalStyle}
                isVisible={
                    (props.isVisible !== undefined) ?
                    props.isVisible
                    :
                    isVisible
                }
                onBackdropPress={closeModal}
            >
                <Box
                    backgroundColor="white"
                    flexDirection={"column"}
                    borderRadius={7}
                    {...contentBoxStyle}
                >
                    {/* Close button */}
                    <Box alignX="space-between" alignY="center">
                        <Box
                            width={"33.333%"}
                            height={"100%"}
                        >
                            <IconButton
                                iconName="close"
                                onClick={closeModal}
                            />
                        </Box>

                        <Box
                            width={"33.333%"}
                            height={"100%"}
                            alignX="center"
                            alignY="center"
                        >
                            {/* Title section */}
                            <React.Fragment>
                            {
                                (props.title !== undefined) && (
                                    <Typography
                                        variant="h4"
                                    >
                                        {props.title}
                                    </Typography>
                                )
                            }
                            </React.Fragment>
                        </Box>

                        <Box
                            width={"33.333%"}
                            height={"100%"}
                            alignX="right"
                            alignY="center"
                        >
                            {/* Confirm section */}
                            <React.Fragment>
                                {
                                    (props.headerElement !== undefined) && (
                                        props.headerElement(closeModal)
                                    )
                                }
                            </React.Fragment>
                        </Box>

                        
                    </Box>
                    
                    
                    <ScrollView>
                        {props.children}
                    </ScrollView>
                    
                </Box>
            </ReactNativeModal>
        </View>
    )
}

export default Modal