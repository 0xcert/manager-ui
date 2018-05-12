<template>
  <div class="offside">
    <x-nav :class="'header left'">
      <slot name="header" />
      <slot name="close" />
    </x-nav>
    <div class="offside__content">
      <slot name="description" class="description"/>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
.offside {
  background: $white;
  position: absolute;
  height: 100vh;
  right: 0;
  width: 60%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);

  &__content {
    padding: 30px 40px;
    text-align: left;

    p {
      margin-top: 0;
    }
  }
}

.offside {
  z-index: 4;
}

.offside--header {
  flex-grow: 1;
}

.tokenIcon {
  margin-right: 1rem;
  vertical-align: middle;
}

.offside--close {
  cursor: pointer;
}
</style>