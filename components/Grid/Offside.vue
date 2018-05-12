<template>
  <div class="offside">
    <x-nav :class="'header'">
      <slot name="header" />
      <slot name="close" />
    </x-nav>
    <div class="offside__content">
      <slot name="body" class="description"/>
    </div>
    <div class="offside__form">
      <slot name="form" />
    </div>
    <x-nav :class="'toolbar'">
      <slot name="actions"/>
    </x-nav>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
.offside {
  display: flex;
  flex-flow: column;
  background: $white;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 60%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);

  &__form {
    border-top: 1px solid $border;
    padding: 30px 40px;
    text-align: left;
    flex-grow: 1;
  }

  &__content {
    padding: 30px 40px;
    text-align: left;

    p {
      margin-top: 0;
    }
  }
}

</style>