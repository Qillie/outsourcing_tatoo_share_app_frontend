//* Import libraries
import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import ReactNativeModal from "react-native-modal";

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box, Grid } from "../../layout"
import { Button, IconButton } from "../../input"

//* Import interfaces
import IModal from "./interfaces/IModal"

const Modal = (props: IModal) => {
    //* States
    const [isVisible, setIsVisible] = React.useState<boolean>(false)

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

    return (
        <React.Fragment>
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
                    minHeight={400}
                    flexDirection={"column"}
                    borderRadius={7}
                >
                    {/* Close button */}
                    <Box alignX="right">
                        <IconButton
                            iconName="close"
                            onClick={closeModal}
                        />
                    </Box>

                    <Box overflow="scroll">
                        {props.children}
                    </Box>
                </Box>
            </ReactNativeModal>
        </React.Fragment>
    )
}

export default Modal