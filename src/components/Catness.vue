<template>
  <div class="wrapper justify-content-center">
      <img src="http://thecatapi.com/api/images/get?format=xml&results_per_page=20">
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  data() {
    return {
      catPic: this.$store.state.catPic
    };
  }
};
</script>

<style>
.header {
  width: 50%;
  text-align: center;
}
</style>
