<template>
  <div class="fe-page fe-flex-center">
    <div class="page-error">
      <img src="~@/assets/images/404.svg" width="300" alt="404" />
      <p>哎呀迷路了!</p>
      <div>可能的原因:</div>
      <ul>
        <li>原来的页面不存在了</li>
        <li>我们的服务器被外星人劫持了</li>
      </ul>
      <el-button @click="$router.push('/')" type="primary">返回首页</el-button>
    </div>
  </div>
</template>

<style lang="scss">
.page-error {
  color: #455a74;
  text-align: center;
  p {
    font-size: 20px;
    margin: 16px 0;
  }
  div {
    text-align: left;
  }
  ul {
    text-align: left;
    list-style: inherit;
    padding-left: 60px;
    margin-bottom: 20px;
  }
}
</style>
