interface IThumbnail {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    ratio?: "1:1" | "4:3" | "3:2" | "8:5" | "16:9"
    src: string
}

export default IThumbnail