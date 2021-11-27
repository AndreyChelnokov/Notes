<template>
  <div>
    <div>Папки</div>
    <div class="folders">
      <Folder v-for="folder in listFolders" :key="folder.name" :name="folder.name"/>
    </div>
    <router-view/>
  </div>

</template>

<script>
import Folder from '@/components/Folder.vue'

export default {
  name: "Folders",
  data() {
    return {
      listFolders: this.$store.state.folders
    }
  },
  components: {
    Folder
  }
}
</script>
