<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token :color="'#F67068'"/>ERC721 Enumerable
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showEnumerable', false)"><img src="/close.svg"/></div>

    <div slot="body">
      <p>Competently cultivate next-generation best practices whereas functionalized web-readiness. Energistically procrastinate client-focused products without adaptive convergence. </p>
      <Toggler 
        @click.native.once="$store.commit('enableEnumerable')"
        :checked="$store.state.enableEnumerable"
      />
    </div>

    <div slot="actions">
      <Button 
        @click.native="$store.commit('showEnumerable', false)"
        :type="['secondary', 'large']">
        Save
      </Button>
    </div>
  </x-offside>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>