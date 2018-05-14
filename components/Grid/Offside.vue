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
  width: 90%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  z-index: 7;

  @include media('medium') {
     width: 60%;
  }

  &__form {
    border-top: 1px solid $border;
    text-align: left;
    padding: 30px;

    @include media('medium') {
      padding: 30px 40px;
    }
  }

  &__content {
    text-align: left;
    padding: 30px;

    @include media('medium') {
      padding: 30px 40px;
    }

    p {
      margin-top: 0;
    }
  }
}

</style>