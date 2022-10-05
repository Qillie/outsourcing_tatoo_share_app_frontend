//* Import intefaces

interface IModal {
    isVisible?: boolean
    setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
    openerElement?: (openModal: () => void) => React.ReactElement
    children?: React.ReactElement
}

export default IModal