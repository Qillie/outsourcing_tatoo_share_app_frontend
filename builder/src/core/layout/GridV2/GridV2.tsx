//* Import libraries
import React from "react"
import { StyleSheet, View, ViewStyle, Dimensions, FlatList } from "react-native"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Typography } from "../../display"
import Box from "../Box"

//* Import interfaces
import IGrid from "./interfaces/IGrid"
import IRegularBreakpoints from "./interfaces/IRegularBreakpoints"

//* Import styles
import GridStyles from "./styles/GridStyles"

const GridV2 = (props: IGrid & IRegularBreakpoints) => {
    //* Constants
    const space = 30
    
    //* States
    // const [typographyStyle, setTypographyStyle

    //* Functions
    // const setFontSize = (variant?: TFontVariant) => {
        
    // }

    const setItemSpacing = (index: number) => {
        return {}
    }

    const setStyle = () => {
        
    }

    const setFlatListStyle = () => {
        let style:{ flatList: ViewStyle } = { flatList: {}}

        style.flatList.width = "100%"
        style.flatList.flex = 1

        return StyleSheet.create(style).flatList 
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <View style={{}}>
            {/* {props.children} */}
            <FlatList
                style={setFlatListStyle()}
                data={[0, 1, 2, 0, 1, 2]}
                ItemSeparatorComponent={
                    () => {
                        return (<View style={{ width: 16, height: 10, backgroundColor: 'pink' }} />)
                    }
                }
                renderItem={(item) => (
                    <View style={{
                        flexGrow: 0,
                        flexBasis: "16.333333%",
                        maxWidth: "16.333333%"
                    }}>
                        <Typography>
                            asdf
                        </Typography>
                    </View>
                )}
                numColumns={3}
            />
        </View>
    )
}

export default GridV2