import History from './base'

export default class HashHistory extends History {
    constructor(router) {
        super(router)
        ensureSlash()
    }
    getCurrentLocation() {
        return location.hash.slice(1)
    }
    setupListener() {
        window.addEventListener('hashchange',() => {
            this.transitionTo(this.getCurrentLocation())
        })
    }
}

function ensureSlash() {
    if (location.hash) {
        return
    }
    location.hash = '/'
}