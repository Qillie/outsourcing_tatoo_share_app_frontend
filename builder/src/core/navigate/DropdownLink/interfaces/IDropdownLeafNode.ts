//* Import libraries
import React from "react"

interface IDropdownLeafNode {
    text: string
    iconElement?: React.ReactElement
    show: boolean
    link: string
    childLeafs: IDropdownLeafNode[]
}

export default IDropdownLeafNode