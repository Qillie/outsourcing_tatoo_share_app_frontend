//* Import interfaces
import IDropdownLeafNode from '../core/navigate/DropdownLink/interfaces/IDropdownLeafNode';

const navigatorConfig: {
    tattooistMenu: IDropdownLeafNode[]
    userMenu: IDropdownLeafNode[],
} = {
    tattooistMenu: [
        {
            label: {
                main: "맞춤 견적",
                sub: "맞춤 견적"
            },
            iconName: "published-with-changes",
            show: true,
            link: "",
            childLeafs: []
        },
        {
            label: {
                main: "광고 관리",
                sub: "광고 관리"
            },
            iconName: "campaign",
            show: true,
            link: "",
            childLeafs: []
        },
        {
            label: {
                main: "작품 업로드",
                sub: "작품 업로드"
            },
            iconName: "add-circle",
            show: true,
            link: "work_upload",
            childLeafs: []
        },
        {
            label: {
                main: "페이지",
                sub: "페이지"
            },
            iconName: "perm-identity",
            show: true,
            link: "favorites",
            childLeafs: []
        },
        {
            label: {
                main: "더보기",
                sub: "더보기"
            },
            iconName: "menu",
            show: true,
            link: "settings",
            childLeafs: []
        }
    ],
    userMenu: [
        {
            label: {
                main: "검색",
                sub: "메인"
            },
            iconName: "search",
            show: true,
            link: "",
            childLeafs: []
        },
        {
            label: {
                main: "맞춤 견적",
                sub: "맞춤 견적"
            },
            iconName: "published-with-changes",
            show: true,
            link: "",
            childLeafs: []
        },
        {
            label: {
                main: "리뷰",
                sub: "리뷰"
            },
            iconName: "rate-review",
            show: true,
            link: "review",
            childLeafs: []
        },
        {
            label: {
                main: "관심",
                sub: "관심목록"
            },
            iconName: "favorite-border",
            show: true,
            link: "favorites",
            childLeafs: []
        },
        {
            label: {
                main: "더보기",
                sub: "더보기"
            },
            iconName: "menu",
            show: true,
            link: "settings",
            childLeafs: []
        }
    ]
}

export default navigatorConfig