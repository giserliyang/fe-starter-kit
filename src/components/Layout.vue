<template>
  <div class="fe-page">
    <keep-alive>
      <router-view v-if="!$route.meta.disableCache" />
    </keep-alive>
    <router-view v-if="$route.meta.disableCache" />
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
