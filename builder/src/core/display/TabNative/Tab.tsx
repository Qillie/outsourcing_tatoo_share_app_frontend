//* Import libraries
import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import { SceneMap, TabView } from "react-native-tab-view"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box, Grid } from "../../layout"
import { Button } from "../../input"

//* Import interfaces
import ITab from "./interfaces/ITab"


const Tab = (props: ITab) => {

    /* States
    /**
     * State to show selected tab (If this value is injected from outside this state will be muted)
     */
    const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0)

    //* Functions
    const setTabRoutes = () => {
        const routes: {key: string, title: string}[] = []

        props.tabContents.map((tabContent) => {
            routes.push({
                key: tabContent.title,
                title: tabContent.title
            })
        })

        return routes
    }

    const setRenderScene = () => {
        let scene: {[key: string]: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>} = {}

        props.tabContents.map((tabContent) => {
            scene[tabContent.title] = () => {
                return tabContent.element
            }
        })

        return SceneMap(scene)
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <React.Fragment>
            <TabView
                navigationState={
                    {
                        index: selectedTabIndex,
                        routes: setTabRoutes()
                    }
                }
                renderScene={setRenderScene()}
                onIndexChange={setSelectedTabIndex}
            />
        </React.Fragment>
    )
}

export default Tab