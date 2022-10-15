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
import { SignUpView, TermsView, UserInfoView } from '../views/SignUpView'
import { StoreOpeningView } from "../views/StoreOpeningView"
import { QuoteRequestView } from "../views/QuoteRequestView"
import { WorkUploadView } from "../views/WorkUploadView"
import { ReviewUploadView } from "../views/ReviewUploadView"
import { SignInView } from '../views/SignInView';


const routeConfig: IRouteLeaf[] = [
    {
        name: "메인",
        description: "메인 화면",
        path: "",
        element: <MainView />,
        children: []
    },
    {
        key: "settings",
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
    },
    {
        name: "회원가입",
        description: "회원가입 화면",
        path: "/sign_up",
        element: <SignUpView />,
        children: [
            {
                name: "약관 동의",
                description: "약관 동의 화면",
                path: "terms",
                element: <TermsView />,
                children: []
            },
            {
                name: "유저 정보 입력",
                description: "유저 정보 입력 화면",
                path: "user_info",
                element: <UserInfoView />,
                children: []
            }
        ]
    },
    {
        name: "로그인",
        description: "로그인 화면",
        path: "/sign_in",
        element: <SignInView />,
        children: []
    },
    {
        name: "상점 페이지 개설",
        description: "상점 페이지 개설 화면",
        path: "/store_opening",
        element: <StoreOpeningView />,
        children: []
    },
    {
        name: "구매자 견적서",
        description: "구매자 견적서 화면",
        path: "/quote_request",
        element: <QuoteRequestView />,
        children: []
    },
    {
        name: "작품 업로드",
        description: "작품 업로드 화면",
        path: "/work_upload",
        element: <WorkUploadView />,
        children: []
    },
    {
        name: "리뷰 업로드",
        description: "리뷰 업로드 화면",
        path: "/review_upload",
        element: <ReviewUploadView />,
        children: []
    },

]

export default routeConfig