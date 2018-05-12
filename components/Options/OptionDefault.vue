<template>
  <x-offside>
    <div slot="header" class="offside--header">
      <Token/>ERC721
    </div>
    <div slot="close" class="offside--close" @click="$store.commit('showDefault', false)"><img src="/close.svg"/></div>
    <div slot="body">
      <p>Competently cultivate next-generation best practices whereas functionalized web-readiness. Energistically procrastinate client-focused products without adaptive convergence. </p>
      <Toggler/>
    </div>

    <form slot="form">
      <label for="name">Name:</label>
      <input name="name" type="text" placeholder="Enter name">
      <label for="name">Symbol:</label>
      <input name="name" type="text" placeholder="Enter name">
      <label for="name">URI:</label>
      <input name="name" type="text" placeholder="Enter name">
    </form>
    
    <div slot="actions">
      <Button 
        @click.native="$store.commit('showDefault', false)"
        :type="['secondary', 'large']">
        Save</Button>
    </div>
  </x-offside>
</template>

<script>
import Toggler from '~/components/Toggler'
export default {
  components: {
    Toggler
  }
}
</script>

<style scoped>

</style>