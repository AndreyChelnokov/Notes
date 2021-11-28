<template>
  <div id="app" >

    <div class="wrap">
      <FoldersContainer/>
      <router-view/>

      <ContextMenu
        :isMenu="isContextMenu"
        :left="left"
        :top="top"
        :folderName="folderNameContextMenu"
        :idFolder="idFolder"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Folders from '@/components/Folders.vue'
import ContextMenu from '@/components/ContextMenu.vue'
import FoldersContainer from "./components/FoldersContainer";

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    FoldersContainer,
    Folders,
    ContextMenu
  },
  computed: {
    isContextMenu: function() { return this.$store.state.folderContextMenu.isMenu },
    top: function() { return this.$store.state.folderContextMenu.top },
    left: function() { return this.$store.state.folderContextMenu.left },
    folderNameContextMenu: function() { return this.$store.state.folderContextMenu.folderName },
    idFolder: function() { return this.$store.state.folderContextMenu.idFolder },
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: sans-serif;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    height: 100vh;
  }
  .files-wrap {
    display: flex;
    flex-grow: 1;
  }


  .note {
    background: #181717 !important;
    display: flex;
    flex-grow: 1;
    height: 100%;
    min-height: 20px;
    color: #fff;
    padding: 10px;
  }
</style>
