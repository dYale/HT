import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  count: 0,
  floofPics: []
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  getFloofPics () {
    axios.get(`https://www.instagram.com/artemis_the_floof/?__a=1`)
    .then(response => {
      // JSON responses are automatically parsed.
      debugger
      console.log(response.data.graphql.user.edge_owner_to_timeline_media.edges)
      response.data.graphql.user.edge_owner_to_timeline_media.edges.forEach(({ node }) => {
        console.log(node)
        state.floofPics.push(node.display_url)
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
