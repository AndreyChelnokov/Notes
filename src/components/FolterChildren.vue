<template>
  <div class="files-wrap">
    <Files/>
    <Note/>
  </div>
</template>

<script>
import Note from "./Note";
import Files from './Files'

export default {
  name: "FolterChildren",
  components: { Note, Files }
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
</style>
