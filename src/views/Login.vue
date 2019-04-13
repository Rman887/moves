<template>
  <div>
    <h1><b>Login</b></h1>
    <input type="text" placeholder="Username" name="uname" v-model="usernameText">
    <br>
    <input type="password" placeholder="Password" name="psw" v-model="passwordText">

    <button v-on:click="submitLogin">Login</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  components: {
  },

  data () {
    return {
      usernameText: '',
      passwordText: ''
    }
  },

  methods: {
    submitLogin: function (event) {
      console.log('SUBMITTED!')
    }
  }
}
</script>

<style>
  button{

  }
</style>
