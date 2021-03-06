import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  count: 0,
  floofPics: [],
  currentTab: 'Me',
  catGround: ''
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
}

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  getFloofPics() {
    axios.get(`https://www.instagram.com/artemis_the_floof/?__a=1`)
      .then(response => {
        // JSON responses are automatically parsed.
        response.data.graphql.user.edge_owner_to_timeline_media.edges.forEach(({ node }) => {
          state.floofPics.push(node)
        })
      })
      .catch(e => {
        this.errors.push(e)
      })

    axios.get(`https://www.instagram.com/hillieann/?__a=1`)
      .then(response => {
        // JSON responses are automatically parsed.
        response.data.graphql.user.edge_owner_to_timeline_media.edges.forEach(({ node }) => {
          state.floofPics.push(node)
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
