import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersList: []
  },
  mutations: {
    SET_USERS_LIST (state, list) {
      state.usersList = list
    }
  },
  actions: {
    FETCH_USERS_INFO ({ commit }) {
      axios.get('https://reqres.in/api/users/?per_page=12')
        .then(response => commit('SET_USERS_LIST', response.data.data))
    }
  },
  modules: {
  }
})
