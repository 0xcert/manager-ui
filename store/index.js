import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      show: {
        create: true,
        review: false,
        loading: false,
        success: false,
        shade: false
      },
      showDefault: false,
      showMetadata: false,
      showEnumerable: false,
      showCertificate: false,
      enableDefault: false,
      enableMetadata: false,
      enableEnumerable: false,
      enableCertificate: false,
      erc721: {},
      erc721Metadata: {},
      erc721Enumerable: {},
      contract: {},
      contractAddress: ''
    },
    mutations: {
      setContractAddress(state, address) {
        state.contractAddress = address
      },
      setErc721(state, data) {
        state.erc721 = data
      },
      setErc721Metadata(state, data) {
        state.erc721Metadata = data
      },
      setErc721Enumerable(state, data) {
        state.erc721Enumerable = data
      },
      setContract(state, data) {
        state.contract = data
      },
      showDefault(state, open) {
        state.showDefault = open
        state.show.shade = open
      },
      showMetadata(state, open) {
        state.showMetadata = open
        state.show.shade = open
      },
      showEnumerable(state, open) {
        state.showEnumerable = open
        state.show.shade = open
      },
      showCertificate(state, open) {
        state.showCertificate = open
        state.show.shade = open
      },
      showCreate(state, show) {
        state.show.create = show
      },
      showReview(state, show) {
        state.show.review = show
      },
      showLoading(state, show) {
        state.show.loading = show
      },
      showSuccess(state, show) {
        state.show.success = show
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
    },
    actions: {
      goToCreate ({ commit }) {
        commit('showCreate', true)
        commit('showReview', false)
        commit('showLoading', false)
        commit('showSuccess', false)
      },
      goToReview ({ commit }) {
        commit('showCreate', false)
        commit('showReview', true)
        commit('showLoading', false)
        commit('showSuccess', false)
      },
      goToLoading ({ commit }) {
        commit('showCreate', false)
        commit('showReview', false)
        commit('showLoading', true)
        commit('showSuccess', false)
      },
      goToSuccess ({ commit }) {
        commit('showCreate', false)
        commit('showReview', false)
        commit('showLoading', false)
        commit('showSuccess', true)
      }
    }
  })
}

export default createStore