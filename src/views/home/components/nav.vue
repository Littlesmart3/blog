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
        <!-- <el-dropdown v-for="(item, key) of menu_list" :key="key">
          <span class="el-dropdown-link">
            <span>{{ item.name }}</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu class="nav-item">
              <el-dropdown-item v-for="(element, index) of item.children" :key="index" @click="dropdownMenuClick(element.value)">{{ element.label }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import BackGround from '@/components/background.vue';
interface MustList {
  id: number;
  name: string;
  children: {
    value: number;
    label: string;
  }[];
}
[];

export default defineComponent({
  name: 'home',
  components: { BackGround },
  setup() {
    const menu_list: Array<MustList> = [
      {
        id: 1,
        name: '菜单1',
        children: [
          { value: 1, label: '选项1' },
          { value: 2, label: '选项2' },
          { value: 3, label: '选项3' },
          { value: 4, label: '选项4' },
          { value: 5, label: '选项5' }
        ]
      },
      {
        id: 2,
        name: '菜单2',
        children: [
          { value: 1, label: '选项1' },
          { value: 2, label: '选项2' },
          { value: 3, label: '选项3' },
          { value: 4, label: '选项4' },
          { value: 5, label: '选项5' }
        ]
      },
      {
        id: 3,
        name: '菜单3',
        children: [
          { value: 1, label: '选项1' },
          { value: 2, label: '选项2' },
          { value: 3, label: '选项3' },
          { value: 4, label: '选项4' },
          { value: 5, label: '选项5' }
        ]
      },
      {
        id: 4,
        name: '菜单4',
        children: [
          { value: 1, label: '选项1' },
          { value: 2, label: '选项2' },
          { value: 3, label: '选项3' },
          { value: 4, label: '选项4' },
          { value: 5, label: '选项5' }
        ]
      }
    ];
    // const logo = 'https://tva1.sinaimg.cn/large/008i3skNly1gwgajgurtkj30iq03wq30.jpg';
    const logo = 'https://tva1.sinaimg.cn/large/008i3skNly1gwgazhdyxdj30jq04wglr.jpg';
    const state = reactive({
      menu_list
    });
    // 导航栏点击
    const dropdownMenuClick = (val: number) => {
      console.log(val);
    };
    const methods = {
      dropdownMenuClick
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
}
</style>
<style lang="scss">
.home-component-nav {
  .nav-item {
    .el-dropdown {
      color: #fff;
    }
  }
}
</style>
