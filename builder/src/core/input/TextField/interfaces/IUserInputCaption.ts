import IUserInputStatus from "./IUserInputStatus"

interface IUserInputCaption {
    status?: IUserInputStatus
    defaultMessage?: string
    requiredMessage?: string
    secondRequiredMessage?: string
    errorMessage?: string
    secondErrorMessage?: string
    passedMessage?: string
}

export default IUserInputCaption