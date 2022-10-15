//* Import interfaces
import React from "react"

interface IRouteLeaf {
    /**
     * Route's name
     */
    name: string

    /**
     * Route's description
     */
    description: string

    /**
     * Route's path (It can be composite with parent's path)
     */
    path: string

    /**
     * Actual element to be rendered
     */
    element: React.ReactElement | undefined

    /**
     * Args
     */
    key?: string

    /**
     * Target route's child element
     */
    children: IRouteLeaf[]
}

export default IRouteLeaf