<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark">
          <el-tree :data="data" :default-expand-all="true" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </el-col>
      <el-col :span="20"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import api from '../api'

export default {
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created: function () {
    api.SummaryResource.get().then(response => {
      this.data = response.data.data
    }, response => {
      console.log('登录失败')
    })
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
