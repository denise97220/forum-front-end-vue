import { apiHelper } from './../utils/helper'

export default {
  signIn({ email, password }) {
    // return 一個 Promise
    return apiHelper.post("/signin", {
      email,
      password,
    })
  },
};