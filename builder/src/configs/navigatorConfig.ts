//* Import interfaces
import IDropdownLeafNode from '../core/navigate/DropdownLink/interfaces/IDropdownLeafNode';

const navigatorConfig: {
    menu: IDropdownLeafNode[]
} = {
    menu: [
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