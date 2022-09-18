//* Import libraries
import React from "react"

interface IDropdownLeafNode {
    label: {
        main: string,
        sub: string
    },
    iconElement?: React.ReactElement
    show: boolean
    link: string
    childLeafs: IDropdownLeafNode[]
}

export default IDropdownLeafNode