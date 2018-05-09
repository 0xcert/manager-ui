<template>
  <span :class="['tag', 'tag__'+kind]">{{ label }}</span>
</template>

<script>
  export default {
    props: {
      kind: {
        type: Number
      },
      label: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  padding: 4px 8px 5px;
  line-height: 1;
  border-radius: 4px;
  margin-right: 5px;
  color: $white;
  background-color: $primary;
  font-family: "Roboto";
  font-size: 12px;

  &__1 {
    background-color: $aside--hover
  }
}
</style>