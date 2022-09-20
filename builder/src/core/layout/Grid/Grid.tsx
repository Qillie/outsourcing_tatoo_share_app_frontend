//* Import libraries
import React from "react"
import { StyleSheet, View, ViewStyle, Dimensions, Text } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IGrid from "./interfaces/IGrid"
import IRegularBreakpoints from "./interfaces/IRegularBreakpoints"

//* Import styles
import GridStyles from "./styles/GridStyles"

const Grid = (props: IGrid & IRegularBreakpoints) => {
    //* Constants
    const space = 14
    
    //* Functions
    const setItemSpacing = () => {
        let itemStyle: {pt?: number | string, pl?: number | string} = {}

        if (props.spacing !== undefined) {
            itemStyle.pt = 1 * props.spacing * space
            itemStyle.pl = 1 * props.spacing * space
        }

        return itemStyle
    }

    const setGridContainerStyle = (style: { default: ViewStyle }) => {
        style.default.flexDirection = "row"

        if (props.spacing !== undefined) {
            style.default.marginTop = -1 * props.spacing * space
            style.default.marginLeft = -1 * props.spacing * space
        }

        //* Set display
        style.default.display = "flex"

        //* Set flex wrap
        style.default.flexWrap = "wrap"

        //* Set width
        style.default.width = "100%"
    }

    const setGridItemStyle = (style: { default: ViewStyle }) => {
        //* Set spaces
        let spaces: {paddingLeft?: number | string, paddingTop?: number | string, height?: string, background: string} = {paddingLeft: props.pl, paddingTop: props.pt, background: "red"}

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
            alignItems: props.alignItems,
        }}

        if (props.role == "container") {
            setGridContainerStyle(style)

        } else {
            setGridItemStyle(style)
            
        }

        return StyleSheet.create(style).default
    }

    //* Life cycles
    React.useEffect(() => {
        if (props.spacing !== undefined) {
            const screenWidth = Dimensions.get('window').width;

            const targetWidth = screenWidth + ((props.spacing !== undefined) ? props.spacing  * space : 0)

            let clone = {...viewStyle}
            clone.width = targetWidth

            setViewStyle(clone)
        }
    }, [])

    //* States
    const [viewStyle, setViewStyle] = React.useState<ViewStyle>(setStyle())

    return (
        <View style={viewStyle}>
            {
                (props.role == "container") ?
                    React.Children.toArray(props.children).map((child, childIndex) => (
                        <React.Fragment key={childIndex}>
                            {
                                React.cloneElement(child as React.ReactElement, setItemSpacing())
                            }
                        </React.Fragment>
                    ))
                :
                    props.children
            }
        </View>
    )
}

export default Grid