<template>
  <div>
  <div class="home">
    <div v-if="loggedIn">
      Welcome, {{user}}!
      <br>
      <router-link to="/create">Create Post</router-link>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Globals from '@/models/globals.js'

export default {
  name: 'home',
  computed: {
    loggedIn: function () {
      return Globals.loggedIn
    },
    user: function () {
      return localStorage.user
    }
  }
}
</script>
