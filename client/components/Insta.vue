<template>
    <div class="flex-nowrap">
    <div v-for="(pic, idx) of floofPics"  v-bind:key="pic">
         <img class="img-circle off-screen-left" :src="pic"  v-bind:id="pic"  />
         </div>
    <button @click="animateAllCats()">Cat Mode</button>         
    </div>
</template>

<script>
import $ from 'jquery'
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
          animateAllCats () {
              for(var item of $(".img-circle")){
                console.log(item)
                this.animateDiv(item)
              }
          },
          makeNewPosition(){
              // Get viewport dimensions (remove the dimension of the div)
              let h = $(window).height() - 50
              let w = $(window).width() - 50
              
              let nh = Math.floor(Math.random() * h)
              let nw = Math.floor(Math.random() * w)
              
              return [nh,nw]        
              },
          animateDiv(el){
              let newq = this.makeNewPosition()
              let oldq = $(el).offset()
              let speed = this.calcSpeed([oldq.top, oldq.left], newq)
    
              $(el).animate({ top: newq[0], left: newq[1] }, speed, () => { this.animateDiv(el)})
          }, 
          calcSpeed(prev, next) {
    
            let x = Math.abs(prev[1] - next[1])
            let y = Math.abs(prev[0] - next[0])
            let greatest = x > y ? x : y
            let speedModifier = 0.1
            let speed = Math.ceil(greatest/speedModifier)

            return speed

          }
       }
  }
</script>

<style>

.img-circle {
    border-radius: 100%;
    width:8%;
    position: fixed;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), no-repeat;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), no-repeat;
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), no-repeat;
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), no-repeat;
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), no-repeat;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), no-repeat;
}

.off-screen-left {
  top: 0;
  left: 0;
}

.container {
  margin: 100px;
}

.circle {
  border-radius: 50%;
  height: 20px;
  width: 20px;
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

