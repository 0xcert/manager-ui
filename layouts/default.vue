<template>
  <div class="application">
    <aside class="fixed">
      <div class="brand">
        <Logo :width="150" :color="'white'" />
      </div>
      <Navigation/>
    </aside>
    <!-- <nav class="toolbar fixed">
      <div class="nav--content">

      </div>
    </nav> -->
    <main>
      <div class="main--content">
        <x-container>
          <nuxt />
        </x-container>
      </div>
    </main>
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

nav.toolbar {
  display: block;
  width: 100%;
  margin-top: 0px;
  padding-right: 0px;
  padding-left: 300px;
  background-color: $white;
  transform: translateY(0px);
  will-change: padding-left;
  border-bottom: 1px solid $border;

  &.fixed {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
  }
}

.nav--content {
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 40px;
  color: #9B9B9B;
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
  padding: 0px 0px 0px 300px;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  will-change: padding;
}

.main--content {
  flex: 1 1 auto;
  max-width: 100%;
}

.brand {
  display: flex;
  background-color: #3D8CFF;
  padding: 0 30px;
  align-items: center;
  height: 90px;
}

.box {
  background-color: rgba(245,246,248,0.7);
  padding: 25px 28px;
}
</style>

