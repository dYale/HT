<template>
  <div class="wrapper">
      <h2 class="word">hill·ie·tell·er</h2>
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
.word {
  font-family: "Times New Roman", Times, serif;
  font-size: 199px;
}

.wrapper {
    width: 100%;
}
</style>
