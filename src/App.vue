<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/view">View</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/registration">Register</router-link>
      <div v-if="loggedIn">Log out</div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Globals from '@/models/globals.js'
export default {
  name: 'app',
  computed: {
    loggedIn: function () {
      if (localStorage.token !== null || localStorage !== undefined) {
        Globals.loggedIn = true
      } else {
        Globals.loggedIn = false
      }
      return Globals.loggedIn
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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


