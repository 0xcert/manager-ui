<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token :color="'#32CAE8'"/>ERC721 Metadata
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showMetadata', false)"><img src="/close.svg"/></div>

    <div slot="body">
      <p>Competently cultivate next-generation best practices whereas functionalized web-readiness. Energistically procrastinate client-focused products without adaptive convergence. </p>
      <Toggler/>
    </div>
    
  </x-offside>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>