<template>
  <a class="button" :class="type">
    <slot/>
  </a>
</template>

<script>
  export default {
    props: {
      type: {
        type: [String, Array],
        default: 'primary'
      }
    }
  }
</script>

<style scoped lang="scss">
.button {
  font-family: 'Roboto', Arial, sans-serif;
  display: inline-flex;
  align-items: center;
  font-weight: normal;
  margin: 0 20px 1px 0;
  padding: 0.7rem 1rem;
  box-shadow: 0 1px 0 0 $shadow;
  transition: transform ease .2s, background-color ease .2s, box-shadow ease .2s;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    box-shadow: 0 0 0 0 $shadow;
  }
}

.primary {
  background-color: $primary;
  color: $white;

  &:hover {
    transform: translate(0, 1px);
    background-color: $primary-lighter;
  }
}

.secondary {
  background-color: #EBF5F7;
  color: $black;
  
  &:hover {
    transform: translate(0, 1px);
    background-color: lighten(#EBF5F7, 2%);
  }
}

.large {
  padding: .6rem 2rem;
  text-transform: uppercase;

  @include media('medium') {
    padding: 1rem 2rem;
  }
}
</style>