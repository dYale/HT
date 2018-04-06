<template>
  <div class="page">
    <counter></counter>
    <insta></insta>
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script>
import Insta from 'components/Insta'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    Insta
  }
}
</script>

<style>
body {
	background: #00b4ff;
	color: #333;
	font: 100% Lato, Arial, Sans Serif;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
}

#background-wrap {
    bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
}

</style>
