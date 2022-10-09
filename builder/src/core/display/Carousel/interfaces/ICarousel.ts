//* Import interfaces
import TCarouselContent from "./TCarouselContent"

interface ICarousel {
    page?: number
    setPage?: React.Dispatch<React.SetStateAction<number>>
    contents: TCarouselContent[]
    render: (item: {item: TCarouselContent, index: number}) => React.ReactElement
    sliderWidth?: number | string
    itemWidth?: number | string
}

export default ICarousel