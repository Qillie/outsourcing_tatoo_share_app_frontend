//* Import interfaces
import IDropdownLeafNode from '../core/navigate/DropdownLink/interfaces/IDropdownLeafNode';

const navigatorConfig: {
    menu: IDropdownLeafNode[]
} = {
    menu: [
        {
            text: "검색",
            show: true,
            link: "search",
            childLeafs: []
        },
        {
            text: "맞춤 견적",
            show: true,
            link: "estimate",
            childLeafs: []
        },
        {
            text: "리뷰",
            show: true,
            link: "review",
            childLeafs: []
        },
        {
            text: "관심",
            show: true,
            link: "favorite",
            childLeafs: []
        },
        {
            text: "더보기",
            show: true,
            link: "more",
            childLeafs: []
        }
    ]
}

export default navigatorConfig