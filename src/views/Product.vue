<template>
    <div class='home'>
     <el-breadcrumb separator="/">
      <el-breadcrumb-item >首页</el-breadcrumb-item>
      <el-breadcrumb-item>工作台</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 按钮 -->
     <div class='status'>
              <el-button type="success" plain @click='openBox'>打开箱子</el-button>
        </div>
        <!-- // 显示的表格 -->
        <template>
  <el-table
    :data="boxTableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column label="配送信息">
      <el-table-column
        prop="manufacturerId"
        label="制造商id"
        width="120">
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column
          prop="transferBoxCode"
          label="当前盒子识别码"
          width="120">
        </el-table-column>
        <el-table-column
          prop="transferBoxCodeImg"
          label="当前盒子二维码"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
   <el-table
    :data="productTableData"
    style="width: 100%">
    <el-table-column
      prop="productionDate"
      label="生产时间"
      width="150">
    </el-table-column>
    <el-table-column label="配送信息">
      <el-table-column
        prop="manufacturerId"
        label="制造商id"
        width="120">
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column
          prop="producerId"
          label="员工id"
          width="120">
        </el-table-column>
        <el-table-column
          prop="serializedNumber"
          label="序列号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="code"
          label="芯片识别码"
          width="300">
        </el-table-column>
        <el-table-column
          prop="codeImg"
          label="芯片二维码"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
    </div>
</template>

<script>
import {openIndexBox} from '@/api/index.js'
export default {
  data () {
    return {
      boxTableData: [],
      productTableData: []
    }
  },
  methods: {
    openBox () {
      openIndexBox().then((res) => {
        console.log(res)
        this.tableData = res.data.transferBox
        this.productTableData = res.data.productList
      })
    }
  }
}
</script>

<style lang='scss' scoped>
 .home{
.el-table{
    margin-top: 20px;
}
 }
</style>
