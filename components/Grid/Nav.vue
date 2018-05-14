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
  z-index: 5;

  &.header {
    border-bottom: 1px solid $border;

  }

  &.toolbar {
    margin-top: auto;
    border-top: 1px solid $border;
  }
}

.nav--content {
  display: flex;
  align-items: center;
  height: $navHeight;
  padding: 0 20px;
  color: #9B9B9B;

  @include media('medium') {
    height: $navHeightMedium;
    padding: 0 40px;
  }
  
  &.center {
    justify-content: center;
    text-align: center;
  }
}

</style>