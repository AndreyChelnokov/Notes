<template>
  <div class="files__item" @contextmenu.prevent="openContextMenuFile">
    <router-link
      :name="fileName"
      class="files__item-link"
      :to="'/' + folderName + '/' + fileName">

      <input
        :disabled="isRenameFile ? false : true"
        v-model="thisFileText"
        @blur="setNewName"
        @keydown.enter="setNewName"
      >

    </router-link>
  </div>
</template>

<script>
export default {
  name: 'File',
  data() {
    return {
      thisFileText: this.fileName
    }
  },
  props: {
    folderName: String,
    fileName: String
  },
  methods: {
    openContextMenuFile: function(e) {
      e.path.forEach(pathItem => {
        if (pathItem._prevClass == 'files__item') {
          const node = pathItem.firstChild.parentNode;
          console.log(node)
          const nameFolder = node.querySelector('[name]').getAttribute('name');

          this.$store.commit('BOOLEAN_IS_MENU', true);
          this.$store.commit('RE_CONTEXT_ELEMENT_NAME', nameFolder);
          this.$store.commit('RE_ELEM_TYPE', 'FILE')

          this.$store.commit('set_left', e.clientX);
          this.$store.commit('set_top', e.clientY);

        }
      })
    },
    setNewName: function() {
      let oldName = this.fileName;
      let newName = this.thisFileText;

      this.$store.commit('BOOLEAN_IS_RENAME_FILE', {
        folderName: this.folderName,
        fileName: this.fileName,
        value: false
      });  // Выключаем редактирование инпута
      this.$store.commit('SET_FILE_NAME', {
        oldName,
        newName,
        folderName: this.folderName
      });  // Меняем старое имя файла на новое в store

      this.$router.push('/' + this.folderName + '/' + newName)
    },

    getFolder: function() {
      let thisFolder;
      this.$store.state.folders.forEach(folder => {
        if (folder.name == this.folderName) {
          thisFolder = folder;
        }
      })
      return thisFolder;
    },
    getFile: function() {
      let a;
      this.getFolder().files.forEach(file => {
        if (file.name == this.fileName) {
          a = file;
        }
      })
      return a;
    }
  },
  computed: {
    isRenameFile: function() {
      return this.getFile().isRenameFile;
    }
  }
}
</script>
