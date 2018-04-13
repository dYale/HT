<template>
<nav class="row flex" data-toggle="affix">
                    <a  href="#/" id="logo"></a>
                <div class=" nav-item">
                    </div>
                <div v-bind:active="currentTab === 'Me'" v-on:active="currentTab = 'Me'" class="p-2 nav-item">
                    <a class="nav-link" href="#/">Me</a>
                </div>
                <div v-bind:active="currentTab === 'Cats'" v-on:active="currentTab = 'Cats'" class="p-2 nav-item">
                    <a class="nav-link" href="#/meow">Cat Mode</a>
                </div>
                <div class="p-2 nav-item">
                    <a class="nav-link" href="#">Challenge Me</a>
                </div>
                <div class="p-2 nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </div>
</nav>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    isMe() {
        return this.$store.state.currentTab === "Home"
    },
    isCats() {
        return this.$store.state.currentTab === "Cats"
    }
  }
}
</script>

<style>

.navbar-wrapper {
    background: -moz-linear-gradient(bottom, #dcdcdc 0%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(bottom, #dcdcdc 0%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to top, #dcdcdc 0%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.navbar-nav {
    width: 12vw;
}

.nav-item {
    font-family: "Norwester";
    font-size: 50px;
    box-sizing: border-box;
    cursor: pointer;
    color: #83774a;
    flex: 1;
}

#logo {
    
    background: url('../../static/logo2.png') no-repeat;
    top: 30px;
    left: 30px;
    width: 400px;
    height: 400px;
    background-size:cover;
    position: absolute;
    border-radius: 80%;
    cursor: pointer;
}

.flex {
    display:flex;
      align-items: center;
}

    
</style>
