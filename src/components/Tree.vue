<template>
  <el-tree :data="data" :default-expand-all="true" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
import api from '../api'

export default {
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label',
        path: 'path'
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
      if (typeof data.children === 'undefined') {
        this.$router.push({ name: 'doc', params: { group: data.group, path: data.path } })
      }
    }
  }
}
</script>
