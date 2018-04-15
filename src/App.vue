<template>
  <div class="home-page">
  <navbar></navbar>
  <router-view id="app"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
export default { name: 'app',
components: {
		Navbar
  } }
</script>

<style lang="scss">

@import './sass/app';
@font-face {
  font-family: "Norwester";
  src: url("../fonts/norwester/webfonts/norwester.ttf") format("truetype");
}
</style>

<style>
body {
  margin: 0;
  height: 100%;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}

#app {
  height: 100%;
}
.page {
  text-align: center;
  height: 100%;
  /* nesting for the need to test postcss */
}
</style>