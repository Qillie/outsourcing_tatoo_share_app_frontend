//* Import interfaces
import IRouteLeaf from "../core/navigate/RouterCore/interfaces/IRouteLeaf"

//* Import modules
import { MainView } from "../views/MainView"
import { SettingsView } from "../views/SettingsView"
import { FavoritesView } from "../views/FavoritesView"
import { ItemDetailsView } from "../views/ItemDetailsView"

const routeConfig: IRouteLeaf[] = [
    {
        name: "메인",
        description: "메인 화면",
        path: "",
        element: <MainView />,
        children: []
    },
    {
        name: "환경설정",
        description: "환경설정 화면",
        path: "/settings",
        element: <SettingsView />,
        children: []
    },
    {
        name: "관심목록",
        description: "관심목록 화면",
        path: "/favorites",
        element: <FavoritesView />,
        children: []
    },
    {
        name: "아이템",
        description: "아이템 상세 화면",
        path: "/item",
        element: <ItemDetailsView />,
        children: []
    }
]

export default routeConfig