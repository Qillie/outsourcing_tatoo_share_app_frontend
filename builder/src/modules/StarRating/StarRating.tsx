//* Import libraries
import React from "react"
import Icon from "react-native-vector-icons/MaterialIcons";

//* Import modules
import { Box } from "../../core/layout"
import UtilityManager from '../../core/base/UtilityManager/UtilityManager';
import { ThemeCoreSingleton } from "../../core/design";

//* Import interfaces
import IStarRating from "./interfaces/IStarRating"


const StarRating = (props: IStarRating) => {
    //* Modules
    const utility = new UtilityManager()

    //* States

    //* Functions
    const onClickStart = (targetIndex: number) => {
        props.setValue(targetIndex)
    }

    //* Life cycles
    React.useEffect(() => {

    }, [])

    return (
        <Box>
            {
                utility.getRange(0, 5, 1).map((index) => (
                    <Box onClick={() => {onClickStart(index + 1)}}>
                        <Icon
                            name={"star"} 
                            size={37.5} 
                            color={
                                (index < props.value) ? 
                                ThemeCoreSingleton.paletteManager.getColor("primary", "main") 
                                : 
                                ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "500")
                            }
                        />
                    </Box>
                ))
            }
        </Box>
    )
}

export default StarRating