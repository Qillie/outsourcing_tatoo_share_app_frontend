//* Import interfaces
import IRouteLeaf from "../core/navigate/RouterCore/interfaces/IRouteLeaf"

//* Import modules
import { MainView } from "../views/MainView"
import { SettingsView } from "../views/SettingsView"
import { FavoritesView } from "../views/FavoritesView"
import { ItemDetailsView } from "../views/ItemDetailsView"
import { PlannedContentView } from "../views/PlannedContentView"
import { PlannedContentDetailsView } from "../views/PlannedContentDetailsView"
import { MagazineContentView } from "../views/MagazineContentView"
import { RankingsView } from "../views/RankingsView"

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
    },
    {
        name: "기획전",
        description: "기획전 화면",
        path: "/planned",
        element: <PlannedContentView />,
        children: []
    },
    {
        name: "기획전 상세",
        description: "기획전 상세 화면",
        path: "/planned_detail",
        element: <PlannedContentDetailsView />,
        children: []
    },
    {
        name: "매거진",
        description: "매거진 화면",
        path: "/magazine",
        element: <MagazineContentView />,
        children: []
    },
    {
        name: "타투 랭킹",
        description: "타투 랭킹 화면",
        path: "/rankings",
        element: <RankingsView />,
        children: []
    }
]

export default routeConfig