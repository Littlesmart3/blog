<template>
  <img alt="Vue logo" src="../assets/logo.png"/>
  <h1>{{ msg }}</h1>
  <span>hahahahahaha</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'about 啦啦啦啦啦'
    }
  },
  setup() {}
})
</script>