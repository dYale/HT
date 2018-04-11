<template>
  <div class="wrapper justify-content-center">
      <img src="http://thecatapi.com/api/images/get?format=xml&results_per_page=20">
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  mounted() {
    this.$store.dispatch('getRandomCats')
  },
    data() {
        return {
            catPic: this.$store.state.catPic
        }
    }
}
</script>

<style>

.header {
    width: 50%;
    text-align: center;
}
.wrapper {
        background: -moz-linear-gradient(top, #9aa230 30%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #9aa230 30%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #9aa230 30%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
</style>
