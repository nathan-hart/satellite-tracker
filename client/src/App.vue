<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9e9e9;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  margin: 0px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e9e9e9;

    &.router-link-exact-active {
      color: #88ccfa;
    }
  }
}
</style>
