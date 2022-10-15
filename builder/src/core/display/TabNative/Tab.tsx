//* Import libraries
import React from "react"
import { Animated, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationState, SceneMap, SceneRendererProps, TabView } from "react-native-tab-view"

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box, Grid } from "../../layout"
import { Button } from "../../input"

//* Import interfaces
import ITab from "./interfaces/ITab"
import Typography from "../Typography"


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

    const renderTabBar = ((
        props: SceneRendererProps & {
        navigationState: NavigationState<{
            key: string;
            title: string;
        }>;
    }) => {
        const inputRange = props.navigationState.routes.map((x, i) => i)

        return (
            <React.Fragment>
                <View style={styles.tabBar}>
                    {props.navigationState.routes.map((route, i) => {
                        const opacity = props.position.interpolate({
                                inputRange,
                                outputRange: inputRange.map((inputIndex) =>
                                inputIndex === i ? 1 : 0.5
                            ),
                        });

                        return (
                            <Box
                                flex={1}
                                alignX={'center'}
                                px={16}
                                pt={16}
                                pb={12}
                                onClick={() => {
                                    setSelectedTabIndex(i)
                                }}
                                borderBottomColor={
                                    (selectedTabIndex == i) ?
                                    ThemeCoreSingleton.paletteManager.getColor("primary", "main")
                                    :
                                    undefined
                                }
                                borderBottomWidth={
                                    (selectedTabIndex == i) ?
                                    3
                                    :
                                    undefined
                                }
                            >
                                <Typography
                                    fontWeight={
                                        (selectedTabIndex == i) ?
                                        "500"
                                        :
                                        "400"
                                    }
                                    color={
                                        (selectedTabIndex == i) ?
                                        "black"
                                        :
                                        ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")
                                    }
                                    variant={"h6"}
                                >
                                    {route.title}
                                </Typography>
                            </Box>
                            // <TouchableOpacity
                            //     style={styles.tabItem}
                            //     onPress={() => setSelectedTabIndex(i)}
                            // >
                            //     <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                            // </TouchableOpacity>
                        );
                    })}
                </View>
            </React.Fragment>
       )
    })

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
                renderTabBar={renderTabBar}
            />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      paddingTop: StatusBar.currentHeight,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
  });

export default Tab