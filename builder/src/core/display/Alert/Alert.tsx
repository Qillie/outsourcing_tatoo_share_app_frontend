//* Import libraries
import React from "react"
import AwesomeAlert from 'react-native-awesome-alerts'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import IAlert from "./interfaces/IAlert"

const Alert = (props: IAlert) => {
    //* States

    //* Functions
    const hideAlert = () => {
        props.setShow(false)
    } 

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <React.Fragment>
            <View style={styles.container}>
            <AwesomeAlert
                show={props.show}
                showProgress={false}
                title="AwesomeAlert"
                message="I have a message for you!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    hideAlert();
                }}
            />
            </View>
        </React.Fragment>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    button: {
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 5,
      backgroundColor: "#AEDEF4",
    },
    text: {
      color: '#fff',
      fontSize: 15
    }
  });

export default Alert