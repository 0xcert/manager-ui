<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
 .container {
   padding: 40px;
   display: flex;
   flex-flow: column;
 }
</style>