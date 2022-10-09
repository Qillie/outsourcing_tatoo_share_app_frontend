//* Import interfaces
import TAccordionContent from "./TAccordionContent"

interface IAccordion {
    contents: TAccordionContent[]
    active?: number[]
    setActive?: React.Dispatch<React.SetStateAction<number[]>>
    openedGap?: number
    headerPadding?: number
    useArrow?: boolean
}

export default IAccordion