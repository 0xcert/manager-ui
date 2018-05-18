<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token :color="'#F67068'"/>ERC721 Enumerable
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showEnumerable', false)"><img src="/close.svg"/></div>

    <div slot="body">
      <p>
        The metadata extension is OPTIONAL for ERC-721 smart contracts. This allows your smart contract
        to be interrogated for its name and for details about the assets which your NFTs represent.
      </p>
      <Toggler 
        @click.native.once="$store.commit('enableEnumerable')"
        :checked="$store.state.enableEnumerable"
      />
    </div>

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
      enabled: false
    }
  },
  methods: {
    submit () {
      this.$store.commit('setErc721Enumerable', this.$data)
      this.$store.commit('showEnumerable', false)
    }
  }
}
</script>

<style scoped>

</style>