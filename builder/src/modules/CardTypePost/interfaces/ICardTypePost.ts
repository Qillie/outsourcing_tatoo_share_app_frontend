//* Import interfaces
import TBoxRatio from "../../../core/display/Thumbnail/interfaces/TBoxRatio"

interface ICardTypePost {
    children?: React.ReactElement | never[]
    borderRadius?: number
    gap?: number
    ratio?: TBoxRatio
    thumbnailWidth: string
    src?: string
}

export default ICardTypePost