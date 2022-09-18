//* Import libraries

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
}

export default ITextField