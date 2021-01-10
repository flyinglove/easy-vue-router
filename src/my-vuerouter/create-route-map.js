export default function createRouteMap(routes, pathList, pathMap) {
    pathList = pathList || []
    pathMap = pathMap ?? {}
    routes.forEach(route => {
        addRouteRecord(route,pathList,pathMap)
    })

    return {
        pathList,
        pathMap
    }
}

function addRouteRecord(route, pathList, pathMap, parentRecord) {
    const path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path

    const record = {
        path: path,
        component: route.component,
        parentRecord
    }
    if (!pathMap[path]) {
        pathList.push(path)
        pathMap[path] = record
    }
    if (route.children) {
        route.children.forEach(subRoute => {
            addRouteRecord(subRoute, pathList, pathMap, record)
        })
    }
}