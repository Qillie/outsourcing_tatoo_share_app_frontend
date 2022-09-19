//* Import libraries
import React from "react"
import { StyleSheet, View, ViewStyle, Dimensions } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IGrid from "./interfaces/IGrid"
import IRegularBreakpoints from "./interfaces/IRegularBreakpoints"

//* Import styles
import GridStyles from "./styles/GridStyles"

const Grid = (props: IGrid & IRegularBreakpoints) => {
    //* Constants
    const space = 30
    
    //* States
    // const [typographyStyle, setTypographyStyle

    //* Functions
    // const setFontSize = (variant?: TFontVariant) => {
        
    // }

    const setItemSpacing = (index: number) => {
        let itemStyle: {pt?: number | string, pl?: number | string} = {}

        if (props.spacing !== undefined) {
            itemStyle.pt = 1 * props.spacing * space
            itemStyle.pl = 1 * props.spacing * space
        }

        return itemStyle
    }

    const setContainerSpacing = (style: { default: ViewStyle }) => {
        
    }

    const setGridContainerStyle = (style: { default: ViewStyle }) => {
        style.default.flexDirection = "row"

        if (props.spacing !== undefined) {
            

            
            style.default.flex = 1.5
            style.default.marginTop = -1 * props.spacing * space
            style.default.marginLeft = -1 * props.spacing * space
        } // else {
        //     style.default.width = 420
        // }

        const screenWidth = Dimensions.get('window').width;

        style.default.width = screenWidth + ((props.spacing !== undefined) ? props.spacing  * space : 0)

        console.log(style.default.width)
        // style.default.maxWidth = screenWidth + (props.spacing * space)

        // console.log(style.default)

        //* Set display
        style.default.display = "flex"

        //* Set flex wrap
        style.default.flexWrap = "wrap"

        
    }

    const setGridItemStyle = (style: { default: ViewStyle }) => {
        //* Set spaces
        let spaces: {paddingLeft?: number | string, paddingTop?: number | string} = {paddingLeft: props.pl, paddingTop: props.pt}

        //* Set base style
        if (typeof props.xs == "number") {
            style.default = Object.assign(GridStyles[`grid-item-${props.xs}`], style.default, spaces)
        } else if (props.xs == true) {
            style.default  = Object.assign(GridStyles[`grid-item-auto`], style.default, spaces)
        }
    }

    const setStyle = () => {
        let style:{ default: ViewStyle } = {default: {
            //* Set justify contents
            justifyContent: props.justifyContent,

            //* Set align items
            alignItems: props.alignItems
        }}

        if (props.role == "container") {
            setGridContainerStyle(style)
            setContainerSpacing(style)
            const screenWidth = Dimensions.get('window').width;
            style.default.width = screenWidth + ((props.spacing !== undefined) ? props.spacing  * space : 0)
            
            // console.log(style)
        } else {
            setGridItemStyle(style)
            
        }

        if (props.id == "asdf") {
            console.log(props.id)
        }

        console.log(style.default)

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
        console.log(<View style={setStyle()}></View>)
    }, [])

    return (
        <View style={setStyle()}>
            {/* {props.children} */}
            {
                (props.role == "container") ?
                    React.Children.toArray(props.children).map((child, childIndex) => (
                        React.cloneElement(child as React.ReactElement, setItemSpacing(childIndex))
                    ))
                :
                    props.children
            }
        </View>
    )
}

export default Grid