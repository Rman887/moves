<template>
  <tr>
      <td>
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <p>{{location}}</p>
        <p>{{is_question}}</p>
      </td>
  </tr>
</template>

<script>
export default {
  name: 'TipItem',
  props: {
    title: String,
    content: String,
    is_question: Boolean,
    location: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
