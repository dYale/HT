<template>
  <div id="app" class="fixed-top">
    <navbar></navbar>
    <hr></hr>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "components/Navbar"

export default {
  components: {
		Navbar
  }
}
</script>
<style>

 hr
{
    border: none;
    height: 1px;
    color: #ccc; 
    background-color: #ccc;
    text-align: left;
    width: 85%;
}

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
  /* nesting for the need to test postcss */
}

</style>
<style lang="scss">
@import '../sass/app';
@include font-face(Norwester, fonts/norwester);
</style>
