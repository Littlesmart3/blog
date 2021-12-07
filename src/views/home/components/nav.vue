<template>
  <div class="home-component-nav" :class="{ 'margin-lr50': is_phone }">
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
        <el-menu :default-active="activeIndex" class="el-menu-demo row-end" mode="horizontal">
          <component
            v-for="item in menu_list"
            :is="item.children && item.children.length > 0 ? 'el-sub-menu' : 'el-menu-item'"
            :key="item.id.toString()"
            :index="item.id.toString()"
            @click="navSelect(item)"
          >
            <template #title>{{ item.label }} </template>
            <template v-if="item.children && item.children.length > 0">
              <el-menu-item v-for="v in item.children" :key="v.id.toString()" :index="v.id.toString()" @click="navSelect(v)">
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
import { defineComponent, reactive, toRefs, ref, onBeforeMount } from 'vue';
import { HomeAPI } from '@/api/home';
import { getTreeList } from '@/utils/tools';
import BackGround from '@/components/background.vue';
import Logo from '@/assets/img/logo.jpg';
import { ElMessage } from 'element-plus/lib';

interface MustList {
  id: number | string;
  label: string;
  children?: {
    id: number | string;
    label: string;
  }[];
}

export default defineComponent({
  name: 'home',
  components: { BackGround },
  props: {
    is_phone: { type: Boolean, default: false }
  },
  setup() {
    const activeIndex = ref<any>();

    // logo
    const logo: any = Logo;
    const state = reactive({
      menu_list: [] as Array<MustList>
    });
    // 获取导航列表
    const getNavList = async () => {
      const { message, status } = await HomeAPI.navList();
      if (status !== 200) return ElMessage.error('导航列表获取失败！');
      state.menu_list = getTreeList(message, 'parent_id');
    };
    // 导航按钮
    const navSelect = (item) => {
      if (item.children && item.children.length > 0) return;
      else if (item.path.includes('http')) window.location.href = item.path;
      else console.log(item.path);
    };
    const methods = {
      activeIndex,
      navSelect
    };
    onBeforeMount(() => {
      getNavList();
    });
    return { ...toRefs(state), ...methods, logo };
  }
});
</script>

<style lang="scss" scoped>
.home-component-nav {
  height: 100%;
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
      --el-menu-bg-color: none;
      --el-menu-hover-bg-color: none;
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
