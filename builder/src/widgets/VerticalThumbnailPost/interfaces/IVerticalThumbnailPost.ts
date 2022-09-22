interface IVerticalThumbnailPost {
    items: {
        title: string,
        shopName: string,
        location: string,
        tags: string[],
        price: {
            original: number,
            sale?: number
        }
    }[]
}

export default IVerticalThumbnailPost