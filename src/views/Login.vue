<template>
  <div>
    <h1><b>Login</b></h1>
    <form v-on:submit.prevent="submitLogin">
      <input type="text" placeholder="Username" name="uname" v-model="usernameText">
      <br>
      <input type="password" placeholder="Password" name="psw" v-model="passwordText">
      <br>
      <input type="submit" text="Login">
    </form>
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
  h1 {
    margin-bottom: 20px;
  }

  input[type='text'], input[type='password'] {
    padding: 10px;
  }

  input {
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid grey;
    outline: none;
    width: 250px;
    height: 45px;
  }

  input[type='submit'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    transition: 0.2s ease;
    background-color: grey;
    color: white;
  }

  input[type='submit']:hover {
    background-color: red;
  }
</style>
