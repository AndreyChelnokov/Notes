import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    folders: [
      {
        name: 'Andrey',
        files: [
          {
            name: '2',
            data: 'Это текст который в заметке'
          },
          {
            name: 'gfgfgf',
            data: 'Это текст который в заметке'
          },
          {
            name: '12w',
            data: 'Это текст который в заметке'
          },
        ]
      },
      {
        name: 'Работа',
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
        name: 'Доступы',
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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
