//* Import libraries
import React from "react"
import { Dimensions } from "react-native"
import SnapCarousel from 'react-native-snap-carousel';

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import ICarousel from "./interfaces/ICarousel"

const Carousel = (props: ICarousel) => {
    //* References
    const carouselRef = React.useRef<any>(null)

    //* States
    const [sliderWidth, setSliderWidth] = React.useState<number>(300)
    const [itemWidth, setItemWidth] = React.useState<number>(200)

    //* Functions
    const movePage = (targetPage: number) => {
        carouselRef.current.snapToItem(targetPage)
    }

    //* Life cycles
    /**
     * Width setter hook
     */
    React.useEffect(() => {
        //* Set slider width
        let tempSliderWidth = sliderWidth
        
        if (typeof props.sliderWidth == "string") {
            const screenWidth = Dimensions.get('window').width

            if (/%/.test(props.sliderWidth)) {
                tempSliderWidth = screenWidth * (Number(props.sliderWidth.replace("%", "")) / 100)
            }
            
            if (isNaN(tempSliderWidth)) {
                throw new Error("Only percentage value can be excepted.sliderWidth's type is string (ex: 30%)")
            }
        } else if (typeof props.sliderWidth == "number") {
            tempSliderWidth = props.sliderWidth
        }

        setSliderWidth(tempSliderWidth)

        //* Set item width
        let tempItemWidth = itemWidth

        if (typeof props.itemWidth == "string") {
            if (/%/.test(props.itemWidth)) {
                tempItemWidth = tempSliderWidth * (Number(props.itemWidth.replace("%", "")) / 100)
            }
            
            if (isNaN(tempItemWidth)) {
                throw new Error("Only percentage value can be excepted if props.itemWidth's type is string (ex: 30%)")
            }
        } else if (typeof props.itemWidth == "number") {
            tempItemWidth = props.itemWidth
        }

        setItemWidth(tempItemWidth)
    }, [])

    /** 
     * Page controller hook
     */
    React.useEffect(() => {
        if (props.page !== undefined) {
            console.log(props.page)
            movePage(props.page)
        }
    }, [props.page])

    return (
        <React.Fragment>
            <SnapCarousel
                ref={carouselRef}
                vertical={false}
                data={props.contents}
                renderItem={props.render}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                onSnapToItem={
                    (index) => {
                        if (props.setPage !== undefined) {
                            props.setPage(index)
                        }
                    }
                }
            />
        </React.Fragment>
    )
}

export default Carousel