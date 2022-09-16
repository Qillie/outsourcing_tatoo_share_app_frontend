//* Import interfaces
import IRouteLeaf from "../core/navigate/RouterCore/interfaces/IRouteLeaf"

//* Import modules
import { MainView } from "../views/MainView"
import { SettingsView } from "../views/SettingsView"

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
    }
]

export default routeConfig