import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: [
      {
        id: 1,
        name: 'Gate31',
        isRename: false,
        files: [
          {
            name: 'Доступы',
            data: 'Заметка в которой я хроню доступы'
          }
        ]
      },
      {
        id: 2,
        name: 'Работа',
        isRename: false,
        files: [
          {
            name: 'арпрара',
            data: 'Это текст который в заметке'
          },
          {
            name: '323',
            data: 'Это текст который в заметке'
          },
          {
            name: '12w',
            data: 'Это текст который в заметке'
          },
        ]
      },
      {
        id: 3,
        name: 'Доступы',
        isRename: false,
        files: [
          {
            name: '2',
            data: 'Это текст который в заметке'
          },
          {
            name: '43',
            data: 'Это текст который в заметке'
          },
          {
            name: '12w',
            data: 'Это текст который в заметке'
          },
        ]
      },
    ],
    folderContextMenu: {
      isMenu: false,
      top: 10,
      left: 10,
      folderName: ''
    }
  },
  mutations: {
    set_isMenu: (state, value) => {
      state.folderContextMenu.isMenu = value;
    },
    set_isRename: (state, opts) => {
      state.folders.forEach(folder => {
        if (folder.name == opts.name) {
          folder.isRename = opts.value;
        }
      })
    },
    setName: (state, opts) => {
      state.folders.forEach(folder => {
        if (folder.name == opts.oldName) {
          folder.name = opts.newName;

          console.log(folder.name)
        }
      })
    },
    deleteFolder: (state, name) => {
      state.folders.forEach((folder, i) => {
        if (folder.name == name) {
          state.folders.splice(i, 1);
        }
      })
    },
    set_folderNameContextMenu: (state, value) => {
      state.folderContextMenu.folderName = value;
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
  }
})
