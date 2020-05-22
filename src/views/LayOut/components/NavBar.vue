<template>
  <div class=''>
    <el-menu
      class="el-menu-vertical-demo"
      router
      text-color="#fff"
      active-text-color="#ffd04b">
        <NavItem v-for="(route, index) in routes" :route="route" :key="index"></NavItem>
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
    }
  },
  computed:{
      ...mapState(['routes'])
  },
  components: {
      NavItem
  },
  created(){
      this.generate_routes(routes)
  },
  mounted(){
  },
  methods: {
    ...mapMutations(['generate_routes'])

  }
}
</script>
<style lang='scss' scoped>
.el-menu-vertical-demo {
  overflow-x: hidden;
  height: 100%;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
 }
}
.svg-icon {
  margin-right: 16px;
}
/deep/
.el-menu {
    user-select: none;
    background-color: rgb(48, 65, 86);
    .submenu-title-noDropdown,
    .el-submenu__title {
      &:hover {
        background-color: #001528 !important;
      }
    }
    .nest-menu .el-submenu>.el-submenu__title,
  .el-menu-item{
    &:hover {
      // you can use $subMenuHover
      background-color: #001528 !important;
    }
    &:focus{
      background-color: #001528 !important;

    }
  }
   
    .el-submenu .el-menu-item {

      &:hover {
        background-color: #001528 !important;
      }
    }
    .is-active>.el-submenu__title {
    }
}
/deep/
  .el-submenu, .el-menu-item{
    text-align: start;
    width:100%;
         
  } 
  /deep/.routeLink{
    text-decoration: none
  }

/deep/.el-submenu .el-menu-item{
  background-color: #1f2d3d !important;
}
</style>
