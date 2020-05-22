<template>
  <div class='l-layout'>
      <NavBar class="l-layout__nav"></NavBar>
      <main class="l-layout__main">
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
export default {
  name: '',
  data(){
    return {}
  },
  components: {
      NavBar
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='scss' scoped>
.l-layout {
    display: flex;
    width: 100%;
    height: 100vh;
    &__nav {
        flex: 0 0 200px;
        height: 100%;
    }
    &__main {
        flex: 1;
    }

}
</style>
