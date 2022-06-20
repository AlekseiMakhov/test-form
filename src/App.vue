<template>
  <div id="app">
    <MainHeader />
    <div class="workspace">
      <CatalogPage />
    </div>
  </div>
</template>

<script>
import CatalogPage from './views/CatalogPage'
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: { CatalogPage, MainHeader },
}
</script>

<style lang="scss">
@import "assets/css/reset";
@import "assets/css/global";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  position: relative;
}

.workspace {
  margin-top: 60px;
  padding: 30px;
  width: 100%;
  background-color: $base-bg;
}
</style>
