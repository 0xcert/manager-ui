import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      show: {
        create: true,
        review: false,
        loading: false,
        success: false,
        shade: false,
        error: false
      },
      showDefault: false,
      showMetadata: false,
      showEnumerable: false,
      showCertificate: false,
      enableDefault: true,
      enableMetadata: false,
      enableEnumerable: false,
      enableCertificate: false,
      erc721: { contractName: 'MyToken', enabled: true },
      erc721Metadata: { enabled: false },
      erc721Enumerable: { enabled: false },
      contract: {},
      contractAddress: ''
    },
    mutations: {
      setContractAddress(state, address) {
        state.contractAddress = address
      },
      setErc721(state, data) {
        state.erc721 = {
          contractName: data.contractName ? data.contractName : 'MyToken',
          enabled: state.enableDefault
        }
      },
      setErc721Metadata(state, data) {
        state.erc721Metadata = data
        state.erc721Metadata.enabled = state.enableMetadata
      },
      setErc721Enumerable(state, data) {
        state.erc721Enumerable = data
        state.erc721Enumerable.enabled = state.enableEnumerable
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
      showError(state, show) {
        state.show.error = show
      },      
      enableDefault(state) {
        state.enableDefault = !state.enableDefault
        state.erc721.enabled = !state.enableDefault
      },
      enableMetadata(state) {
        state.enableMetadata = !state.enableMetadata
        state.erc721Metadata.enabled = !state.enableMetadata
      },
      enableEnumerable(state) {
        state.enableEnumerable = !state.enableEnumerable
        state.erc721Enumerable.enabled = !state.enableEnumerable
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
        commit('showError', false)
        commit('showSuccess', false)
      },
      goToReview ({ commit }) {
        commit('showCreate', false)
        commit('showReview', true)
        commit('showLoading', false)
        commit('showError', false)
        commit('showSuccess', false)
      },
      goToLoading ({ commit }) {
        commit('showCreate', false)
        commit('showReview', false)
        commit('showLoading', true)
        commit('showError', false)
        commit('showSuccess', false)
      },
      goToError ({ commit }) {
        commit('showCreate', false)
        commit('showReview', false)
        commit('showLoading', false)
        commit('showError', true)
        commit('showSuccess', false)
      },
      goToSuccess ({ commit }) {
        commit('showCreate', false)
        commit('showReview', false)
        commit('showLoading', false)
        commit('showError', false)
        commit('showSuccess', true)
      }
    }
  })
}

export default createStore