type TSignUpContext = {
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>,

    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    
    passwordConfirm: string,
    setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>,

    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,

    phoneNumber: string,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,

    primaryAddress: string,
    setPrimaryAddress: React.Dispatch<React.SetStateAction<string>>,

    zipcode: number | null,
    setZipcode: React.Dispatch<React.SetStateAction<number | null>>,

    detailedAddress: string,
    setDetailedAddress: React.Dispatch<React.SetStateAction<string>>,

    birthday: Date | null,
    setBirthday: React.Dispatch<React.SetStateAction<Date | null>>,

    gender: string,
    setGender: React.Dispatch<React.SetStateAction<string>>,
}

export default TSignUpContext