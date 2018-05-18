<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token/>ERC721
    </div>

    <div 
      @click="$store.commit('showDefault', false)"
      slot="close" 
      class="offside--close">
      <img src="/close.svg"/>
    </div>

    <div slot="body">
      <p>
        A standard interface allows wallet/broker/auction applications to work with any NFT on Ethereum.
        This standard is inspired by the ERC-20 token standard and builds on two years of experience since
        EIP-20 was created. EIP-20 is insufficient for tracking NFTs because each asset is distinct
        (non-fungible) whereas each of a quantity of tokens is identical (fungible).
      </p>
      <!-- <Toggler 
        @click.native.once="$store.commit('enableDefault')"
        :checked="$store.state.enableDefault"
      /> -->
    </div>

    <form slot="form" action.prevent.default>
      <label for="name">Contract name:</label>
      <input v-model="contractName" type="text" placeholder="Enter contract name">
    </form>

    <div slot="actions">
      <Button 
        @click.native="submit"
        :type="['secondary', 'large']">
        Save
      </Button>
    </div>
  </x-offside>
</template>

<script>
export default {
  data () {
    return {
      contractName: 'MyToken',
      enabled: false
    }
  },
  mounted () {
    this.$data.contractName = this.$store.state.erc721.contractName
  },
  methods: {
    submit () {
      this.$store.commit('setErc721', this.$data)
      this.$store.commit('showDefault', false)
    }
  }
}
</script>

<style scoped>

</style>