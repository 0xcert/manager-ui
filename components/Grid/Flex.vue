<template>
  <div class="flex-container">
    <slot/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .flex-container {
    display: flex;
    flex-flow: row wrap;
  }
</style>