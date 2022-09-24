//* Import libraries
import React from "react"
import { StyleSheet, ViewStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import IDivider from "./interfaces/IDivider"

const Divider = (props: IDivider) => {
    //* States
    const [marginTop, setMarginTop] = React.useState<number>(0)
    const [marginBottom, setMarginBottom] = React.useState<number>(0)

    //* Functions
    const setStyle = () => {
        if (props.my !== undefined) {
            setMarginTop(props.my)
            setMarginBottom(props.my)
        }

        if (props.mt !== undefined) {
            setMarginTop(props.mt)
        }

        if (props.mb !== undefined) {
            setMarginBottom(props.mb)
        }
    }

    //* Life cycles
    React.useEffect(() => {
        setStyle()
    }, [])

    return (
        <Box 
            borderColor={ThemeCoreSingleton.paletteManager.palette?.grey?.[200]}
            width={"100%"}
            borderBottomWidth={1}
            mt={marginTop}
            mb={marginBottom}
        />
    )
}

export default Divider