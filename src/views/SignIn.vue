<template>
  <div class="container py-5">
    <form 
      class="w-100" 
      @submit.prevent.stop="handleSubmit"
    > 
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">
      Sign In
      </h1>
    </div>

    <div class="form-label-group mb-2">
      <label for="email">email</label>
      <input
      id="email"
      v-model="email"
      name="email"
      type="email"
      class="form-control"
      placeholder="email"
      autocomplete="username"
      required
      autofocus
      >
    </div>

    <div class="form-label-group mb-3">
      <label for="password">Password</label>
      <input
      id="password"
      v-model="password"
      name="password"
      type="password"
      class="form-control"
      placeholder="Password"
      autocomplete="current-password"
      required
      >
    </div>

    <button
      class="btn btn-lg btn-primary btn-block mb-3"
      type="submit"
      :disabled="isProcessing"
    >
      Submit
    </button>

    <div class="text-center mb-3">
      <p>
      <router-link to="/signup">
        Sign Up
      </router-link>
      </p>
    </div>

    <p class="mt-5 mb-3 text-muted text-center">
      &copy; 2017-2018
    </p>
    </form>
  </div>
</template>

<script>
import signInAPI from './../apis/signIn'
import { Toast } from './../utils/helper'
 
export default {
  data() {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    handleSubmit () {
      // 送出前先判斷是否填入帳號密碼
      if (!this.email || !this.password) {
        Toast.fire({
          icon: 'warning',
          title: '請填入帳號及密碼'
        })
        return
      }

      this.isProcessing = true
      
      signInAPI.signIn({
        email: this.email,
        password: this.password
      }).then(response => {
        // 取得 API 請求後的資料
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)
        this.$router.push('/restaurants')
      }).catch(error => {
        console.log(error)

        this.password = ''
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })

        this.isProcessing = false
      })
    } 
  }
}
</script>