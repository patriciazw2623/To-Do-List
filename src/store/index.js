import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
    ]
  },
  mutations: {
    addToDo(state, payload){
      state.list.push(payload)
    },
    delToDo(state, payload){
      state.list.splice(payload)
    },
    clear(state, payload){
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
