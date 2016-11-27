<template>
  <div v-html="content"></div>
</template>

<script>
import api from '../api'
import { md2HTML } from '../utils/markdown.js'

export default {
  data () {
    return {
      content: ''
    }
  },
  watch: {
    '$route': 'getDocument'
  },
  methods: {
    getDocument () {
      let group = this.$route.params.group
      let path = this.$route.params.path
      api.DocumentResource.get({'group': group, 'path': path}).then(response => {
        this.content = md2HTML(response.data.data.content)
      }, response => {
        console.log('读取文档失败')
      })
    }
  }
}
</script>
