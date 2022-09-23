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
        style.default = setDefault(Object.assign(style.default, baseStyle))

        //* Set hover
        style.hover = setHover(Object.assign(style.hover, baseStyle))

        //* Set action
        style.action = setAction(Object.assign(style.action, baseStyle))

        //* Set disabled
        style.disabled = setDisabled(Object.assign(style.disabled, baseStyle))

        return StyleSheet.create(style)
    }

    const setDefault = (style: ViewStyle) => {
        return style
    }

    const setHover = (style: ViewStyle) => {
        return style
    }

    const setAction = (style: ViewStyle) => {
        return style
    }

    const setDisabled = (style: ViewStyle) => {
        return style
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

        baseStyle.borderRadius = 30
        baseStyle.width = 50
        baseStyle.height = 50
        baseStyle.justifyContent = "center"
        baseStyle.alignItems = "center"

        return baseStyle
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
                    {
                        backgroundColor: pressed ? "white" : "white"
                    },
                    buttonStyle.default 
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
                    <Icon name={props.iconName} size={(props.iconSize !== undefined) ? props.iconSize : 30} color={props.fontColor} />
                </Box>
                
            </Box>
        </Pressable>
    )
}

export default IconButton