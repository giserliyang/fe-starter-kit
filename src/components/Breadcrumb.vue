<template>
  <div class="fe-breadcrumb fe-align-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumbList"
        :key="item.path"
        @click.native="gotoPage(item.name)"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched
      const breadcrumbList = matched.filter(
        item =>
          item.meta &&
          item.meta.title &&
          item.meta.breadcrumb !== false &&
          !item.meta.redirect
      )
      const last = matched[matched.length - 1]
      if (last && last.meta.showParent) {
        const parentMeta = last.meta.parent
        breadcrumbList.splice(breadcrumbList.length - 1, 0, parentMeta)
      }
      this.breadcrumbList = [...breadcrumbList]
    },
    gotoPage(name) {
      this.$router.push({ name })
    }
  }
}
</script>
