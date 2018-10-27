<template>
    <div class='home'>
<el-container>
  <el-header>
          <span class="system-title">超体密码后台管理系统</span>
          <div>
            <span class="welcome">你好:{{user}}</span>
            <el-button type="text" @click='loginout'>退出</el-button>
          </div>
  </el-header>
  <el-container>
    <el-aside >
         <el-col>
    <el-menu
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='true'>
        <el-menu-item index="product">工作台</el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main>
        <router-view></router-view>
        </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    this.user = localStorage.getItem('myname')
  },
  methods: {
    // 退出
    loginout () {
      localStorage.removeItem('mytoken')
      this.$router.push({ name: 'Login' })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang='scss' scoped>
 .home{
  .el-container{
   .el-header{
       display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#545c64;
    .system-title{
        font-size: 30px;
    }
   }
   .container{
 .el-aside{
    height: 200px;
    width: 100px;
    background-color:#545c64 ;
    .el-menu{
      height: 100%;
      background-color: #545c64;
    }
  }
  .el-main{
    height: 100%;
    }
   }
  }
 }
</style>
