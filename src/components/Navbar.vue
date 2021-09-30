<template>
  <div class="fe-navbar fe-flex-between fe-align-center">
    <h1 class="fe-flex fe-align-center">
      <span class="fe-logo"></span>
      <span>移动网络智能业务支撑系统</span>
    </h1>
    <!-- <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-submenu v-for="item in menus" :key="item.path" :index="item.path">
        <template slot="title">{{ item.meta.title }}</template>
        <el-menu-item v-for="menu in item.children" :key="menu.path" :index="menu.name">{{ menu.meta.title }}</el-menu-item>
      </el-submenu>
    </el-menu>-->
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <template v-for="item in menus">
        <el-submenu v-if="item.children && !item.meta.hideSubMenu" :key="item.path" :index="item.path">
          <template slot="title">{{ item.meta.title }}</template>
          <menu-list :menulist="item.children"></menu-list>
        </el-submenu>
        <el-menu-item v-else :key="item.name" :index="item.name">{{ item.meta.title }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import routes from '@/router/routes.js'
export default {
  name: 'Navbar',
  components: {
    MenuList
  },
  data () {
    return {
      activeIndex: '',
      menus: []
    }
  },
  created () {
    this.activeIndex = this.$route.name
    this.menus = routes.filter(r => r.path != '/' && r.children)
  },
  methods: {
    handleSelect (index) {
      if (index !== this.activeIndex) {
        this.activeIndex = index
        this.$router.push({ name: index })
      }
    }
  }
}
</script>
