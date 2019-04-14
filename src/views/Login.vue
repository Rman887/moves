<template>
  <div>
    <Banner v-if="registered" content="Account successfully created!"></Banner>
    <h1><b>Login</b></h1>
    <form v-on:submit.prevent="submitLogin">
      <input type="text" placeholder="Username" name="uname" v-model="usernameText">
      <br>
      <input type="password" placeholder="Password" name="psw" v-model="passwordText">
      <br>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Globals from '@/models/globals.js'
import axios from 'axios'
export default {
  name: 'login',
  components: {
    Banner
  },

  data () {
    return {
      usernameText: '',
      passwordText: '',
      response: ''
    }
  },
  methods: {
    submitLogin: function (event) {
      var submission = {
        'username': this.usernameText,
        'password': this.passwordText
      }

      axios
        .post('http://35.243.232.143/user/login/', {
          data: JSON.stringify(submission),
          crossDomain: true
        }).then(response => {
          this.response = response
          localStorage.setItem('token', response.data.token)
          localStorage.user = this.usernameText
          Globals.loggedIn = true
          this.$router.push('/')
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  computed: {
    registered: function () {
      return Globals.registered
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
