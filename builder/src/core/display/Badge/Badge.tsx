//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"
import Typography from "../Typography"

//* Import interfaces
import IBadge from "./interfaces/IBadge"

const Badge = (props: IBadge) => {
    //* States

    //* Functions
    const setBadgeStyle = () => {
        let style:{ badge: ViewStyle } = {badge: {
            paddingHorizontal: 5,
            paddingVertical: 3,
            backgroundColor: ThemeCoreSingleton.paletteManager.palette?.grey?.[300],
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center"
        }}

        //* Set basic styles
        if (props.px !== undefined) {
            style.badge.paddingHorizontal = props.px
        }

        if (props.py !== undefined) {
            style.badge.paddingVertical = props.py
        }

        if (props.background !== undefined) {
            style.badge.backgroundColor = props.background
        }

        if (props.borderRadius !== undefined) {
            style.badge.borderRadius = props.borderRadius
        }

        style.badge.minWidth = props.minWidth

        return StyleSheet.create(style).badge
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <View
            style={setBadgeStyle()}
        >
            <Box onClick={props.onClick}>
                <Typography
                    variant={(props.fontVariant !== undefined) ? props.fontVariant : "subtitle2"}
                    color={(props.fontColor !== undefined) ? props.fontColor : ThemeCoreSingleton.paletteManager.palette?.black}
                >
                    {props.children}
                </Typography>
            </Box>
        </View>
    )
}

export default Badge