<template>
  <div class='l-layout'>
      <nav class="l-layout__nav">
          <NavBar></NavBar>
      </nav>
      <main class="l-layout__main">
          <header class="l-layout__header">

          </header>
          <router-view class="l-layout__views"></router-view>
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
    &__nav {
        flex: 0 0 200px;
    }
    &__main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    &__header {
        flex: 0 0 50px;
    }
    &__views {
        flex: 1;
    }

}
</style>
