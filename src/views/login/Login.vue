<template>
  <div id="login-container">
    <div class="login-header">
      知新点点
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="user">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <!-- <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
  // import axios from 'axios'
  export default {
    name: "login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'));
      } else {
        if (this.ruleForm.pass !== '') {
          this.$refs.ruleForm.validateField('pass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: '',
        pass: '',
      },
      rules: {
        user: [
          { validator: validatePass, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ]
      },
      isLogin:false
    };
  },
  methods: {
    submitForm(formName) {

      this.$message.success("登录成功!!!");
      this.$router.push({path: "/"});
    },
    /* resetForm(formName) {
      this.$refs[formName].resetFields();
    } */
  }
  }
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
  }
  #login-container{
    width: 400px;
    height: 300px;
    background: rgba(255,255,255,.3);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -220px;
    margin-top: -170px;
    border-radius: 5px;
    padding-top: 40px;
    padding-right: 40px;
  }
  .login-header{
    height: 50px;
    text-align: center;
    /* color: #fff; */
    font-size: 20px;
  }
  .login-btn{
    width: 100%;
  }
  .login-tips{
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  .login-tips li:first-child{
    /* text-align: left; */
    margin-left: -40px;
  }
  .login-tips li a{
    color: #000;
    text-decoration: none;
  }
</style>
