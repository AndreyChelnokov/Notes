<template>
  <div>
    <Folders/>
    <router-view/>
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
