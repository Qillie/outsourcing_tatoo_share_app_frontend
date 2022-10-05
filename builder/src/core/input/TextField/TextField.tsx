//* Import libraries
import React from "react"
import { StyleSheet, TextInput, TextStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Typography } from "../../display"
import { Box } from "../../layout"
import UserInputCaption from "./components/UserInputCaption"

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
        style.default.padding = 12
        style.default.borderWidth = 1
        style.default.borderColor = ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")
        style.default.borderRadius = 4
        style.default.fontSize = ThemeCoreSingleton.typograhpyManager.getFontSize("body1")

        if (props.row !== undefined) {
            style.default.paddingTop = 12
            style.default.height = props.row * 10
        }
        

        if (props.fullWidth == true) {
            style.default.width = "100%"
        }
        style.default.width = "100%"

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
        <Box flexDirection="column" width={"100%"}>
            <TextInput
                secureTextEntry={(props.textContentType == "password")}
                textContentType={props.textContentType}
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

                        if (props.onChange !== undefined) {
                            props.onChange(text)
                        }
                    }
                }

                onBlur={(event) => {
                    if (props.onBlur !== undefined) {
                        props.onBlur(event.nativeEvent.text)
                    }
                }}
            />

            {/* Caption */}
            <React.Fragment>
            {
                (props.inputCaptionConfig !== undefined) &&
                <UserInputCaption 
                    status={props.inputStatus}
                    defaultMessage={props.inputCaptionConfig.defaultMessage}
                    errorMessage={props.inputCaptionConfig.errorMessage}
                    requiredMessage={props.inputCaptionConfig.requiredMessage}
                    passedMessage={props.inputCaptionConfig.passedMessage}
                />
            }
            </React.Fragment>
        </Box>
    )
}

export default TextField