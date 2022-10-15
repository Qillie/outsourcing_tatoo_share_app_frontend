//* Import libraries
import React from "react"
import { Pressable, StyleSheet, View, ViewStyle } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IBox from "./interfaces/IBox"

const Box = (props: IBox) => {    
    //* States
    // const [typographyStyle, setTypographyStyle

    //* Functions
    // const setFontSize = (variant?: TFontVariant) => {
        
    // }

    const setBorder = (style: { default: ViewStyle }) => {
        //* Basic border styles
        style.default.borderRadius = props.borderRadius
        style.default.borderWidth = props.borderWidth
        style.default.borderColor = props.borderColor

        //* Positional border styles
        style.default.borderTopWidth = props.borderTopWidth
        style.default.borderRightWidth = props.borderRightWidth
        style.default.borderBottomWidth = props.borderBottomWidth
        style.default.borderLeftWidth = props.borderLeftWidth

        style.default.borderTopColor = props.borderTopColor
        style.default.borderRightColor = props.borderRightColor
        style.default.borderBottomColor = props.borderBottomColor
        style.default.borderLeftColor = props.borderLeftColor

        style.default.borderBottomLeftRadius = props.borderBottomLeftRadius
        style.default.borderBottomRightRadius = props.borderBottomRightRadius
        style.default.borderTopLeftRadius = props.borderTopLeftRadius
        style.default.borderTopRightRadius = props.borderTopRightRadius
    }

    const setHidden = (style: { default: ViewStyle }) => {
        //* Set basic hidden
        if (props.hidden == true) {
            style.default.display = "none"
        } else {
            style.default.display = "flex"
        }
    }

    const setPosition = (style: { default: ViewStyle }) => {
        //* Set physical positions
        style.default.top = props.top
        style.default.left = props.left
        style.default.right = props.right
        style.default.bottom = props.bottom
        style.default.position = props.position
        style.default.zIndex = props.zIndex
        style.default.overflow = props.overflow
    }

    const setTransform = (style: { default: ViewStyle }) => {
        let translation: (
                {translateX: number} | 
                {translateY: number} |
                {rotateX: string} |
                {rotateY: string} |
                {rotateZ: string}
            )[] 
        = []

        if (props.translateX !== undefined) {
            translation.push({translateX: props.translateX})
        }

        if (props.translateY !== undefined) {
            translation.push({translateY: props.translateY})
        }

        if (props.rotateX !== undefined) {
            translation.push({rotateX: `${props.rotateX}deg`})
        }

        if (props.rotateY !== undefined) {
            translation.push({rotateY: `${props.rotateY}deg`})
        }

        if (props.rotateZ !== undefined) {
            translation.push({rotateZ: `${props.rotateZ}deg`})
        }

        if (translation.length != 0) {
            style.default.transform = translation
        }
    }

    const setMargin = (style: { default: ViewStyle }) => {
        //* Base margin
        style.default.margin = props.m
        style.default.marginBottom = props.mb
        style.default.marginTop = props.mt
        style.default.marginLeft = props.ml
        style.default.marginRight = props.mr

        //* X, Y margins
        style.default.marginHorizontal = props.mx
        style.default.marginVertical = props.my
    }

    const setPadding = (style: { default: ViewStyle }) => {
        //* Base padding
        style.default.padding = props.p
        style.default.paddingBottom = props.pb
        style.default.paddingTop = props.pt
        style.default.paddingLeft = props.pl
        style.default.paddingRight = props.pr

        //* X, Y paddings
        style.default.paddingHorizontal = props.px
        style.default.paddingVertical = props.py
    }

    const setSize = (style: { default: ViewStyle }) => {
        //* Base sizing
        style.default.width = props.width
        style.default.height = props.height
        style.default.minWidth = props.minWidth
        style.default.minHeight = props.minHeight
    }

    const setAlign = (style: { default: ViewStyle }) => {
        //* Set x align
        if (props.alignX !== undefined) {
            if (props.alignX == "left") {
                style.default.justifyContent = "flex-start"

            } else if (props.alignX == "center") {
                style.default.justifyContent = "center"

            } else if (props.alignX == "right") {
                style.default.justifyContent = "flex-end"
            
            } else if (props.alignX == "space-between") {
                style.default.justifyContent = "space-between"
            }
        }

        //* Set y align
        if (props.alignY !== undefined) {
            if (props.alignY == "top") {
                style.default.alignItems = "flex-start"

            } else if (props.alignY == "center") {
                style.default.alignItems = "center"

            } else if (props.alignY == "bottom") {
                style.default.alignItems = "flex-end"
            } 
        }

        if (props.alignSelfY !== undefined) {
            // if (props.alignSelfY == "top") {
            //     style.default. = "flex-start"

            // } else if (props.alignSelfY == "center") {
            //     style.default.alignSelf = "center"

            // } else if (props.alignSelfY == "bottom") {
            //     style.default.alignSelf = "flex-end"
            // } 
        }

        if (props.alignSelfY !== undefined) {
            if (props.alignSelfY == "top") {
                style.default.alignSelf = "flex-start"

            } else if (props.alignSelfY == "center") {
                style.default.alignSelf = "center"

            } else if (props.alignSelfY == "bottom") {
                style.default.alignSelf = "flex-end"
            } 
        }

        // style.default.justifyContent = "space-around"
    }

    const setBackground = (style: { default: ViewStyle }) => {
        style.default.backgroundColor = props.backgroundColor
    }

    const setFlex = (style: { default: ViewStyle }) => {
        style.default.flex = props.flex
        style.default.flexWrap = props.flexWrap
        style.default.flexDirection = (props.flexDirection !== undefined) ? props.flexDirection : "row"
        style.default.flexGrow = props.flexGrow
    }

    const setBoxShadow = (style: { default: ViewStyle }) => {
        if (props.shadowType !== undefined) {
            style.default.shadowColor = "black"

            if (props.shadowType == "0") {
                style.default.shadowOpacity = 0.3
                style.default.shadowRadius = 10
                style.default.shadowOffset = {
                    width: 5,
                    height: 5
                }
            }
        }
    }

    const setStyle = () => {
        let style:{ default: ViewStyle } = { default: {}}
        
        setBorder(style)
        setHidden(style)
        setPosition(style)
        setMargin(style)
        setPadding(style)
        setSize(style)
        setAlign(style)
        setBackground(style)
        setFlex(style)
        setTransform(style)
        setBoxShadow(style)

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <React.Fragment>
            {
                (props.onClick !== undefined) ?
                <Pressable
                    onLayout={(e) => {
                        if (props.onLayout !== undefined) {
                            props.onLayout(e)
                        }
                    }}
                    style={setStyle()}
                    onPress={
                        (event) => {
                            if (props.onClick !== undefined) {
                                props.onClick(event)
                            }
                        }
                    }
                    
                >
                    {
                        props.children
                    }
                </Pressable>
                :
                <View
                    onLayout={(e) => {
                        if (props.onLayout !== undefined) {
                            props.onLayout(e)
                        }
                    }}
                    style={setStyle()}
                >
                    {
                        props.children
                    }
                </View>
            }
        </React.Fragment>
    )
}

export default Box