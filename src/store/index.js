import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folders: [
      {
        id: 1,
        name: "Gate31",
        isRename: false,
        files: [
          {
            name: "Доступы",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
        ],
      },
      {
        id: 2,
        name: "Работа",
        isRename: false,
        files: [
          {
            name: "арпрара",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
          {
            name: "323",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
          {
            name: "12w",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
        ],
      },
      {
        id: 3,
        name: "Доступы",
        isRename: false,
        files: [
          {
            name: "Name Folder 1",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
          {
            name: "Name Folder 2",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
          {
            name: "Name Folder 3",
            isRenameFile: false,
            data: "Это текст который в заметке",
          },
        ],
      },
    ],
    folderContextMenu: {
      isMenu: false,
      top: 10,
      left: 10,
      contextElementName: "",
      elemType: "",
    },
  },
  mutations: {
    RE_ELEM_TYPE: (state, value) => {
      state.folderContextMenu.elemType = value;
    },
    BOOLEAN_IS_MENU: (state, value) => {
      state.folderContextMenu.isMenu = value;
    },
    BOOLEAN_IS_RENAME_FILE: (state, opts) => {
      // Находим папку
      let thisFolder;
      state.folders.forEach((folder) => {
        if (folder.name == opts.folderName) {
          thisFolder = folder;
        }
      });
      thisFolder.files.forEach((file) => {
        if (file.name == opts.fileName) {
          file.isRenameFile = opts.value;
        }
      });
    },
    SET_FILE_NAME: (state, opts) => {
      // Находим папку
      let thisFolder;
      state.folders.forEach((folder) => {
        if (folder.name == opts.folderName) {
          thisFolder = folder;
        }
      });
      thisFolder.files.forEach((file) => {
        if (file.name == opts.oldName) {
          file.name = opts.newName;
        }
      });
    },
    BOOLEAN_IS_RENAME_FOLDER: (state, opts) => {
      state.folders.forEach((folder) => {
        if (folder.name == opts.name) {
          folder.isRename = opts.value;
        }
      });
    },
    setName: (state, opts) => {
      state.folders.forEach((folder) => {
        if (folder.name == opts.oldName) {
          folder.name = opts.newName;
        }
      });
    },
    deleteFolder: (state, name) => {
      state.folders.forEach((folder, i) => {
        if (folder.name == name) {
          state.folders.splice(i, 1);
        }
      });
    },
    RE_CONTEXT_ELEMENT_NAME: (state, value) => {
      state.folderContextMenu.contextElementName = value;
    },
    set_left: (state, value) => {
      state.folderContextMenu.left = value;
    },
    set_top: (state, value) => {
      state.folderContextMenu.top = value;
    },
  },
  actions: {
  },
  modules: {
  },
})
