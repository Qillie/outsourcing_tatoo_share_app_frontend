//* Import libraries
import React from "react"
import { StyleSheet, TextInput, TextStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Typography } from "../../display"
import { Box } from "../../layout"

//* Import interfaces
import ITextField from "./interfaces/ITextField"

type setValueString = React.Dispatch<React.SetStateAction<string>>
type setValueNumber = React.Dispatch<React.SetStateAction<number>>

const TextField = (props: ITextField) => {    
    //* States

    //* Functions
    const setMultiline = () => {
        if (props.row !== undefined && props.row != 1) {
            return true
        } else {
            return false
        }
    }

    const setKeyboardType = () => {
        if (typeof props.value == "string") {
            return "default"
        } else if (typeof props.value == "number") {
            return "numeric"
        }
    }

    const setStyle = () => {
        let style:{ 
            default: TextStyle
        } = {
            default: {}
        }

        // style.default.paddingHorizontal = 6
        style.default.padding = 7
        style.default.borderWidth = 1
        style.default.borderColor = "#bdbdbd"
        style.default.borderRadius = 4
        style.default.fontSize = ThemeCoreSingleton.typograhpyManager.getFontSize("body1")

        return StyleSheet.create(style).default
    }

    const isSetValueString = (x: any): x is setValueString => {
        if (typeof props.value == "string") {
            return true
        } else {
            return false
        }
    }

    const isSetValueNumber = (x: any): x is setValueNumber => {
        if (typeof props.value == "number") {
            return true
        } else {
            return false
        }
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <Box>
            <TextInput
                editable={(props.disabled !== undefined) ? !(props.disabled) : true}
                style={setStyle()}
                placeholder={props.placeholder}
                keyboardType={setKeyboardType()}
                multiline={setMultiline()}
                numberOfLines={props.row}
                maxLength={props.maxLength}
                value={String(props.value)}
                onChangeText={
                    (text) => {
                        if (isSetValueString(props.setValue)) {
                            props.setValue(text)

                        } else if (isSetValueNumber(props.setValue)) {
                            props.setValue(Number(text))
                        }
                    }
                }
            />
        </Box>
    )
}

export default TextField