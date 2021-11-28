<template>
  <div class="folder" @contextmenu.prevent="menuFolder">
    <router-link
      :name="name"
      :idFolder="idFolder"
      :to="'/' + name"
      class="folder_a">
      <img class="folder__icon" :src="svg">
      <input class="folder__link"
             @blur="sevaName"
             :disabled="isRename ? false : true"
             type="text"
             v-model="nameFolderText">
      <div class="folder__counter">{{ length }}</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Folder',
  data: function () {
    return {
      svg: require('@/assets/folder.svg'),
      nameFolderText: this.name
    }
  },
  props: {
    name: String,
    length: Number,
    idFolder: Number
  },
  components: {

  },
  methods: {
    sevaName: function() {
      let oldName = this.getFolder.name;
      let newName = this.nameFolderText;

      this.$store.commit('setName', {oldName, newName})
      this.$store.commit('set_isRename', {name: newName, value: false});
    },
    menuFolder: function(e) {
      console.log(e)
      e.path.forEach(pathItem => {

        if (pathItem._prevClass == 'folder') {
          const nodeFolder = pathItem.firstChild.parentNode;
          const nameFolder = nodeFolder.querySelector('[name]').getAttribute('name');

          this.$store.commit('set_isMenu', true);
          this.$store.commit('set_folderNameContextMenu', nameFolder);
          this.$store.commit('set_left', e.clientX);
          this.$store.commit('set_top', e.clientY);

        }
      })
    }
  },
  computed: {
    getFolder: function() {
      let thisFolder
      this.$store.state.folders.forEach(folder => {
        if (folder.name == this.name) {
          thisFolder = folder;
        }
      })
      return thisFolder;
    },
    isRename: function() {
      return this.getFolder.isRename;
    }
  }
}
</script>

<style>
  .folder_a {
    display: flex;
  }
  .folder input{
    background: transparent;
    color: #fff;
    font-size: 14px;
  }
  .folder input:disabled {
    border: none;
  }
  .folder {
    display: flex;
    align-items: center;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: rgba(225, 225, 225, .1);
    margin-bottom: 3px;
    font-size: 14px;
  }
  .folder:hover, .folder_active {
    background-color: rgba(225, 225, 225, .15);
  }
  .folder__btns {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    right: -100%;
    top: 0;
    transition: .5s;
  }
  .folder:hover .folder__btns {
    right: calc(-100% + 57px);
    transition: .5s;
    cursor: pointer;
  }
  .folder__btn {
    display: flex;
    border-radius: 5px;
    margin-right: 4px;
    background: rgb(100 96 96);
    width: 14px;
    padding: 3px;
    min-width: 22px;
    align-items: center;
    justify-content: center;
  }
  .folder__icon {
    width: 18px;
    margin-right: 6px;
  }
  .folder__link {
    width:100%;
  }
</style>
