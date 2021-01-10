import createRoute from '../utils/route'

export default class History {
    constructor(router) {
        this.router = router
        this.current = createRoute('/', null)
        this.cb = null
    }
    transitionTo(path, onComplete) {
        this.current = this.router.matcher.match(path)
        this.cb && this.cb(this.current)
        onComplete && onComplete()
    }
    listen(cb) {
        this.cb = cb
    }

}