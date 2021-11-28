<template>
  <div
    v-if="isMenu"
    :name="folderName"
    class="ContextMenu"
    @click="closeFolderMenu"
    @contextmenu.prevent="closeFolderMenu"
  >
    <div class="ContextMenu__btns" :style="'left:' + left + 'px; top:' + top + 'px;'">
      <div @click="renameFolder" class="ContextMenu__btn">Переименовать папку</div>
      <div @click="deleteFolder" class="ContextMenu__btn">Удалить папку</div>
      <div @click="createFolder" class="ContextMenu__btn">Создать папку</div>
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
    folderName: String,
    idFolder: Number
  },
  methods: {
    renameFolder: function() {
      this.$store.commit('set_isRename', {name: this.folderName, value: true});
      this.closeContext();
    },
    deleteFolder: function() {
      this.$store.commit('deleteFolder', this.folderName);
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
    closeFolderMenu: function(e) {
      if (e.target.classList.contains('ContextMenu')) {
        this.closeContext();
      }
    },
    closeContext: function() {
      this.$store.commit('set_isMenu', false);
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
