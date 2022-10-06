//* Import intefaces

interface IModal {
    isVisible?: boolean
    setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
    openerElement?: (openModal: () => void) => React.ReactElement
    children?: React.ReactElement
    variant?: "basic" | "drawer"
}

export default IModal