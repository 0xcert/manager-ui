<template>
  <nav>
    <div class="nav--content">

        <slot />

    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      closable: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss" scoped>
nav {
  display: block;
  width: 100%;
  background-color: $white;

  &.header {
    border-bottom: 1px solid $border;
  }

  &.toolbar {
    border-top: 1px solid $border;
  }
}

.nav--content {
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 40px;
  color: #9B9B9B;
  justify-content: center;
  text-align: center;

  .left & {
    text-align: left;
    justify-content: left;
  }
}

</style>