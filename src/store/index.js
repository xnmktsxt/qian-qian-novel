import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  homeData: ''
}
const mutations = {
  setHomeData(state, data) {
    state.homeData = data
  }
}
const actions = {
  async getHomeData(context) {
    // axios
    //   .get('/api/getHome')
    //   .then(response => {
    //     console.log(response.data.data)
    //     context.commit('setHomeData', response.data.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    try {
      let response = await axios.get('/api/getHome')
      context.commit('setHomeData', response.data.data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
