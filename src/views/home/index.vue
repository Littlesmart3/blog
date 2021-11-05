<template>
  <div class="home">
    <BackGround />
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import BackGround from '../../components/background.vue'
import BackGround from '@/components/background.vue'

export default defineComponent({
  name: 'home',
  components: { BackGround },
  data() {
    return {
      msg: 'about 啦啦啦啦啦'
    }
  },
  setup() { }
})
</script>

<style lang="scss">
.home {
}
</style>