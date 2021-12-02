<template>
  <div class="folder" @contextmenu.prevent="menuFolder">
    <router-link
      :name="name"
      :to="'/' + name"
      class="folder_a">
      <img class="folder__icon" :src="svg">
      <input class="folder__link"
             @blur="sevaName"
             @keydown.enter="sevaName"
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
      this.$store.commit('BOOLEAN_IS_RENAME_FOLDER', {name: newName, value: false});

      this.$router.push('/' + newName)
    },
    menuFolder: function(e) {
      e.path.forEach(pathItem => {

        if (pathItem._prevClass == 'folder') {
          const nodeFolder = pathItem.firstChild.parentNode;
          const nameFolder = nodeFolder.querySelector('[name]').getAttribute('name');

          this.$store.commit('BOOLEAN_IS_MENU', true);
          this.$store.commit('RE_CONTEXT_ELEMENT_NAME', nameFolder);
          this.$store.commit('RE_ELEM_TYPE', 'FOLDER')

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
    display: flex;
    align-items: center;
    padding: 7px 10px;
    border-radius: 4px;
    background-color: rgba(225, 225, 225, .1);
    margin-bottom: 3px;
    font-size: 14px;
  }
  .folder input{
    background: transparent;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
    border-radius: 5px;
  }
  .folder input:disabled {
    border: none;
  }
  .folder_a:hover, .folder_active {
    background-color: rgba(225, 225, 225, .15);
  }
  .folder__icon {
    width: 18px;
    margin-right: 6px;
  }
  .folder__link {
    width:100%;
  }
  .folder__counter {
    color: #746b6b;
  }
</style>
