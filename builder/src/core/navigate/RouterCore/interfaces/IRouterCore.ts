//* Import interfaces
import IRouteLeaf from './IRouteLeaf';

interface IRouterCore {
    /**
     * Config to build route tree
     */
    routeTree: IRouteLeaf[]
}

export default IRouterCore