<template>
  <div class="page">
		<first></first>
  </div>
</template>

<script>
import First from 'components/First'
import Navbar from 'components/Navbar'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
		First,
		Navbar
  }
}
</script>

<style>
.page {
	height: 100%;
}
</style>
