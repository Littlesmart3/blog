<template>
  <div class="home h100">
    <BackGround />
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>
      <el-main>
        <el-button type="primary" size="small" @click="btn">按钮1</el-button>
        <el-button type="primary" size="small" @click="test">测试</el-button>
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
import { defineComponent, onBeforeMount } from 'vue';
import BackGround from '@/components/background.vue';
import Nav from '@/views/home/components/nav.vue';
import { HomeAPI } from '@/api/home/home';

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
      getNavList();
    };
    const record = {
      copyright: '版权所有 © 2021 - 2022 Littlesmart3 保留所有权利。',
      icp: '浙ICP备2021034302号',
      url: 'https://beian.miit.gov.cn'
    };
    const getNavList = async () => {
      const send_data = {};
      try {
        const { message } = await HomeAPI.navList(send_data);
      } catch (error) {
        console.log(error);
      }
    };
    const test = () => {
      const xmlHttp = new XMLHttpRequest();
      //改写成你自己的域名
      xmlHttp.open('get', 'https://www.littlesmart3.top/api/mysql');
      xmlHttp.setRequestHeader('Access-Control-Allow-Origin', 'https://www.littlesmart3.top');
      //注意这一句需要加，使其变为复杂请求
      xmlHttp.setRequestHeader('Content-Type', 'application/json');
      xmlHttp.send(
        JSON.stringify({
          hi: 'hi'
        })
      );
      xmlHttp.onreadystatechange = function () {
        // 啥也不用做
        if (this.status === 200) {
          console.log('上报成功');
        }
      };
    };
    // onBeforeMount(() => {
    //   getNavList;
    // });
    return { btn, record, test };
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
