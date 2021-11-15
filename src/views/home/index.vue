<template>
  <div class="home h100">
    <BackGround />
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>
      <el-main>
        <!-- <el-button type="primary" size="small" @click="btn">按钮1</el-button> -->
      </el-main>
      <el-footer>
        <div class="footer row-between h100 fs14">
          <span>{{ record.copyright }}</span>
          <span>
            <a class="beian" :href="record.url">{{ record.icp }}</a>
          </span>
        </div>
      </el-footer>
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
      msg: '芜湖起飞呀～'
    };
  },
  setup() {
    const btn = () => {
      console.log(123);
    };
    const record = {
      copyright: '版权所有 © 2021 - 2022 Littlesmart3 保留所有权利。',
      icp: '浙ICP备2021034302号',
      url: 'https://beian.miit.gov.cn'
    };
    return { btn, record };
  }
});
</script>

<style lang="scss">
.home {
  .el-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    text-align: center;
    // line-height: 60px;
  }
  .el-main {
    text-align: center;
  }
  .el-menu {
  }
  .footer {
    color: #fff;
    margin: 0 100px;
    .beian {
      text-decoration: none;
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
