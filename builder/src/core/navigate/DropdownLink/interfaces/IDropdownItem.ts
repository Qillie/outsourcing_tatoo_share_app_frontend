//* Import interfaces
import IDropdownLeafNode from "./IDropdownLeafNode"
import { TypographyProps } from '@mui/material';

interface IDropdownItem {
    parentLink?: string 
    typographyProps?: TypographyProps
    leafNode: IDropdownLeafNode
}

export default IDropdownItem