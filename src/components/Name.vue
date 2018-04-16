<template>
  <div class="justify-content-center name">
      <h2 class="word" v-on:mouseover="htName='/ˈhɪliˈtelə/'" v-on:mouseleave="htName='hill·ie·tell·er'"><p>{{htName}}</p></h2>
      <h3 class="subword">it doesn't have to be fun to be fun</h3>
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

.name {
  margin-top: 20%;
}


@media screen and (max-width: 480px) {
 .word {
    font-size: 15vw;
    margin-top: 50%;
  }

  .subword {
    font-size: 5vw;
  }
}
</style>
