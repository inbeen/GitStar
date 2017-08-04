import * as types from '../mutation-types'

export default {
  state: {
    dialog: false,
    sync: false,
    loading: true,
    tips: [],
    tipNum: 0
  },
  mutations: {
    [types.SET_DIALOG] (state, payload) {
      state.dialog = payload.dialog
    },
    [types.SET_SYNC] (state, payload) {
      state.sync = payload.sync
    },
    [types.SET_LOADING] (state, payload) {
      state.loading = payload.loading
    },
    [types.ADD_TIP] (state, payload) {
      let { type, info } = payload
      state.tips.unshift({
        type: type,
        info: info,
        num: state.tipNum
      })
      state.tipNum++
    },
    [types.DELETE_TIP] (state, payload) {
      let i = payload.i
      if (i === 0) {
        state.tips.shift()
      } else state.tips.splice(i, 1)
    },
    [types.SET_TIP] (state, payload) {
      state.tips[payload.i] = payload.is
    }
  },
  actions: {
    setDialog ({ commit }, flag) {
      commit(types.SET_DIALOG, {
        dialog: flag
      })
    },
    addTip ({ state, commit }, tip) {
      commit(types.ADD_TIP, {
        type: tip.type,
        info: tip.info
      })
      setTimeout(() => {
        state.tips.pop()
      }, 4000)
    },
    deleteTip ({ commit }, i) {
      commit(types.DELETE_TIP, {
        i: i
      })
    }
  }
}
