<template>
    <div class="folders">
      <Folder
        v-for="folder in listFolders"
        :key="folder.name" :name="folder.name"
        :length="folder.files.length"
        :idFolder="folder.id"
      />

      <div @click="createFolder" class="create-filder">Создать папку</div>
    </div>
</template>

<script>
import Folder from '@/components/Folder.vue'

export default {
  name: "Folders",
  components: {
    Folder
  },
  methods: {
    createFolder: function() {
      const data = {
        name: 'Новая папка',
        isRename: true,
        files: []
      }
      this.$store.state.folders.push(data)
    }
  },
  computed: {
    listFolders: function() {
      return this.$store.state.folders;
    }
  }
}
</script>

<style>
  .folders {
    min-width: 240px;
    background: #383636;
    padding: 10px 10px;
  }
</style>
