interface ISettingsView {
    userType?: "user" | "tattooist"
    setUserType?: (type: "user" | "tattooist") => void
}

export default ISettingsView