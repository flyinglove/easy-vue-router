export default function createRoute(path, record) {
    const matched = []
    while(record) {
        matched.unshift(record)
        record = record.parentRecord
    }
    return {
        path,
        matched
    }
}