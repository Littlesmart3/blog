<template>
  <div class="home h100">
    <BackGround />
    <el-container>
      <el-header>
        <Nav :is_phone="monitor_width"></Nav>
      </el-header>
      <el-main>
        <span class="row-center h80 fs100">oh my god！</span>
        <!-- <el-button type="primary" size="small" @click="btn">按钮</el-button> -->
      </el-main>
      <el-footer>
        <div class="footer h100 fs14" :class="{ 'row-between': monitor_width, 'margin-lr100': monitor_width }">
          <span>{{ record.copyright }}</span>
          <br v-if="!monitor_width" />
          <span>
            <a class="beian" :href="record.url">{{ record.icp }}</a>
          </span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import BackGround from '@/components/background.vue';
import Nav from '@/views/home/components/nav.vue';
import { HomeAPI } from '@/api/home/home';
import { RECORD } from '@/assets/base_info';

export default defineComponent({
  name: 'home',
  components: { BackGround, Nav },
  data() {
    return {
      msg: '芜湖起飞呀～'
    };
  },
  setup() {
    // 网站备案信息
    const record = RECORD;
    const state = reactive({
      monitor_width: true
    });
    const btn = () => {
      getNavList();
    };

    // 导航栏
    const getNavList = async () => {
      const send_data = {};
      try {
        const { message } = await HomeAPI.navList(send_data);
      } catch (error) {
        console.log(error);
      }
    };
    const monitorWidth = () => {
      window.onresize = () => {
        state.monitor_width = document.documentElement.clientWidth < 750 ? false : true;
      };
    };
    onBeforeMount(() => {
      getNavList();
      monitorWidth();
    });
    return { ...toRefs(state), btn, record };
  }
});
</script>

<style lang="scss">
.home {
  color: #fff;
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
    .main-center {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .el-menu {
  }
  .footer {
    color: #fff;
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
