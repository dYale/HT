<template>
  <div class="justify-content-center">
      <h2 class="word" v-on:mouseover="htName='/ˈhɪliˈtelə/'" v-on:mouseleave="htName='hill·ie·tell·er'"><p style="margin-top: 20%">{{htName}}</p></h2>
      <h3 class="subword">It Doesn't Have to be Fun to be Fun</h3>
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
      htName: 'hill·ie·tell·er'
    };
  }
};
</script>

<style>
.word {
  font-family: "Times New Roman", Times, serif;
  font-size: 10vw;
  color: #fbfded;
}

.subword {
  font-size: 3vw;
  color: #fbfced;
}

.header {
  width: 50%;
  text-align: center;
}
</style>
