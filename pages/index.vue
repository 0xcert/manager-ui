<template>
  <x-container class="middle">
    <h1>Create a Non-fungible Project</h1>
    <h4>
      Enable and configure the features of your non-fungible token smart contract, review and deploy it to the Etherum blockchain
    </h4>

    <div class="errors">
      <p>Login to Metamask and select Reposten Network</p>
      <p>You need at least 0.1 ETH (you have 0 ETH)</p>
    </div>

    <strong>Select smart contract features:</strong>

    <div class="options">
      <Option 
        @click.native="$store.commit('showDefault', true)" 
        :class="{checked : $store.state.showDefault}">
        ERC721
      </Option>
      <Option 
        @click.native="$store.commit('showMetadata', true)" 
        :class="{checked : $store.state.showMetadata}" 
        :tokenColor="'#32CAE8'">
        ERC 721 Metadata
      </Option>
      <Option 
        @click.native="$store.commit('showEnumerable', true)" 
        :class="{checked : $store.state.showEnumerable}" 
        :tokenColor="'#F67068'">
        ERC 721 Enumerable
      </Option>
      <Option 
        @click.native="$store.commit('showCertificate', true)" 
        :class="{checked : $store.state.showCertificate}" 
        :tokenColor="'#3EFF8A'">
        ERC 721 Certificate
      </Option>
    </div>

    <transition name="fade">
      <div class="shade" v-if="$store.state.shade"></div>
    </transition>

    <transition name="slide" mode="out-in">
      <OptionDefault v-if="$store.state.showDefault" key="showDefault"/>
      <OptionMetadata v-if="$store.state.showMetadata" key="showMetadata" />
      <OptionEnumerable v-if="$store.state.showEnumerable" key="showEnumerable" />
      <OptionCertificate v-if="$store.state.showCertificate" key="showCertificate" />
    </transition> 

  </x-container>
</template>

<script>
import OptionDefault from '~/components/Options/OptionDefault'
import OptionMetadata from '~/components/Options/OptionMetadata'
import OptionEnumerable from '~/components/Options/OptionEnumerable'
import OptionCertificate from '~/components/Options/OptionCertificate'

export default {
  components: {
    OptionDefault,
    OptionMetadata,
    OptionEnumerable,
    OptionCertificate,
  }
}
</script>

<style lang="scss">
.middle {
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.errors {
  margin: 2rem 0 3rem;

  p {
    font-size: 14px;
    color: $grey;
    margin: 0;
  }
}

.options {
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-around;
  max-width: 650px;
  margin: 2rem 0 0;
}

.shade {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 0;
  height: 100%;
}

.offside {
  z-index: 4;
}

.tokenIcon {
  margin-right: 1rem;
  vertical-align: middle;
}

.offside--close {
  cursor: pointer;
}
</style>