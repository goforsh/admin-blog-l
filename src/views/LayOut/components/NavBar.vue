<template>
  <div class=''>
      <el-menu
      class="l-nav"
      router
      text-color="#fff"
      active-text-color="#ffd04b">
        <!-- <NavItem v-for="(route, index) in routes" :route="route" :key="index"></NavItem> -->
             <NavItem  :route="routes[0]" :key="index"></NavItem>

    </el-menu>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import NavItem from './NavItem';
import { routes } from "../../../router";

export default {
  name: '',
  data(){
    return {
        NavItem
    }
  },
  computed:{
      ...mapState(['routes'])
  },
  components: {},
  created(){
      this.generate_routes(routes)
  },
  mounted(){
      console.log(this.routes)
  },
  methods: {
    ...mapMutations(['generate_routes'])

  }
}
</script>
<style lang='scss' scoped>
</style>
