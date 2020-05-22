<script>
export default {
    functional:true,
    props:['route'],
    render(h,{props}) {
        function createItem(route, base) {
            return h('el-menu-item', {
                attrs:{
                    index: base + '/' + route.path
                }
            },[
                <svg-icon icon-class={route.meta.icon}/>,
                h('span', {
                    attrs:{
                        slot: 'title'
                    }
                }, route.meta.title)
            ])
        }

        function createSubMenu(routes, base) {
            if (!routes.children) {
                return createItem(routes, base)
            } else if (routes.children.length == 1) {
                return createItem(routes.children[0], base)
            } else {
                return h('el-submenu', {
                    attrs:{
                        index: routes.path
                    }
                }, [
                    <template slot="title">
                        <svg-icon icon-class={routes.meta.icon}/>
                    {routes.meta.title}</template>,
                    ...routes.children.map(route => {
                        return createSubMenu(route, routes.path == '/' ? '' : routes.path)
                    })
                ])
            }
        }

        return createSubMenu(props.route, '')
    }
}
</script>
<style lang='scss' scoped>
</style>