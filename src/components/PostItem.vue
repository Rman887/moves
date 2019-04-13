<template>
    <td class="PostCell">
      <h2>{{post.title}}</h2>
      <p>{{post.content}}</p>
      <p>{{post.location}}</p>
      <p>{{post.is_question}}</p>
    </td>
</template>

<script>
export default {
  name: 'PostItem',
  props: ["post"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PostCell {
  background-color: #eeeeee;
}
</style>
