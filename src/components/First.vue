<template>
<div class="page">
  <div class="primary">
		<name></name>
    <insta></insta>
  </div>
  </div>
</template>

<script>
import Name from './Name';
import Insta from './Insta';

export default {
  components: {
    Insta,
    Name
  }
};
</script>

<style>
.primary {
  font-family: "Times New Roman", Times, serif;
  font-size: 300px;
  color: #6f8f2a;
  background-image: url("../../static/background.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  height: 100%;
  opacity: 0.9;
  z-index: 30;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Set a specific height */
  min-height: 500px;
}
</style>


