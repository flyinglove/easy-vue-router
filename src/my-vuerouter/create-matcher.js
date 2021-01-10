import createRouteMap from './create-route-map.js'
import createRoute from './utils/route.js'

export default function createMatcher(routes) {
    const { pathList, pathMap } = createRouteMap(routes)
    function match(path) {
        const record = pathMap[path]
        if (record) {
            return createRoute(path, record)
        }
        return createRoute(path, null)
    }
    function addRoutes(routes) {
        createRouteMap(routes, pathList, pathMap)
    }

    return {
        match,
        addRoutes
    }
}