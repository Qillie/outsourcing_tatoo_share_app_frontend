//* Import libraries
import React from "react"

//* Import interfaces
import TSignUpContext from "../interfaces/TSignUpContext"


export const SignUpContext = React.createContext<TSignUpContext>(
    {
        userName: "",
        setUserName: () => {},

        password: "",
        setPassword: () => {},
        
        passwordConfirm: "",
        setPasswordConfirm: () => {},

        email: "",
        setEmail: () => {},

        phoneNumber: "",
        setPhoneNumber: () => {},

        primaryAddress: "",
        setPrimaryAddress: () => {},

        zipcode: null,
        setZipcode: () => {},

        detailedAddress: "",
        setDetailedAddress: () => {},

        birthday: null,
        setBirthday: () => {},

        gender: "",
        setGender: () => {},
    }
)