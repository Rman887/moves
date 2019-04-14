<template>
  <div class="Banner" v-if="!seen" v-on:click="toggle">
    <h1> {{ content }}</h1>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    content: String
  },
  methods: {
    toggle: function () {
      this.seen = !this.seen
    }
  },
  data () {
    return {
      seen: true
    }
  }
}
</script>

<style scoped>
  .Banner{
    background-color: lightsalmon;
    opacity: .9;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    top: 0;
    width: 100vw;
  }
  .Banner h1{
    font-size: 20px;
    line-height: 40px;
  }
</style>
