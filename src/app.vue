<template>
  <div id="app">

    <div class="uk-card uk-card-secondary">
        <img class="uk-align-left" style="width:30px; height:30px" src="./assets/images/VueJs.png">
          <span class="uk-text-large uk-text-default">VueJs App</span>
        <img class="uk-align-right" style="width:30px; height:30px" src="./assets/images/VueJs.png">

    </div>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>