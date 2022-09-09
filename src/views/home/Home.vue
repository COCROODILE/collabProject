<template>
  <div class="home">
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    // 登录退出操作
    logout() {
      // 清空application中的token
      window.sessionStorage.clear()
      // 跳转到login页面
      this.$router.push('/doLogin')
    }
  }
}
</script>
