//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import IIconButton from "./interfaces/IIconButton"

const IconButton = (props: IIconButton) => {
    const setDefault = () => {
        //* Color
        let defaultStyle: ViewStyle = {}

        return defaultStyle
    }

    const setHover = () => {
        //* Color
        let hoverStyle: ViewStyle = {}

        return hoverStyle
    }

    const setAction = () => {
        //* Color
        let actionStyle: ViewStyle = {}

        actionStyle.backgroundColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "dark") : "transparent"

        return actionStyle
    }

    const setDisabled = () => {
        //* Color
        let disabledStyle: ViewStyle = {}

        return disabledStyle
    }

    //* Functions
    const setSize = () => {
        const size = (props.size !== undefined) ? props.size : "medium"

        let py = 0

        // if (size == "small") {
        //     py = 5

        // } else if (size == "medium") {
        //     py = 8

        // } else if (size == "large") {
        //     py = 11
            
        // }

        return py
    }

    const setBaseStyle = () => {
        let baseStyle: ViewStyle = {}

        //* Layouts
        baseStyle.borderRadius = (props.buttonSize !== undefined) ? (props.buttonSize / 2) : 25
        baseStyle.width = (props.buttonSize !== undefined) ? props.buttonSize : 50
        baseStyle.height = (props.buttonSize !== undefined) ? props.buttonSize : 50
        baseStyle.justifyContent = "center"
        baseStyle.alignItems = "center"

        //* Color
        if (props.variant == "outlined") {
            baseStyle.borderWidth = 1
            baseStyle.borderColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : "transparent"

        } else if (props.variant == "contained") {
            baseStyle.backgroundColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : "transparent"
        }
 
        return baseStyle
    }

    //* States
    const setStyle = () => {
        //* Set base style
        let baseStyle: ViewStyle = setBaseStyle()

        let style:{ 
            default: ViewStyle,
            hover: ViewStyle,
            action: ViewStyle,
            disabled: ViewStyle,
            activate: ViewStyle
        } = {
            default: {},
            hover: {},
            action: {},
            disabled: {},
            activate: {}
        }

        //* Set default
        style.default = Object.assign({...baseStyle}, setDefault())

        //* Set hover
        style.hover = Object.assign({...baseStyle}, setHover())

        //* Set action
        style.action = Object.assign({...baseStyle}, setAction())

        //* Set disabled
        style.disabled = Object.assign({...baseStyle}, setDisabled())

        // console.log(style)

        return StyleSheet.create(style)
    }

    const setIconColor = () => {
        if (props.fontColor !== undefined || props.variant === undefined) {
            return props.fontColor

        } else {
            if (props.variant == "outlined") {
                return (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : ThemeCoreSingleton.paletteManager.getColor("black")

            } else {
                return "white"
            }
        }
    }

    //* States
    const [buttonStyle, setButtonStyle] = React.useState<{default: ViewStyle, hover: ViewStyle, action: ViewStyle, disabled: ViewStyle, activate: ViewStyle}>({
        default: {},
        hover: {},
        action: {},
        disabled: {},
        activate: {}
    })

    //* Life cycles
    React.useEffect(() => {
        setButtonStyle(setStyle())

        console.log(buttonStyle)
    }, [])

    return (
        <Pressable
            onPress={
                (event) => {
                    if (props.onClick !== undefined) {
                        props.onClick(event)
                    }
                }
            }
            style={
                ({pressed}) => [
                    (pressed) ? buttonStyle.action : buttonStyle.default
                ]
            }
        >
            
            <Box
                alignX="center" 
                alignY="center"
                m={props.m}
                mb={props.mb}
                ml={props.ml}
                mr={props.mr}
                mt={props.mt}
                mx={props.mx}
                my={props.my}
                p={props.p}
                pb={props.p}
                pl={props.pl}
                pr={props.pr}
                pt={props.pt}
                px={props.px}
                py={(props.py !== undefined) ? props.py : setSize()}
            >
                <Box>
                    <Icon 
                        name={props.iconName} 
                        size={(props.iconSize !== undefined) ? props.iconSize : 30} 
                        color={setIconColor()} 
                    />
                </Box>
            </Box>
        </Pressable>
    )
}

export default IconButton