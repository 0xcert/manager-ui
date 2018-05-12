import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      showDefault: false,
      showMetadata: false,
      showEnumerable: false,
      showCertificate: false,
      shade: false
    },
    mutations: {
      showDefault(state, open) {
        state.showDefault = open
        state.shade = open
      },
      showMetadata(state, open) {
        state.showMetadata = open
        state.shade = open
      },
      showEnumerable(state, open) {
        state.showEnumerable = open
        state.shade = open
      },
      showCertificate(state, open) {
        state.showCertificate = open
        state.shade = open
      },
    }
  })
}

export default createStore