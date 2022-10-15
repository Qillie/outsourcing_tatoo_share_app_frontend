//* Import interfaces
import IRouteLeaf from './IRouteLeaf';

interface IRouterCore {
    /**
     * Config to build route tree
     */
    routeTree: IRouteLeaf[]

    /**
     * Arg from outside (ex: Redux)
     */
    outerArg?: {[pathKey: string]: {[key: string]: any}}
}

export default IRouterCore