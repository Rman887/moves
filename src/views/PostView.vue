<template>
  <div>
    <table class="PostTable">
      <tr v-for="post in posts">
        <PostItem :key="post.id" :post="post" />
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import PostItem from '@/components/PostItem.vue'

import Post from '@/models/Post.js'

export default {
  name: 'PostView',
  components: {
    PostItem
  },

  data () {
      return {
        posts: [new Post(1, "Title", "content", true, "123 street"),
                new Post(2, "kjasdhf", "dick", false, "ayy lmao")
        ]
      }
  }
}
</script>

<style>
  .PostTable {
    margin-left: 1em;
  }
</style>
