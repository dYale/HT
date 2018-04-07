<template>
  <div class="wrapper justify-content-center">
      <h2 class="word justify-content-center" v-on:mouseover="htName='/ˈhɪliˈtelə/'" v-on:mouseleave="htName='hill·ie·tell·er'"><p>{{htName}}</p></h2>
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  data() {
      return {
        htName: "hill·ie·tell·er"
      }
    }
}
</script>

<style>
.word {
  font-family: "Times New Roman", Times, serif;
  font-size: 350px;
  color: #83774a;
  display:inline-block;
}

.subword {
    font-size: 100px;
    color: #258535;
}

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
