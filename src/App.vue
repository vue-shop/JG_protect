<template>
  <div id="app">
    Hello Vue
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  components: {
    tabbar
  }
}
</script>
