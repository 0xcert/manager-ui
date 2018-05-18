<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token :color="'#32CAE8'"/>ERC721 Metadata
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showMetadata', false)"><img src="/close.svg"/></div>

    <div slot="body">
      <p>
        The enumeration extension is OPTIONAL for ERC-721 smart contracts. This allows your contract
        to publish its full list of NFTs and make them discoverable.
      </p>
      <Toggler 
        @click.native.once="$store.commit('enableMetadata')"
        :checked="$store.state.enableMetadata"
      />
    </div>

    <form slot="form">
      <label for="name">Name:</label>
      <input v-model="name" type="text" placeholder="Enter name">
      <label for="name">Symbol:</label>
      <input v-model="symbol" type="text" placeholder="Enter symbol">
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
      name: '',
      symbol: '',
      enabled: false
    }
  },
  mounted () {
    this.$data.name = this.$store.state.erc721Metadata.name
    this.$data.symbol = this.$store.state.erc721Metadata.symbol
  },
  methods: {
    submit () {
      this.$store.commit('setErc721Metadata', this.$data)
      this.$store.commit('showMetadata', false)
    }
  }
}
</script>

<style scoped>

</style>