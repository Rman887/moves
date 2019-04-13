<template>
  <div>
    <h1><b>Register</b></h1>

    <input type="text" placeholder="Username" name="uname" v-model="usernameText">
    <br>
    <input type="text" placeholder="Email" name="email" v-model="emailText">
    <br>
    <input type="password" placeholder="Password" name="psw" v-model="passwordText">
    <br>
    <input type="password" placeholder="Confirm Password" name="confpsw" v-model="confPasswordText">
    <br>
    <button v-on:click="submitRegistration">Register</button>
  </div>
</template>

<script>

export default {
  name: 'registration',
  components: {
  },

  data () {
    return {
      usernameText: '',
      emailText: '',
      passwordText: '',
      confPasswordText: ''
    }
  },

  methods: {
    submitRegistration: function (event) {
      console.log('REGISTERING!')
    }
  }
}
</script>
