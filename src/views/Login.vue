<template>
    <div class='login'>
        <div class='container'>
            <img src="../assets/logo.png" alt="" class='avatar'>
       <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <!-- prop:指定当前表单元素所对应的校验规则 -->
        <el-form-item prop='username'>
          <el-input v-model="loginForm.username" prefix-icon="myicon myicon-user"></el-input>
        </el-form-item>
        <el-form-item  prop='password'>
          <el-input v-model="loginForm.password" type="password" prefix-icon="myicon myicon-key"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
</template>

<script>
import { login } from '@/api/index.js'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          login(this.loginForm).then((res) => {
            console.log(res)
            if (res.statusCode === 200) {
              this.$message({
                message: res.message,
                type: 'success'
              })
              localStorage.setItem('myname', res.message)
              localStorage.setItem('mytoken', res.data)
              this.$router.push({name: 'Home'})
            } else {
              this.$message({
                message: res.message,
                type: 'error'
              })
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login{
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: #2f4050;
   .container{
   position: absolute;
   left:0;
   right: 0;
   width: 40%;
   padding: 15px 40px ;
   margin: 200px auto;
   background-color: white;
   .avatar{
       position: relative;
       left: 40%;
       top: 0;
       width: 120px;
       height: 120px;
       box-sizing: border-box;
       border: 10px solid #fff;
       box-shadow: 0 1px 5px #ccc;
       overflow: hidden;
       border-radius: 50%;
   }
   }
   .login-btn{
       width: 100%;
   }
}
</style>
