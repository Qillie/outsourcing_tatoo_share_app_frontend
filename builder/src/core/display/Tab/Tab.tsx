//* Import libraries
import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"

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
    /**
     * Callback fires when selected tab index is changed
     */
    const handleTabChange = (value: number) => {
        if (props.injectedSelectedTabIndexConfig !== undefined) {
            props.injectedSelectedTabIndexConfig.setSelectedTabIndex(value)
        } else {
            setSelectedTabIndex(value)
        }
    }

    const checkActive = (value: number) => {
        if (props.injectedSelectedTabIndexConfig !== undefined) {
            return (value == props.injectedSelectedTabIndexConfig.selectedTabIndex) 
        } else {
            return (value == selectedTabIndex) 
        }
    }

    const renderSelected = () => {
        const selected = (props.injectedSelectedTabIndexConfig !== undefined) ? props.injectedSelectedTabIndexConfig.selectedTabIndex : selectedTabIndex

        return props.tabContents[selected].element
    }

    const setViewDirection = () => {
        if (props.contentsDirection == "horizontal") {
            return true
        } else {
            return false
        }
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box flexDirection="column">
            <Box>
                <Grid role={"container"} alignItems={"center"}>
                    {
                        props.tabContents.map((element, elementIndex) => (
                            <Grid role={"item"} xs={true} key={element.title}>
                                <Box
                                    borderBottomWidth={3}
                                    borderColor={(checkActive(elementIndex)) ? ThemeCoreSingleton.paletteManager.getColor("primary", "main") : "transparent"}
                                >
                                    <Button
                                        typographyProps={{
                                            color: (checkActive(elementIndex)) ? ThemeCoreSingleton.paletteManager.getColor("primary", "main") : ThemeCoreSingleton.paletteManager.getColor("black"),
                                            variant: "h5",
                                            fontWeight: "500"
                                        }}
                                        fullWidth={true}
                                        onClick={
                                            () => {
                                                handleTabChange(elementIndex)
                                            }
                                        }
                                    >
                                        {
                                            element.title
                                        }
                                    </Button>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            

            <ScrollView horizontal={setViewDirection()} style={{width: "100%"}}>
                {
                    renderSelected()
                }
            </ScrollView>
        </Box>
    )
}

export default Tab