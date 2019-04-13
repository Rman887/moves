<template>
  <div>
    <table>
      <TipItem title = "HI" content = "lmao" location = "D" is_question="true"/>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import TipItem from '@/components/TipItem.vue'

export default {
  name: 'Tips',
  components: {
    TipItem
  }
}
</script>
