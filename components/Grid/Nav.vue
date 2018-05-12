<template>
  <nav>
    <div class="nav--content" :class="{center : center}">
      <slot />
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      center: {
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
  
  &.center {
    justify-content: center;
    text-align: center;
  }
}

</style>