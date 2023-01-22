import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
        {
          name : 'Adam',
          number : '0606060606'
      },
      {
        name : 'Amber',
        number : '0707070707'
    },
      {
        name : 'Jerem',
        number : '0808080808'
    }
    ]
  },
  getters: {
  },
  mutations: {
    ajoutPerso(state, contact){
      state.contacts.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
