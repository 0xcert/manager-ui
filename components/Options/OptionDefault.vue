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

    <form slot="form">
      <label for="name">Name:</label>
      <input name="name" type="text" placeholder="Enter name">
      <label for="name">Symbol:</label>
      <input name="name" type="text" placeholder="Enter symbol">
      <label for="name">URI:</label>
      <input name="name" type="text" placeholder="Enter URI">
    </form>

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