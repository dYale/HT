<template>
    <div id="flex-nowrap">
    <div v-for="({display_url, shortcode }, idx) of floofPics"  v-bind:key="display_url" class="floofContainer">
         <img class="img-circle" :src="display_url"  v-bind:id="display_url" v-on:click="openInsta(shortcode)"/>
         </div>        
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    this.$store.dispatch('getFloofPics')
    const that = this
    $(document).on('DOMNodeInserted', function(e) {
      if ( $(e.target).hasClass('floofContainer') ) {
          $(e.target).css({opacity: 0.0})
          $(e.target).animate({opacity: 0.85}, 2000)          
          that.animateAllCats()
      }
    });

  },
  data() {
    return {
        floofPics: this.$store.state.floofPics
      }
    },
    methods: {
          openInsta (link) {
            const win = window.open(`https://www.instagram.com/p/${link}/`, '_blank');
            win.focus();
          },
          animateAllCats () {
            let timing = 0;
            for(var item of $(".img-circle")){
              const [top, left] = this.makeNewPosition()
              $(item).css({top,left});
              this.timingCat(item, timing)
              timing += 400;
            }
          },
          timingCat(item, timing) {
                setTimeout( () => {
                  this.animateDiv(item)
                  }, timing)
          },
          makeNewPosition(){
              // Get viewport dimensions (remove the dimension of the div)
              let h = $(`#flex-nowrap`).height()
              let w = $(`#flex-nowrap`).width()
              let windowH = $(window).height()
              let windowW = $(window).width()
              
              console.log(h, w)
              let nh = Math.floor(Math.random() * h) + windowH - h
              let nw = Math.floor(Math.random() * w) + windowW - w

              return [nh,nw]        
              },
          animateDiv(el){
              let newq = this.makeNewPosition()
              let oldq = $(el).offset()
              let speed = this.calcSpeed([oldq.top, oldq.left], newq)
              console.log(newq)
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
    cursor: pointer;
}

#flex-nowrap {
  height: 100%
}
</style>

