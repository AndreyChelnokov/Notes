<template>
  <div class="note">
    <Files/>
    {{getNote}}
  </div>
</template>

<script>
import Files from '@/components/Files.vue';

export default {
  name: 'Note',
  data() {
    return {
      listFolders: this.$store.state.folders
    }
  },
  components: {
    Files
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
