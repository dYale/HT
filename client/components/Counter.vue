<template>
  <div class="counter-wrapper">
    <div class="counter">
      {{ count }}
    </div>
    <button @click="$store.commit('INCREMENT')">Increment</button>
    <button @click="$store.commit('DECREMENT')">Decrement</button>
    <button @click="$store.dispatch('getFloofPics')">Increment Async</button> 
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
.counter {
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background: url("../../static/background.jpg");
  user-select: none;
}
</style>
