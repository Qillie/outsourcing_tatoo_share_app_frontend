//* Import libraries
import React from "react"
import { StyleSheet, Pressable, PressableProps } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Typography } from "../../display"
import { Box } from "../../layout"

//* Import interfaces
import IButton from "./interfaces/IButton"

const Button = (props: IButton) => {    
    //* States

    //* Functions
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

    const setBaseStyle = () => {

    }
    
    const setDefault = () => {

    }

    const setHover = () => {
        
    }

    const setAction = () => {
        
    }

    const setDisabled = () => {
        
    }

    const setStyle = () => {
        let style:{ 
            default: PressableProps,
            hover: PressableProps,
            action: PressableProps,
            disabled: PressableProps,
            activate: PressableProps
        } = {
            default: {},
            hover: {},
            action: {},
            disabled: {},
            activate: {}
        }

        //* Set base style
        let baseStyle: PressableProps = {} 

        //* Set default
        setDefault()

        //* Set hover
        setHover()

        //* Set action
        setAction()

        //* Set disabled
        setDisabled()

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <Pressable
            onPress={
                (event) => {
                    
                }
            }
            style={
                ({pressed}) => [
                    {
                        backgroundColor: pressed ? "red" : "white"
                    },
                    {} 
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
                <Typography>
                    { props.children }
                </Typography>
            </Box>
        </Pressable>
    )
}

export default Button