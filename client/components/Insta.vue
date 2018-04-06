<template>
    <div class="d-flex flex-nowrap">
    <div v-for="(pic, idx) of floofPics"  v-bind:key="pic"  v-bind:class="randomClass(idx)"  >
         <img class="img-circle p2" :src="pic" />
         </div>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getFloofPics')
  },
  data() {
    return {
        floofPics: this.$store.state.floofPics
      }
    },
    methods: {
           randomClass (idx) {
               return `order-${idx} p-2`
           }
       }
  }
</script>

<style>

.img-circle {
    border-radius: 100%;
    width:10%;
}

.container {
  margin: 100px;
}

.circle {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 10px;
}

.circle0 {
  background: PaleTurquoise;
  transition: all 1.5s linear;
  transform: translate3d(200px, 100px);
  transform: translate3d(200px, 100px);  
} 

.circle1 {
  background: salmon;
  transition: all 1.5s ease;
}

.circle2 {
  background: lightskyblue;
  transition: all 1.5s ease-in;
}

.circle3 {
  background: khaki;
  transition: all 1.5s ease-out;
}

.circle4 {
  background: mediumturquoise;
  transition: all 1.5s ease-in-out;
}

.circle5 {
  background: thistle;
  transition: all 1.5s cubic-bezier(0,1,.98,0); 
}
</style>

