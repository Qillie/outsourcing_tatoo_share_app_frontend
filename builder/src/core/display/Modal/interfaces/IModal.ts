//* Import intefaces

interface IModal {
    openerElement?: (openModal: () => void) => React.ReactElement
    children?: React.ReactElement
}

export default IModal