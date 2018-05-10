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
  padding: 0.7rem 1rem;
  transition: transform ease .2s, background-color ease .2s, box-shadow ease .2s;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}

.primary {
  background: $primary;
  color: $white;
  box-shadow: 0 1px 0 0 $shadow;
  margin-bottom: 1px;

  &:hover {
    transform: translate(0, 1px);
    box-shadow: 0 0 0 0 $shadow;
    background-color: $primary-lighter;
  }
}

.secondary {
  background-color: #EBF5F7;
  box-shadow: 0 1px 0 0 $shadow;
  color: $black;
  
  &:hover {
    background-color: lighten(#EBF5F7, 2%);
    transform: translate(0, 1px);
    box-shadow: 0 0 0 0 $shadow;
  }
}

.large {
  padding: 1rem 2rem;
  text-transform: uppercase;
}
</style>