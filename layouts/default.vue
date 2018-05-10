<template>
  <div class="application">
    <nav class="header">
      <div class="nav--content">
        <strong class="blue">manager.</strong>0xcert.org
      </div>
    </nav>
    <main>
      <div class="main--content">
        <nuxt />
      </div>
    </main>
    <nav class="toolbar">
      <div class="nav--content">
        <Button :type="['primary', 'large']">Review code</Button>
      </div>
    </nav>
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

nav.header {
  display: block;
  width: 100%;
  background-color: $white;
  will-change: padding-left;
  border-bottom: 1px solid $border;
}

nav.toolbar {
  display: block;
  width: 100%;
  background-color: $white;
  will-change: padding-left;
  border-top: 1px solid $border;
}

.nav--content {
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 40px;
  color: #9B9B9B;
  justify-content: center;
  text-align: center;
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

