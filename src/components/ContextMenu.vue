<template>
  <div
    v-if="isMenu"
    :name="elementName"
    :elemType="elemType"
    class="ContextMenu"
    @click="closeFolderMenu"
    @contextmenu.prevent="closeFolderMenu"
  >
    <div class="ContextMenu__btns" :style="'left:' + left + 'px; top:' + top + 'px;'">
      <div @click="renameElement" class="ContextMenu__btn">Переименовать папку</div>
      <div @click="deleteFolder" class="ContextMenu__btn">Удалить папку</div>
      <div @click="createFolder" class="ContextMenu__btn">Создать папку</div>
      <div @click="createFile" class="ContextMenu__btn">Создать файл</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  data() {
    return {
      storeFolderData: this.$store.state.folders
    }
  },
  props: {
    isMenu: Boolean,
    top: Number,
    left: Number,
    elementName: String,
    elemType: String
  },
  methods: {
    renameElement: function() {
      if (this.elemType == 'FILE') {
        this.$store.commit('BOOLEAN_IS_RENAME_FILE', {
          folderName: this.$route.params.Folder,
          fileName: this.elementName,
          value: true
        });
      } else if (this.elemType == 'FOLDER') {
        this.$store.commit('BOOLEAN_IS_RENAME_FOLDER', {
          name: this.elementName,
          value: true
        });
      }

      this.closeContext();
    },
    deleteFolder: function() {
      this.$store.commit('deleteFolder', this.elementName);
      this.closeContext();
    },
    createFolder: function() {
      const data = {
        name: 'Новая папка',
        isRename: true,
        files: []
      }
      this.$store.state.folders.push(data)
    },
    createFile: function() {
      const file = {
        name: 'Файл',
        data: 'Это текст который в заметке',
        isRenameFile: true
      }
      this.$store.state.folders.forEach(folderState => {
        if (folderState.name == this.elementName) {
          folderState.files.push(file)
        }
      })

      this.closeContext();
    },
    closeFolderMenu: function(e) {
      if (e.target.classList.contains('ContextMenu')) {
        this.closeContext();
      }
    },
    closeContext: function() {
      this.$store.commit('BOOLEAN_IS_MENU', false);
    }
  }
}
</script>

<style>
  .ContextMenu {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
  .ContextMenu__btns {
    position: absolute;
    top: 30px;
    left: 30px;
    padding: 6px;
    border-radius: 10px;
    border: 1px solid rgba(225, 225, 225, .3);
    background: #262323;
    z-index: 10;
  }
  .ContextMenu__btn {
    display: flex;
    align-items: center;
    padding: 8px 20px;
    border-radius: 4px;
    background-color: rgba(225, 225, 225, .1);
    margin-bottom: 3px;
    font-size: 14px;
    cursor: pointer;
  }
  .ContextMenu__btn:hover {
    background: #b89c0d;
  }
</style>
