import { setState } from '@/utils'
import { constantRouterMap, asyncRouterMap } from '@/router'
const router = {
  namespaced: true,
  state: {
    addRoutes: null,
    routes: null
  },
  mutations: {
    setState,
    setRoutes(state, routes) {
      state.addRoutes = routes
      state.routes = constantRouterMap.concat(routes)
    }
  },
  actions: {
    generateRouter({ state, commit }) {
      return new Promise((resolve) => {
        let routes = asyncRouterMap
        commit('setRoutes', routes)
        resolve()
      })
    }
  }
}

export default router
