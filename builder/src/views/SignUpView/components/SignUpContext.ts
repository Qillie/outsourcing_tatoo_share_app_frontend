//* Import libraries
import React from "react"

//* Import interfaces
import TSignUpContext from "../interfaces/TSignUpContext"


export const SignUpContext = React.createContext<TSignUpContext>(
    {
        serviceTermAgreement: false,
        setServiceTermAgreement: () => {},

        privacyTermAgreement: false,
        setPrivacyTermAgreement: () => {},

        userName: "",
        setUserName: () => {},

        fullName: "",
        setFullName: () => {},

        password: "",
        setPassword: () => {},

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