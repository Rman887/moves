<template>
  <div>
    <h1><b>Register</b></h1>
    <form v-on:submit.prevent="submitRegistration">
      <input type="text" placeholder="Username" name="uname" v-model="usernameText">
      <br>
      <input type="text" placeholder="Email" name="email" v-model="emailText">
      <br>
      <input type="password" placeholder="Password" name="psw" v-model="passwordText">
      <br>
      <input type="password" placeholder="Confirm Password" name="confpsw" v-model="confPasswordText">
      <br>
      <input type="submit" value="Register">
    </form>
  </div>
</template>

<script>
import Globals from '@/models/globals.js'
import axios from 'axios'
export default {
  name: 'registration',
  components: {
  },

  data () {
    return {
      usernameText: '',
      emailText: '',
      passwordText: '',
      confPasswordText: '',
      response: ''
    }
  },

  methods: {
    submitRegistration: function (elements) {
      var submission = {
        'username': this.usernameText,
        'email': this.emailText,
        'password': this.passwordText,
        'confirm_password': this.confPasswordText
      }
      axios
        .post('http://35.243.232.143/user/register/', {
          data: JSON.stringify(submission),
          crossDomain: true
        })
        .then(response => {
          this.response = response.data
          Globals.registered = true
          this.$router.push('login')
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
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
    background-color: lightsalmon;
    color: white;
  }

  input[type='submit']:hover {
    background-color: darksalmon;
  }
</style>
