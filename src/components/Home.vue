<template>
  <div class="page">
		<first></first>
  </div>
</template>

<script>
import First from './First';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  components: {
    First,
    Navbar
  }
};
</script>

<style>
.home-page {
  height: 100%;
  text-align: center;
}
</style>
