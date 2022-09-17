//* Import libraries
import React from "react"
import { Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";

//* Import interfaces
import IMainView from "./interfaces/IMainView"

const MainView = (props: IMainView) => {
    //* Modules

    //* States
    const [pickedPanel, setPickedPanel] = React.useState<string>("planning")

    return (
        <View>
            <Typography>
                hello
            </Typography>

            <Grid role="container">
                <Grid role="item" xs={4}>
                    <Box alignX="center">
                        <Typography>
                            hello
                        </Typography>
                    </Box>
                </Grid>
                <Grid role="item" xs={4}>
                    <Typography>
                        hello
                    </Typography>
                </Grid>
                <Grid role="item" xs={4}>
                    <Typography>
                        hello
                    </Typography>
                </Grid>
            </Grid>
            
			<Link to="/settings">
                <Text>
                    to settings
                </Text>
			</Link>
        </View>
    )
}

export default MainView