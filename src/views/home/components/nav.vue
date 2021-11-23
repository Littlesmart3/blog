<template>
  <div class="home-component-nav">
    <div class="row-between nav">
      <div>
        <span class="el-dropdown-link">
          <div class="block">
            <el-image :src="logo">
              <template #placeholder>
                <div class="image-slot">Loading<span class="dot">...</span></div>
              </template>
            </el-image>
          </div>
        </span>
      </div>
      <div class="nav-item">
        <el-menu :default-active="activeIndex" class="el-menu-demo row-end" mode="horizontal" @select="navSelect">
          <component v-for="(item, index) in menu_list" :is="item.children && item.children.length > 0 ? 'el-sub-menu' : 'el-menu-item'" :key="index" :index="item.value">
            <template #title>{{ item.label }} </template>
            <template v-if="item.children && item.children.length > 0">
              <el-menu-item v-for="(v, i) in item.children" :key="i" :index="v.value">
                <span slot="title">{{ v.label }}</span>
              </el-menu-item>
            </template>
          </component>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import BackGround from '@/components/background.vue';
import Logo from '@/assets/img/logo.jpg';
interface MustList {
  value: number | string;
  label: string;
  children?: {
    value: number | string;
    label: string;
  }[];
}
[];

export default defineComponent({
  name: 'home',
  components: { BackGround },
  setup() {
    const activeIndex = ref<any>();
    const menu_list: Array<MustList> = [
      {
        value: '1',
        label: '首页'
      },
      {
        value: '2',
        label: '资源',
        children: [
          { value: '4', label: '后台管理系统' },
          { value: '5', label: '笔记' },
          { value: '6', label: '工作' }
        ]
      },
      {
        value: '3',
        label: '关于我'
      }
    ];
    // const logo = 'https://tva1.sinaimg.cn/large/008i3skNly1gwgajgurtkj30iq03wq30.jpg';
    const logo: any = Logo;
    const state = reactive({
      menu_list
    });

    // 导航按钮
    const navSelect = () => {
      //
    };
    const methods = {
      activeIndex,
      navSelect
    };
    return { ...toRefs(state), ...methods, logo };
  }
});
</script>

<style lang="scss" scoped>
.home-component-nav {
  height: 100%;

  margin: 0 50px;
  .nav {
    height: 100%;
  }
  .block {
    width: 145px;
    height: 30px;
  }
  .nav-item {
    width: 100%;
    .el-menu {
      --el-menu-background-color: none;
      --el-menu-hover-background-color: none;
    }
    .el-menu--horizontal {
      border-bottom: none;
      .el-menu-item {
        color: #fff;
        &:hover {
          color: #409eff;
        }
        &:focus {
          background-color: unset;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.home-component-nav {
  .nav-item {
    color: #fff;
    .el-sub-menu .el-sub-menu__title {
      color: #fff;
      &:hover {
        color: #409eff;
        background-color: unset;
      }
    }
  }
}
</style>
