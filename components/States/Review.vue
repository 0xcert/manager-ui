<template>
  <div>
    <h1>Review your code</h1>
    <div class="code">
      <prism language="javascript" :code="this.$store.contract.src"></prism>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.code {
  height: 300px;
  background: #000;
  text-align: left;
  overflow: auto;
}
</style>