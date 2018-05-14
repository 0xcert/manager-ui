<template>
<div class="token">
  <Token :color="tokenColor" />
  <slot/>
</div>
</template>

<script>
  export default {
    props: {
      tokenColor: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
svg {
  display: block;
  margin: 0 auto 1rem auto;
}

.token {
  padding: 1.3rem;
  margin: 0 1rem 1rem;
  border: 1px solid $border;
  text-align: center;
  width: 80px;
  cursor: pointer;
  opacity: 0.5;

  &.checked {
    opacity: 1;
    border: 1px solid darken($border, 20%);
  }

  &.enabled {
    opacity: 1;
    background: url('/checked.svg') no-repeat 10px 10px;
  }

  &:hover {
    border: 1px solid darken($border, 20%);
  }
}
</style>