import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      showDefault: false,
      showMetadata: false,
      showEnumerable: false,
      showCertificate: false,
      shade: false,
      showCode: false,
      enableDefault: false,
      enableMetadata: false,
      enableEnumerable: false,
      enableCertificate: false
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
      showCode(state, show) {
        state.showCode = show
      },
      enableDefault(state) {
        state.enableDefault = !state.enableDefault
      },
      enableMetadata(state) {
        state.enableMetadata = !state.enableMetadata
      },
      enableEnumerable(state) {
        state.enableEnumerable = !state.enableEnumerable
      },
      enableCertificate(state) {
        state.enableCertificate = !state.enableCertificate
      }
    }
  })
}

export default createStore