<template>
  <div class="files">
    <File
      v-for="file in getListFile"
      :key="file.name"
      :folderName="$route.params.Folder"
      :fileName="file.name"
    />
  </div>
</template>

<script>
import File from '@/components/File.vue'
export default {
  name: "Files",
  data() {
    return {
      listFolders: this.$store.state.folders
    }
  },
  computed: {
    getListFile: function() {
      let a
      this.listFolders.forEach(folder => {
        if (folder.name == this.$route.params.Folder) {
          a = folder.files

          console.log(folder.name,' + ', this.$route.params.Folder)
        }
      })

      return a
    }
  },
  components: {
    File
  }
}
</script>

<style>
  .files {
    min-width: 310px;
    background: #262323;
    padding: 10px;
  }
  .files__item {
    display: flex;
    align-items: center;
    padding: 13px 28px;
    border-radius: 4px;
    background-color: rgba(225, 225, 225, .1);
    margin-bottom: 3px;
    font-size: 14px;
  }
  .files__item:hover, .files__item_active {
    background-color: rgba(225, 225, 225, .15);
  }
</style>
