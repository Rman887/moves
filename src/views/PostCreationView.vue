<template>
  <div v-if="loggedIn">
    <form v-on:submit.prevent="submitPost">
      <input type="text" placeholder="Title" v-model="titleText">
      <br>
      <input type="text" class="bodyText" placeholder="Enter text" v-model="contentsText">
      <br>
      <input type="text" placeholder="Location (optional)" v-model="locationText">
      <br>
      <input type="radio" name="postType" value="Post" v-model="questionRadioText">Post
      <input type="radio" name="postType" value="Question" checked="checked" v-model="questionRadioText">Question<br>
      <input type="submit" value="Post">
    </form>
  </div>
</template>
<script>
import Globals from '@/models/globals.js'
import axios from 'axios'
export default {
  name: 'postcreation',
  data () {
    return {
      titleText: '',
      contentsText: '',
      locationText: '',
      questionRadioText: 'Question',
      response: ''
    }
  },
  computed: {
    questionBool: function () {
      return this.questionRadioText === 'Question'
    },
    loggedIn: function () {
      return Globals.loggedIn
    }
  },
  methods: {
    submitPost: function () {
      console.log('Created!')
      var submission = {
        'title': this.titleText,
        'contents': this.contentsText,
        'location': this.locationText,
        'is_question': this.questionBool
      }
      var headers = {
        'Authorization': 'Token ' + localStorage.getItem('token')
      }
      axios
        .post('http://35.243.232.143/post/create/', {
          data: JSON.stringify(submission),
          crossDomain: true

        }, { headers: headers })
        .then(response => {
          this.response = response.data
          Globals.registered = true
          this.$router.push('/')
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

  input[type='text'], input[type='password'], input[type='submit'] {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid grey;
    outline: none;
    width: 250px;
    height: 45px;
  }

  input[type='radio'] {

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
