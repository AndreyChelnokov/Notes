<template>
  <div>
    <div class="files">
      <div v-for="file in getListFile" :key="file.name">
        <router-link :to="'/' + $route.params.Folder + '/' + file.name">{{file.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
