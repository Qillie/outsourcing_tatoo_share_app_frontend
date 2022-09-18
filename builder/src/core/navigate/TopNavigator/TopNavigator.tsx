//* Import libraries
import React from "react"
import { Box } from "../../layout"
import { Button } from "../../input"
import { Grid } from "../../layout"

//* Import interfaces
import ITopNavigator from "./interfaces/ITopNavigator"
import { useNavigate } from "react-router-native"
import { Typography } from "../../display"

const TopNavigator = (props: ITopNavigator) => {
    //* Modules
    // const navigate = useNavigate()
    
    //* States

    //* Functions

    return (
        <Box
            backgroundColor="white"
            height={50}
            mb={20}
            alignY={"center"}
        >
            <Grid role={"container"} justifyContent={"center"} alignItems={"center"}>
                <Grid role={"item"} xs={3} alignItems={"center"}>
                    
                </Grid>

                <Grid role={"item"} xs={6} alignItems={"center"}>
                    <Typography variant="h4" fontWeight="700">
                        안녕
                    </Typography>
                </Grid>

                <Grid role={"item"} xs={3} alignItems={"center"}>
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopNavigator