//* Import libraries
import React from "react"
import { StyleSheet, Text } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import IDivider from "./interfaces/IDivider"

const Divider = (props: IDivider) => {
    //* States

    //* Functions

    const setStyle = () => {
        // let style:{ default: TextStyle } = { default: {} }
        
        // style.default.fontSize = setFontSize(props.variant)

        // return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box 
            borderColor={ThemeCoreSingleton.paletteManager.palette?.grey?.[200]}
            width={"100%"}
            borderBottomWidth={1}
            mt={props.my}
            mb={props.my}
        />
    )
}

export default Divider