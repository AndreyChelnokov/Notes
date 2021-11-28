<template>
    <div class="folders">
      <Folder
        v-for="folder in listFolders"
        :key="folder.name" :name="folder.name"
        :length="folder.files.length"
        :idFolder="folder.id"
      />
    </div>
</template>

<script>
import Folder from '@/components/Folder.vue'

export default {
  name: "Folders",
  components: {
    Folder
  },
  computed: {
    listFolders: function() {
      return this.$store.state.folders;
    }
  }
}
</script>
