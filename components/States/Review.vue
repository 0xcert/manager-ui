<template>
  <div>
    <h1>Review your code</h1>
    <prism language="javascript" :code="this.$store.contract.src"></prism>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>