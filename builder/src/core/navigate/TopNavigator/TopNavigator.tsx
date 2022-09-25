//* Import libraries
import React from "react"
import { Box } from "../../layout"
import { Button } from "../../input"
import { Grid } from "../../layout"

//* Import interfaces
import ITopNavigator from "./interfaces/ITopNavigator"
import { useNavigate } from "react-router-native"
import { Typography } from "../../display"
import { useDispatch } from "react-redux"
import TopNavigatorSlice from "./components/TopNavigatorSlice"

const TopNavigator = (props: ITopNavigator) => {
    //* Modules
    // const dispatch = useDispatch()
    // const actions = TopNavigatorSlice.actions

    // const navigate = useNavigate()
    
    //* States

    //* Functions

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box
            backgroundColor="white"
            alignY={"center"}
            pt={15}
            pb={15}
        >
            <Grid role={"container"}>
                <Grid role={"item"} xs={3} alignItems={"center"}>
                    
                </Grid>

                <Grid role={"item"} xs={6} alignItems={"center"}>
                    <Typography variant="h3" fontWeight="500">
                        {props.label}
                    </Typography>
                </Grid>

                <Grid role={"item"} xs={3} alignItems={"center"}>
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopNavigator