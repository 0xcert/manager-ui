<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
 .container {
   padding: 20px;
   display: flex;
   flex-flow: column;
   overflow-y: auto;

  @include media('medium') {
    padding: 40px;
  }
 }
</style>