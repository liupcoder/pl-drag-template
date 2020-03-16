<template>
  <div id="app">你好
    <router-view/>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  @Component()
  export default class app extends Vue {
  }
</script>

<style lang="less">
  @import './themes/publicStyle/default.less';
</style>
