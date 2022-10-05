//* Import libraries
import React from "react"
import { StyleSheet, Pressable, PressableProps, ViewStyle } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Typography } from "../../display"
import { Box } from "../../layout"

//* Import interfaces
import IButton from "./interfaces/IButton"

const Button = (props: IButton) => { 
    //* Functions
    const setSize = () => {
        const size = (props.size !== undefined) ? props.size : "medium"

        let py = 0

        if (size == "small") {
            py = 5

        } else if (size == "medium") {
            py = 8

        } else if (size == "large") {
            py = 10
            
        }

        return py
    }

    const setTextColor = () => {
        if (props.fontColor !== undefined || props.variant === undefined) {
            return props.fontColor

        } else {
            if (props.variant == "outlined") {
                return (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : "grey"

            } else {
                return "white"
            }
        }
    }

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

        //* Color
        if (props.variant == "outlined") {
            disabledStyle.borderWidth = 1
            disabledStyle.borderColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500") : "transparent"

        } else if (props.variant == "contained") {
            disabledStyle.backgroundColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500") : "transparent"
        }

        return disabledStyle
    }

    const setBaseStyle = () => {
        let baseStyle: ViewStyle = {}

        //* Layouts
        if (props.fullWidth == true) {
            baseStyle.width = "100%"
        }

        baseStyle.justifyContent = "center"
        baseStyle.alignItems = "center"
        baseStyle.borderRadius = props.borderRadius

        //* Color
        if (props.variant == "outlined") {
            baseStyle.borderWidth = 1
            baseStyle.borderColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : "transparent"

        } else if (props.variant == "contained") {
            baseStyle.borderWidth = 1
            baseStyle.borderColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : "transparent"
            baseStyle.backgroundColor = (props.buttonPalette !== undefined) ? ThemeCoreSingleton.paletteManager.getColor(props.buttonPalette, "main") : "transparent"
        }

        return baseStyle
    }

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

        return StyleSheet.create(style)
    }

    const setButtonStatusStyle = (pressed: boolean) => {
        if (props.disabled == true) {
            return (
                buttonStyle.disabled
            )
        } else {
            return (
                (pressed) ? buttonStyle.action : buttonStyle.default
            )
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
    }, [props.variant])

    return (
        <Pressable
            onPress={
                (event) => {
                    if (props.onClick !== undefined && props.disabled != true) {
                        props.onClick(event)
                    }
                }
            }
            style={
                ({pressed}) => [
                    setButtonStatusStyle(pressed)
                ]
            }
        >
            <Box
                flexDirection={(props.iconDirection !== undefined) ? props.iconDirection : "row"}
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
                <Box
                    mr={(props.iconDirection === undefined || props.iconDirection == "row") ? props.iconGap : undefined}
                    mb={(props.iconDirection == "column") ? props.iconGap : undefined}
                >
                    <React.Fragment>
                        {
                            (props.iconName !== undefined) && (
                                <Icon color={props.typographyProps?.color} name={props.iconName} size={(props.iconSize !== undefined) ? props.iconSize : 30} />
                            )
                        }
                    </React.Fragment>
                </Box>
                
                <Typography {...props.typographyProps} color={setTextColor()}>
                    { props.children }
                </Typography>
            </Box>
        </Pressable>
    )
}

export default Button