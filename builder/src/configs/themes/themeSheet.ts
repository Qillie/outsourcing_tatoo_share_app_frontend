//* Import interfaces
import IThemeSheet from "../../core/design/ThemeCore/interfaces/theme/IThemeSheet";

const themeSheet : IThemeSheet = {
    palette: {
        black: "#222",
        primary: "#4831D4",
        secondary: "#ce93d8",
        error: "#f44336",
        warning: "#ffa726",
        info: "#29b6f6",
        success: "#66bb6a",
        background: "#fff",
    },
    typography: {
        variants: {
            body1: 15,
            body2: 13.5,
            button: 0,
            caption: 10.5,
            h1: 24,
            h2: 22.5,
            h3: 21,
            h4: 19.5,
            h5: 18,
            h6: 16.5,
            subtitle1: 12,
            subtitle2: 9
        },
        fonts: {
            "100": "NotoSansKR-Thin",
            "300": "NotoSansKR-Light",
            "400": "NotoSansKR-Regular",
            "500": "NotoSansKR-Medium",
            "700": "NotoSansKR-Bold",
            "900": "NotoSansKR-Black",
        }
    }
}

export default themeSheet