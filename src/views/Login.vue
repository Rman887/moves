<template>
  <div>
    <h1>Login</h1>
    <label><b>Username: </b></label>
    <input type="text" name="uname" v-model="usernameText">

    <label><b>Password: </b></label>
    <input type="password" name="psw" v-model="passwordText">

    <h1> {{usernameText}} </h1>
    <h1> {{passwordText}} </h1>
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
