<template>
  <div class="home-component-nav">
    <div class="row-between nav">
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <span class="fs16 color-w">LEE</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="nav-item">
        <el-dropdown v-for="(item, key) of menu_list" :key="key">
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
        </el-dropdown>
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
    return { ...toRefs(state), ...methods };
  }
});
</script>

<style lang="scss" scoped>
.home-component-nav {
  height: 140px;
  width: 100%;
  .nav {
    height: 40px;
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
