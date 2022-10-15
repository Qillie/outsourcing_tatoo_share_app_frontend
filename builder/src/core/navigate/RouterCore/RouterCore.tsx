//* Import libraries
import React from "react"
import { Routes, Route, PathRouteProps, IndexRouteProps, LayoutRouteProps } from "react-router-native"

//* Import interfaces
import IRouteLeaf from "./interfaces/IRouteLeaf"
import IRouterCore from "./interfaces/IRouterCore"

const RouterCore = (props: IRouterCore) => {
    //* Functions
    /**
     * Function to set arg in router
     */
    const setArgInElement = (key?: string, element?: React.ReactElement) => {
        if (props.outerArg !== undefined && key !== undefined && element !== undefined) {
            const targetArg = props.outerArg[key]

            return React.cloneElement(element, targetArg)

        } else {
            return element
        }
    }

    /**
     * Function to create route leaf element reculsively
     * @param routeBranch 
     * @returns 
     */
    const createRouteLeafElementReculsively = (routeBranch: IRouteLeaf[]) => {
        // Set container
        let routeLeafContainer: React.ReactNode[] = []

        routeBranch.map((routeLeaf) => {
            let routeLeafElement: React.FunctionComponentElement<PathRouteProps | LayoutRouteProps | IndexRouteProps>

            if (routeLeaf.children.length > 0) {
                let parentRouteLeafContainer: React.ReactNode[] = createRouteLeafElementReculsively(routeLeaf.children)

                //* Create route leaf element
                routeLeafElement = React.createElement(
                    Route,
                    {
                        key: routeLeaf.path, 
                        path: routeLeaf.path, 
                        element: setArgInElement(routeLeaf.key, routeLeaf.element)
                    },
                    parentRouteLeafContainer
                )

            } else {
                //* Create route leaf element
                routeLeafElement = React.createElement(
                    Route,
                    {
                        key: routeLeaf.path, 
                        path: routeLeaf.path, 
                        element: setArgInElement(routeLeaf.key, routeLeaf.element)
                    }
                )
            }

            routeLeafContainer.push(routeLeafElement)
        })

        return routeLeafContainer
    }

    /**
     * Function to parse props's route tree structure
     * @returns 
     */
    const parseRouteTree = () => {
        // Set container
        let routeLeafContainer: React.ReactNode[] = createRouteLeafElementReculsively(props.routeTree)

        //* Create root of route
        const rootRouteElement = React.createElement(
            Route,
            { 
                path: "/",
            },
            routeLeafContainer
        )

        return rootRouteElement
    }

    return (
        <Routes>
            {
                parseRouteTree()
            }
        </Routes>
    )
}

export default RouterCore