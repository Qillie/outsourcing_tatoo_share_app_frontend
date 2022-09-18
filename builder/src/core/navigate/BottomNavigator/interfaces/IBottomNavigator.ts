//* Import interfaces
import IDropdownLeafNode from "../../DropdownLink/interfaces/IDropdownLeafNode"

interface IBottomNavigator {
    menu: IDropdownLeafNode[]
    onClickNavBtnCallback?: (label: string) => void
}

export default IBottomNavigator