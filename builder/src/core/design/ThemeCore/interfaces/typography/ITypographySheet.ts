interface ITypographySheet {
    variants?: {
        body1?: number
        body2?: number
        button?: number
        caption?: number
        h1?: number
        h2?: number
        h3?: number
        h4?: number
        h5?: number
        h6?: number
        subtitle1?: number
        subtitle2?: number
    },
    fonts?: {
        "100"?: string
        "300"?: string
        "400"?: string
        "500"?: string
        "700"?: string
        "900"?: string
    }
}

export default ITypographySheet