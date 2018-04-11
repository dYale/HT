<template>
  <div class="primary">
		<name></name>
    <insta></insta>
  </div>
</template>

<script>
import Name from "components/Name"
import Insta from "components/Insta"

export default {
  components: {
		Insta,
		Name
  }
}
</script>

<style>
.primary {
  font-family: "Times New Roman", Times, serif;
  font-size: 300px;
  color: #83774a;
  background-image: url("../../static/trees.jpg");
	background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column;
  height: 100%;
}


</style>


