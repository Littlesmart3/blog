<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default {
  name: 'App'
};
</script>

<style lang="scss">
@import '@/assets/scss/font.css';
html,
body,
#app {
  margin: 0px;
  padding: 0px;
  height: 100%;
  font-family: roboto;
}
</style>
