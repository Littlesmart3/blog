<template>
  <div class="home">
    <BackGround />
    <el-container class="mian">
      <el-header>
        <Nav></Nav>
      </el-header>
      <el-main>
        <el-button type="primary" size="small" @click="btn">按钮</el-button>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackGround from '@/components/background.vue';
import Nav from '@/views/home/components/nav.vue';

export default defineComponent({
  name: 'home',
  components: { BackGround, Nav },
  data() {
    return {
      msg: 'about 啦啦啦啦啦'
    };
  },
  setup() {
    const btn = () => {
      console.log(123);
    };
    return { btn };
  }
});
</script>

<style lang="scss">
.home {
  .main {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
}
</style>
