export default {
    name: 'RouterView',
    render(h) {
        const route = this.$route
        let depth = 0
        this.isRouterView = true
        let parent = this.$parent
        while(parent) {
            if (parent.isRouterView) {
                depth++
            }
            parent = parent.$parent
        }
        const record = route.matched[depth]
        if (record) {
            return h(record.component)
        }
        return h()
    }
}