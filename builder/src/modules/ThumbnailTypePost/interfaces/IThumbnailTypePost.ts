interface IThumbnailTypePost {
    direction: "row" | "column"
    children?: React.ReactElement
    borderRadius?: number
    gap?: number
    ratio?: "1:1" | "4:3" | "3:2" | "8:5" | "16:9"
}

export default IThumbnailTypePost