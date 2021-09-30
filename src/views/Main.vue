<template>
  <div class="retina fe-flex-column">
    <div class="fe-header">
      <Navbar v-if="$config.SHOW_NAV"></Navbar>
      <Breadcrumb></Breadcrumb>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Main',
  components: {
    Navbar,
    Breadcrumb
  }
}
</script>

<style></style>
