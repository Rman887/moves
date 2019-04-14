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
import Banner from '@/components/Banner.vue'
export default {
  name: 'registration',
  components: {
    Banner
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
    submitRegistration: function (elements) {
      console.log('REGISTERING!')
      localStorage.registered = true
      this.$router.push('login')
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
