<template>
  <div class="application">
    <x-nav :class="'header'" center>
      <strong class="blue">manager.</strong>0xcert.org
    </x-nav>
    <main>
      <div class="main--content">
        <nuxt />
      </div>
    </main>
    <x-nav :class="'toolbar'" center>
      <Button 
        v-if="!$store.state.showCode"
        @click.native="$store.commit('showCode', true)"
        :type="['primary', 'large']">
        Review code
      </Button>
      <Button 
        v-if="$store.state.showCode"
        :type="['primary', 'large']">
        Deploy
      </Button>
      <Button 
        v-if="$store.state.showCode"
        @click.native="$store.commit('showCode', false)"
        :type="['secondary', 'large']">
        Edit options
      </Button>
    </x-nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  overflow-x: hidden;
}

body {
  background-repeat: no-repeat;
  font-family: "Roboto", -apple-system, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
}

.application {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  color: rgba(0,0,0,.87);
}

aside {
  background-color: $aside--bg;
  height: 100%;
  margin-top: 0px;
  max-height: calc(100% - 0px);
  transform: translateX(0px); // hide on mobile translate - 300
  width: 300px;
  transition: transform 0.2s;

  display: block;
  left: 0;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: auto;
  top: 0;
  will-change: transform;
  z-index: 3;

  &.fixed {
    position: fixed;
  }
}

main {
  // padding: 90px 0px 0px 300px;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  will-change: padding;
}

.main--content {
  display: flex;
  flex-basis: 100%;
}

.box {
  background-color: rgba(245,246,248,0.7);
  padding: 25px 28px;
}

.blue {
  color: $primary;
}
</style>

