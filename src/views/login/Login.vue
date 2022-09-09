<template>
  <div id="login-container">
    <div class="login-header">
      知新点点
    </div>
    <el-form :model="loginForm" status-icon :rules="loginFormRules" ref="loginFormRef" label-width="0px"
      class="login_form">
      <!-- 账号 -->
      <el-form-item prop="username">
        <!-- v-model:双向绑定数据 -->
        <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
      </el-form-item>
      <!-- <el-form-item label="验证码">
        <el-input type="text" autocomplete="off"></el-input><img src="" alt="">
      </el-form-item> -->
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form-item>

      <el-form-item>
        <ul class="login-tips">
          <li><a href="javascript:;">忘记密码</a></li>
          <li><a href="javascript:;">新生注册</a></li>
        </ul>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    // 登录
    login() {
      // 在请求前对用户的数据进行验证
      this.$refs.loginFormRef.validate( valid => {
        // console.log(valid);   //判断数据是否符合格式
        if (!valid) return;  //如果valid=false 不发起请求
        this.$http.post('/doLogin?username='+this.loginForm.username+'&password='+this.loginForm.password).then(res=>{
          console.log(res);
        })
        
        /* const data=this.$http.post('/doLogin',this.loginForm)
        console.log(data); */
        // console.log(res); 通过解构赋值的方式拿到promise对象中的具体数据
        /* if (res.meta.status !== 200) {
          return this.$message.error('登录失败');
        }
        this.$message.success('登录成功')
        console.log(res);
        // 将登录成功之后的token，保存到客户端的sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 跳转到后台主页，路由地址是/home
        this.$router.push('/home') */
      })
    },

  }

}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

#login-container {
  width: 400px;
  height: 300px;
  background: rgba(255, 255, 255, .3);
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -170px;
  border-radius: 5px;
  padding-top: 40px;
  padding-right: 40px;
}

.login_form {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.login-header {
  height: 50px;
  text-align: center;
  /* color: #fff; */
  font-size: 20px;
}

.login-btn {
  width: 100%;
}

.login-tips {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.login-tips li:first-child {
  /* text-align: left; */
  margin-left: -40px;
}

.login-tips li a {
  color: #000;
  text-decoration: none;
}
</style>
