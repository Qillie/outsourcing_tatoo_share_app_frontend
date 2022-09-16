//* Import libraries
import React from "react"
import { Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../core/display";

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
            
			<Link to="/settings">
                <Text>
                    to settings
                </Text>
			</Link>
        </View>
    )
}

export default MainView