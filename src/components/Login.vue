<template>
  <el-form :model="formLogin" label-position="left" label-width="80px">
    <el-form-item label="邮箱">
      <el-input v-model="formLogin.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLogin.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin(formLogin)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import api from '../api/index.js'
import { set } from '../utils/auth.js'

export default {
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin (data) {
      api.AuthResource.save(data).then(response => {
        if (!response.ok) {
          console.log('登录失败')
        }
        const token = response.data.data.token
        set('token', token)
        window.location.pathname = '/'
      }, response => {
        console.log('登录失败')
      })
    }
  }
}
</script>
