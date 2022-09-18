//* Import libraries
import React from "react"
import { ScrollView, Text } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";

//* Import interfaces
import IMainView from "./interfaces/IMainView"

const MainView = (props: IMainView) => {
    //* Modules

    //* States
    const [text, setText] = React.useState<string>("")
    const [pickedPanel, setPickedPanel] = React.useState<string>("planning")

    return (
        <ScrollView style={{height: "100%"}}>
            <Typography>
                hello
            </Typography>

            <Grid role="container">
                <Grid role="item" xs={4}>
                    <Box alignX="center">
                        <Typography variant="body2">
                            hello
                        </Typography>
                    </Box>
                </Grid>
                <Grid role="item" xs={4}>
                    <Button>
                        hello
                    </Button>
                    
                </Grid>
                <Grid role="item" xs={4}>
                    <TextField
                        value={text}
                        setValue={setText}
                        placeholder={"asdf"}
                    />
                </Grid>
            </Grid>
            
			<Link to="/settings">
                <Text>
                    to settings
                </Text>
			</Link>
        </ScrollView>
    )
}

export default MainView