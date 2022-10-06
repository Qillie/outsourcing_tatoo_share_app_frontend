//* Import intefaces

interface IModal {
    isVisible?: boolean
    setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
    openerElement?: (openModal: () => void) => React.ReactElement
    children?: React.ReactElement
    variant?: "basic" | "drawer"
    title?: string
    headerElement?: (closeModal: () => void) => React.ReactElement
    onClose?: () => void
}

export default IModal