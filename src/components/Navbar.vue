<template>

<div class="parent">
  <a href="/" id="logo"></a>   
  <div class="navbar">
    <audio ref="audio" :src="'/static/meow.mp3'"></audio>
    <div class="menu row wrapper">
      <ul>
        <li v-bind:active="currentTab === 'Me'" v-on:active="currentTab = 'Me'" class="first nav-item">
          <a href="#/">Me</a>
        </li>
        <li v-on:click="play()" v-bind:active="currentTab === 'Cats'" v-on:active="currentTab = 'Cats'" class="col nav-item">
            <a href="#/meow">Meow</a>
        </li>
        <li class="col nav-item">
            <a href="#/blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    isMe() {
      return this.$store.state.currentTab === 'Home';
    },
    isCats() {
      return this.$store.state.currentTab === 'Cats';
    },
    play() {
      const soundfile = `/static/meow.mp3`;
      var obj = document.createElement('audio');
      obj.setAttribute('src', soundfile);
      obj.play();
      obj.parentNode.removeChild(obj);
    }
  }
};
</script>

<style>
.navbar-wrapper {
  background: -moz-linear-gradient(
    bottom,
    #dcdcdc 0%,
    rgba(125, 185, 232, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    bottom,
    #dcdcdc 0%,
    rgba(125, 185, 232, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to top,
    #dcdcdc 0%,
    rgba(125, 185, 232, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.navbar-nav {
  width: 12vw;
}

.fake {
    width: 90%
}

.nav-item {
  font-family: "Norwester";
  font-size: 1.5vw;
  box-sizing: border-box;
  cursor: pointer;
  color: #83774a;
  padding: 5px 10px;
  margin: 25px;
  flex: 1;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

@media screen and (max-width: 1024px) {
.nav-item {
  font-family: "Norwester";
  font-size: 20px;
  }


}

@media screen and (max-width: 950px) {
 .nav-item {
  font-family: "Norwester";
  font-size: 5vw;
  }

}


@media screen and (max-width: 650px) {
 .nav-item {
  font-family: "Norwester";
  font-size: 6vw;
  padding-left: 2vw;
  }

  .first {
      padding-left: 2vw;
  }


}

.fixed-nav {
    padding: 25px;
    overflow: hidden;

}

#logo {
  background: url("../../static/logo2.png") no-repeat center;
  top: 30px;
  left: 30px;
  width: 13vw;
  height: 13vw;
  background-size: cover;
  position: fixed;
  border-radius: 80%;
  cursor: pointer;
  box-shadow: 0 0 30px #dcdcdc;
  z-index: 100000000;
  opacity:1;
}

@media screen and (max-width: 480px) {
    #logo {
        border-radius: 0;
        height: 18vw;
        width: 20%;
        top: 0;
        left: 0;
    }
}

.flex {
    align-items: center;
}

a {
  color: #d35540 !important;
}

@font-face {
  font-family: "Norwester";
  src: url("/fonts/norwester/webfonts/norwester.eot");
  src: 
  url("/fonts/norwester/webfonts/norwester.woff") format("woff"),
  url("/fonts/norwester/norwester.otf") format("opentype"),
  url("/fonts/norwester/webfonts/norwester.svg#filename") format("svg");
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* Remove formatting from links*/

a {
  color: inherit;
  text-decoration: none;
}
/* Set a max width to the content*/

.wrapper {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /*height: 100vh;  */
}
.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
.parent {
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  z-index: 100;
}
.navbar {
  display: flex;
  justify-content: space-between;
  background-color:  #dcdcdc;;
  padding-top: 0;
  padding-bottom: 0;
  opacity: .92;
  /*   */
}
.logo {
  padding: 20px;
}
.menu {
  display: flex;
  align-items: center;
}
.menu ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
}
.menu li {
  padding: 1vw 0;
  margin: 0 10vw;
  font-weight: bold;
}


@media screen and (max-width: 480px) {
 .menu li {
    font-size: 5vw;
    margin: 3vw 5vw 3vw 5vw;
  }

  .first {
    padding-left: 5vw;
  }

  .wrapper {
    margin-right: 0;
  }

  .navbar {
    height: 18vw;
  }
}





</style>
