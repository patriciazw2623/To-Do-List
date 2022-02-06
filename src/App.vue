<template>
  <div id="nav">
    <router-link to="/">Main Page</router-link> |
    <router-link to="/home">To-do List</router-link> |
    <router-link to="/about">About The Project</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 20px;
    color: hsla(0, 19%, 18%, 0.858);

    &.router-link-exact-active {
      color: #28a169;
    }
  }
}
</style>