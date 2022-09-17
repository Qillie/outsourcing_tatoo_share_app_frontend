//* Import libraries
import React from "react"
import { StyleSheet, ViewStyle } from "react-native"

const GridStyles: {[key: string]: ViewStyle} = {
	"grid-container": {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        flexDirection: "row"
    },
    "grid-item-auto": {
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: "100%"
    },
    "grid-item-1": {
        flexGrow: 0,
        flexBasis: "8.333333%",
        maxWidth: "8.333333%"
    },
    "grid-item-2": {
        flexGrow: 0,
        flexBasis: "16.666667%",
        maxWidth: "16.666667%"
    },
    "grid-item-3": {
        flexGrow: 0,
        flexBasis: "25%",
        maxWidth: "25%"
    },
    "grid-item-4": {
        flexGrow: 0,
        flexBasis: "33.333333%%",
        maxWidth: "33.333333%%"
    },
    "grid-item-5": {
        flexGrow: 0,
        flexBasis: "41.666667%",
        maxWidth: "41.666667%"
    },
    "grid-item-6": {
        flexGrow: 0,
        flexBasis: "50%",
        maxWidth: "50%"
    },
    "grid-item-7": {
        flexGrow: 0,
        flexBasis: "58.333333%",
        maxWidth: "58.333333%"
    },
    "grid-item-8": {
        flexGrow: 0,
        flexBasis: "66.666667%",
        maxWidth: "66.666667%"
    },
    "grid-item-9": {
        flexGrow: 0,
        flexBasis: "75%",
        maxWidth: "75%"
    },
    "grid-item-10": {
        flexGrow: 0,
        flexBasis: "83.333333%",
        maxWidth: "83.333333%"
    },
    "grid-item-11": {
        flexGrow: 0,
        flexBasis: "91.666667%",
        maxWidth: "91.666667%"
    },
    "grid-item-12": {
        flexGrow: 0,
        flexBasis: "100%",
        maxWidth: "100%"
    }
}

export default GridStyles
