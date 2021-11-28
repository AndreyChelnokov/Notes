<template>
  <div class="FoldersContainer">
    <Folders/>
    <div @click="createFolder" class="create-filder">Создать папку</div>
  </div>
</template>

<script>
import Folders from '@/components/Folders.vue';
export default {
  name: 'FoldersContainer',
  components: {
    Folders
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
}
</script>

<style>
  .FoldersContainer {
    min-width: 280px;
    background: #383636;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
