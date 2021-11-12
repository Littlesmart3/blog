<template>
  <div class="background">
    <div class="video-bg">
      <div class="video-bg-mask"></div>
      <div class="video-bg-texture" id="grained_container" style="position: relative; overflow: hidden"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  setup() {}
});
</script>

<style lang="scss">
.background {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  color: #bbb;
  background: #101010;
  letter-spacing: 0;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  .video-bg {
    margin-left: -50vw;
    position: absolute !important;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    z-index: -1;
    .video-bg-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #101010;
      // opacity: 0.4;
      z-index: -2;
    }
    .video-bg-texture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
    }
    #grained_container::before {
      position: absolute;
      content: '';
      background-image: url(@/assets/img/background.png);
      height: 300%;
      width: 300%;
      left: -100%;
      top: -100%;
      animation-name: grained;
      animation-iteration-count: infinite;
      animation-duration: 0.5s;
      animation-timing-function: steps(20);
    }
    @keyframes grained {
      from {
        background-position: 0 0;
      }
      to {
        background-position: 100% 100%;
      }
    }
  }
}
</style>
