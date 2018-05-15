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