import Link from './components/link'
import View from './components/view'

export let _Vue = null
export default function install(Vue) {
    _Vue = Vue
    _Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                // vue root
                this._router = this.$options.router
                this._router.init(this)
                this._routerRoot = this
                Vue.util.defineReactive(this, '_route', this._router.history.current)
            } else {
                this._routerRoot = this.$parent && this.$parent._routerRoot
            }
        }
    })
    _Vue.component(Link.name, Link)
    _Vue.component(View.name, View)

    Object.defineProperty(Vue.prototype, '$router', {
        get() {
            return this._routerRoot._router
        }
    })
    Object.defineProperty(Vue.prototype, '$route', {
        get() {
            return this._routerRoot._route
        }
    })
}