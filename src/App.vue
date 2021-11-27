<template>
  <div id="app">

    <div class="wrap">
      <Folders/>
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Folders from '@/components/Folders.vue'

export default {
  name: 'Home',
  components: {
    Folders
  }
}
</script>

<style scoped>
  .wrap {
    display: flex;
    justify-content: space-around;
  }
</style>
