//* Import libraries
import React from "react"
import { StyleSheet, Pressable, PressableProps, ViewStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Typography } from "../../display"
import { Box } from "../../layout"

//* Import interfaces
import IButton from "./interfaces/IButton"

const Button = (props: IButton) => { 
    //* Functions
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
    
    const setSize = () => {
        const size = (props.size !== undefined) ? props.size : "medium"

        let py = 0

        if (size == "small") {
            py = 5

        } else if (size == "medium") {
            py = 8

        } else if (size == "large") {
            py = 11
            
        }

        return py
    }

    const setVariation = () => {

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

    const setBaseStyle = () => {
        let baseStyle: ViewStyle = {}

        if (props.fullWidth == true) {
            baseStyle.width = "100%"
        }

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
                        backgroundColor: pressed ? "red" : "white"
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
                <Typography {...props.typographyProps}>
                    { props.children }
                </Typography>
            </Box>
        </Pressable>
    )
}

export default Button