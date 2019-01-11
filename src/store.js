export default {

  state: {
    count: 0,
  },

  mutations: {
    increment( state ) {
      state.count++
    },
  },

  getters: {
    getCount: state => {
      return state.count
    }
  }

}