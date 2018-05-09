<template>
  <ul class="menu--main">
    <li v-for="item in items" :key="item.title">
      <nuxt-link :to="item.url" class="menu__item">{{ item.title }}</nuxt-link>
      <ul v-if="item.items.length > 0" class="menu--sub">
        <li v-for="subItem in item.items" :key="subItem.title">
          <nuxt-link :to="subItem.url" class="menu__subitem">{{ subItem.title }}</nuxt-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: 'KYC',
            url: '/',
            items: [
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.menu--main {
  list-style: none;
  margin: 0;
  padding: 0;
  color: $aside--color;
}

.menu__item {
  display: block;
  color: $aside--color;
  padding: 22px 30px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;

  &.exact-active,
  &.active {
    color: $white;
    border-left: 5px solid $white;
    background-color: $aside--hover;
  }

  &:hover {
    background-color: $aside--hover;
  }
}

.menu--sub {
  margin: 0;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.menu__subitem {
  display: block;
  padding: 10px 30px;
  font-weight: normal;

  &.exact-active,
  &.active {
    color: $white;
  }
}
</style>