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
      <p>Competently cultivate next-generation best practices whereas functionalized web-readiness. Energistically procrastinate client-focused products without adaptive convergence. </p>
      <Toggler 
        @click.native.once="$store.commit('enableDefault')"
        :checked="$store.state.enableDefault"
      />
    </div>

    <form slot="form" action.prevent.default>
      <label for="name">Contract name:</label>
      <input name="contractName" type="text" placeholder="Enter contract name">
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