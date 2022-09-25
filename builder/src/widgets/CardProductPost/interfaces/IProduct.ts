interface IProduct {
    src: string
    title: string
    shopName: string
    location: string
    link: string
    tags: string[]
    price: {
        original: number,
        sale?: number
    }
}

export default IProduct