//* Import libraries
import IUserInputCaption from "./IUserInputCaption"
import IUserInputStatus from "./IUserInputStatus"

interface ITextField {
    /**
     * Values
     */
    value: string | number
    setValue: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<number>>

    /**
     * Placeholder
     */
    placeholder?: string

    /**
     * Max length
     */
    maxLength?: number

    /**
     * Row of line
     */
    row?: number

    disabled?: boolean
    fullWidth?: boolean

    /**
     * Input validator captions
     */
    inputCaptionConfig?: Partial<IUserInputCaption>
    inputStatus?: IUserInputStatus

    onBlur?: (text: string) => void
    onChange?: (text: string) => void

    textContentType?: "username" | "password"
}

export default ITextField