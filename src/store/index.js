import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import router from './modules/router'
import tagsView from './modules/tags_view'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    router,
    tagsView
  },
  getters
})

export default store
