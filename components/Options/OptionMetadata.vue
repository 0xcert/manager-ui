<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token :color="'#32CAE8'"/>ERC721 Metadata
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showMetadata', false)"><img src="/close.svg"/></div>

    <div slot="body">
      <p>Competently cultivate next-generation best practices whereas functionalized web-readiness. Energistically procrastinate client-focused products without adaptive convergence. </p>
      <Toggler 
        @click.native.once="$store.commit('enableMetadata')"
        :checked="$store.state.enableMetadata"
      />
    </div>

    <form slot="form">
      <label for="name">Name:</label>
      <input name="name" type="text" placeholder="Enter name">
      <label for="name">Symbol:</label>
      <input name="symbol" type="text" placeholder="Enter symbol">
      <label for="name">URI:</label>
      <input name="uri" type="text" placeholder="Enter URI">
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
      uri: '',
      enabled: false
    }
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