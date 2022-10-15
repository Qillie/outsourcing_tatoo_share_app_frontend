//* Import libraries
import React from "react"
import { Box } from "../../layout"
import { Button } from "../../input"
import { Grid } from "../../layout"

//* Import modules
import { ThemeCoreSingleton } from "../../design"

//* Import interfaces
import IBottomNavigator from "./interfaces/IBottomNavigator"
import { useNavigate } from "react-router-native"

const BottomNavigator = (props: IBottomNavigator) => {
    //* Modules
    const navigate = useNavigate()
    
    //* States
    const [activated, setActivated] = React.useState<number>(0)

    //* Functions
    const onClickNavBtn = (link: string) => {
        navigate(link)
    }

    return (
        <Box
            position="absolute"
            bottom="0%"
            pt={0}
            pb={0}
            backgroundColor={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "100")}
        >
            <Grid role={"container"} alignItems={"center"}>
                {
                    props.menu.map((element, elementIndex) => (
                        <Grid role={"item"} xs={true} key={element.link}>
                            <Button
                                typographyProps={{
                                    fontWeight: (activated == elementIndex) ? "500" : "400",
                                    color: (activated == elementIndex) ? ThemeCoreSingleton.paletteManager.getColor("primary", "main") : ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500"),
                                    
                                }}
                                fontColor={(activated == elementIndex) ? ThemeCoreSingleton.paletteManager.getColor("primary", "main") : ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "600")}
                                iconGap={2}
                                iconDirection={"column"}
                                iconName={element.iconName}
                                fullWidth={true}
                                onClick={
                                    () => {
                                        //* Set activated
                                        setActivated(elementIndex)

                                        //* Basic
                                        onClickNavBtn(element.link)

                                        //* Callback
                                        if (props.onClickNavBtnCallback !== undefined) {
                                            props.onClickNavBtnCallback(element.label.sub)
                                        }
                                    }
                                }
                            >
                                {
                                    element.label.main
                                }
                            </Button>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default BottomNavigator