<template>
  <div id="app">
    <navbar></navbar>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple-dark">
          <tree></tree>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-dark">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Tree from '../components/Tree'
import Doc from '../components/Doc'

export default {
  components: {
    'navbar': Navbar,
    'tree': Tree,
    'doc': Doc
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
