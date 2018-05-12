<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token :color="'#F67068'"/>ERC721 Enumerable
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showEnumerable', false)"><img src="/close.svg"/></div>

    <div slot="body">
      <p>Competently cultivate next-generation best practices whereas functionalized web-readiness. Energistically procrastinate client-focused products without adaptive convergence. </p>
      <Toggler/>
    </div>

    <div slot="actions">
      <Button 
        @click.native="$store.commit('showDefault', false)"
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