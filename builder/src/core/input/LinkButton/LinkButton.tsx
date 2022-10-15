//* Import libraries
import React from "react"
import { Pressable } from "react-native"

//* Import interfaces
import ILinkButton from "./interfaces/ILinkButton"
import { useNavigate } from 'react-router-native';

const LinkButton = (props: ILinkButton) => {
    //* Modules
    const navigate = useNavigate()

    return (
        <Pressable
            onPress={
                (event) => {
                    navigate(props.to)
                }
            }
        >
            {
                props.children
            }
        </Pressable>
    )
}

export default LinkButton