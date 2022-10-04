import React from "react"
import { Typography } from "../../../display"
import { Box } from "../../../layout"

//* Import modules
import ThemeCoreSingleton from '../../../design/ThemeCore/ThemeCoreSingleton';

//* Import interfaces
import IUserInputCaption from "../interfaces/IUserInputCaption"
import IUserInputStatus from "../interfaces/IUserInputStatus"


const UserInputCaption = (props: IUserInputCaption) => {
    //* Functions
    const setStatusMessage = (targetStatus?: IUserInputStatus) => {
        let targetMessage = ""
        
        if (JSON.stringify(targetStatus) == JSON.stringify({status: "default"})) {
            if (props.defaultMessage !== undefined) {
                targetMessage = props.defaultMessage
            }
            
        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "required"})) {
            if (props.requiredMessage !== undefined) {
                targetMessage = props.requiredMessage
            }

        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "required2"})) {
            if (props.secondRequiredMessage !== undefined) {
                targetMessage = props.secondRequiredMessage
            }

        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "error"})) {
            if (props.errorMessage !== undefined) {
                targetMessage = props.errorMessage
            }

        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "error2"})) {
            if (props.secondErrorMessage !== undefined) {
                targetMessage = props.secondErrorMessage
            }

        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "passed"})) {
            console.log(props.passedMessage)

            if (props.passedMessage !== undefined) {
                targetMessage = props.passedMessage
            }
        }

        return targetMessage
    }

    const setStatusColor = (targetStatus?: IUserInputStatus) => {
        let colorString = ""

        if (JSON.stringify(targetStatus) == JSON.stringify({status: "default"})) {
            colorString = "grey.700"
            
        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "required"}) || JSON.stringify(targetStatus) == JSON.stringify({status: "required2"})) {
            colorString = ThemeCoreSingleton.paletteManager.getColor("error", "main")

        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "error"}) || JSON.stringify(targetStatus) == JSON.stringify({status: "error2"})) {
            colorString = ThemeCoreSingleton.paletteManager.getColor("error", "main")

        } else if (JSON.stringify(targetStatus) == JSON.stringify({status: "passed"})) {
            colorString = ThemeCoreSingleton.paletteManager.getColor("success", "main")
        }

        return colorString
    }

    return (
        <React.Fragment>
            {/* Helper text */}
            <Box mt={2}>
                <Typography
                    variant="subtitle1"
                    color={
                        setStatusColor(props.status)
                    }
                >
                    {
                        setStatusMessage(props.status)
                    }
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default UserInputCaption