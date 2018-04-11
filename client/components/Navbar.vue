<template>
<nav class="navbar navbar-wrapper navbar-expand-sm navbar-light bg-light" data-toggle="affix">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <div class="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul class="navbar-nav">
                <li v-bind:active="currentTab === 'Me'" v-on:active="currentTab = 'Me'" class="p-2 nav-item">
                    <a class="nav-link" href="#/">Me</a>
                </li>
                <li v-bind:active="currentTab === 'Me'" v-on:active="currentTab = 'Cats'" class="p-2 nav-item">
                    <a class="nav-link" href="#/meow">Cat Mode</a>
                </li>
                <li class="p-2 nav-item">
                    <a class="nav-link" href="#">Challenge Me</a>
                </li>
                <li class="p-2 nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
            </ul>
        </div>
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
    background: -moz-linear-gradient(bottom, #9aa230 0%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(bottom, #9aa230 0%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to top, #9aa230 0%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

}

.nav-item {
    font-family: "Times New Roman", Times, serif;
    font-size: 50px;
    box-sizing: border-box;
    justify-content: center!important;
    cursor: pointer;
    color: #83774a;
}
    
</style>
