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
            show: true,
            link: "",
            childLeafs: []
        },
        {
            label: {
                main: "맞춤 견적",
                sub: "맞춤 견적"
            },
            show: true,
            link: "estimate",
            childLeafs: []
        },
        {
            label: {
                main: "리뷰",
                sub: "리뷰"
            },
            show: true,
            link: "review",
            childLeafs: []
        },
        {
            label: {
                main: "관심",
                sub: "관심목록"
            },
            show: true,
            link: "favorite",
            childLeafs: []
        },
        {
            label: {
                main: "더보기",
                sub: "더보기"
            },
            show: true,
            link: "settings",
            childLeafs: []
        }
    ]
}

export default navigatorConfig