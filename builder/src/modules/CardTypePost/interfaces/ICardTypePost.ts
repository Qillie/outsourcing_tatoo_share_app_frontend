//* Import interfaces
import TBoxRatio from "../../../core/display/Thumbnail/interfaces/TBoxRatio"

interface ICardTypePost {
    children?: React.ReactElement
    borderRadius?: number
    gap?: number
    ratio?: TBoxRatio
    thumbnailWidth: string
}

export default ICardTypePost