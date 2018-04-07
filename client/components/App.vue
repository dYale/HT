<template>
  <div id="app" class="fixed-top">
    <navbar></navbar>
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
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
</style>
