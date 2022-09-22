interface IHorizontalThumbnails {
    itemPerRow: number
    maxRowLength?: number
    viewItems: {src: string, label: string, link: string}[]
    spacingUnit?: number
    spacing?: number
}

export default IHorizontalThumbnails