<template>
  <div @click='clicked' v-on:touchstart='keyPressed' v-on:keydown='keyPressed' class='cat totally' tabindex=-1>
      <img :src='catUrl' class='totally'><div class='totally'></div>
      <img :src='catUrl' class='totally'><div class='totally'></div>
      <img :src='catUrl' class='totally'><div class='totally'></div>
      <img :src='catUrl' class='totally'><div class='totally'></div>
      <img :src='catUrl' class='totally'><div class='totally'></div>
      <img :src='catUrl' class='totally'><div class='totally'></div>
  </div>
</template>

<script>
import Catness from './Catness';

import $ from 'jquery';

export default {
  components: {
    Catness
  },
  data() {
    return {
      catUrl: 'http://thecatapi.com/api/images/get?format=src&type=gif&'
    };
  },
  methods: {
    clicked: function(event) {
      const top = event.y;
      const left = event.x;
      var img = document.createElement('img');
      const randomClass = this.makeid();
      img.src = 'http://thecatapi.com/api/images/get?' + randomClass;
      $(img).css({
        top,
        left,
        width: '15vw',
        height: '15vw',
        position: 'fixed',
        'border-radius': '25px'
      });
      $(img).addClass(randomClass);
      $('.cat').append(img);
      $(`.${randomClass}`).fadeOut(20000, function() {
        $(this).remove();
      });
    },
    keyPressed: function(event) {
      if (event.type === 'keydown' ||
        (event.type === 'touchstart' && event.touches.length > 1)
      ) {
        if (this.catUrl[this.catUrl.length - 1] === 'a') {
          var catUrl = this.catUrl.substring(0, [this.catUrl.length - 1]) + 'b';
        } else {
          var catUrl = this.catUrl + 'a';
        }
        this.catUrl = catUrl;
      }
    },
    makeid: function() {
      var text = '';
      var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  }
};
</script>

<style>
.cat {
  background-size: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.totally {
  object-fit: cover;
}
</style>
