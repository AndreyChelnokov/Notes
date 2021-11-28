<template>
  <div class="note">
    <textarea v-model="getNote">
    </textarea>
  </div>
</template>

<script>

export default {
  name: 'Note',
  data() {
    return {
      listFolders: this.$store.state.folders
    }
  },
  computed: {
    getNote: function() {
      let file
      let listFile

      // Получаем файл
      this.listFolders.forEach(folder => {
        if (folder.name == this.$route.params.Folder) {
          listFile = folder.files
        }
      })

      listFile.forEach(fileObj => {
        if (fileObj.name == this.$route.params.Note) {
          file = fileObj.data
        }
      })


      return file;
    }
  }
}
</script>


<style>

textarea{
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
  font-size: 14px;
  font-family: sans-serif;
}
</style>
