//* Import libraries
import React from "react"
import { Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules

//* Import interfaces
import ISettingsView from "./interfaces/ISettingsView"

const SettingsView = (props: ISettingsView) => {
    //* Modules

    //* States
    const [pickedPanel, setPickedPanel] = React.useState<string>("planning")

    return (
        <View>
            <Link to="/">
				<Text>
                    to main
                </Text>
			</Link>
        </View>
    )
}

export default SettingsView