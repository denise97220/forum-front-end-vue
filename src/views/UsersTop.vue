<template>
  <div class="container py-5">
    <Navtabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button 
            v-if="user.isFollowed"
            @click.stop.prevent="unFollow(user.id)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button 
            v-else
            @click.stop.prevent="follow(user.id)" 
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navtabs from './../components/Navtabs'
import userAPI from './../apis/user'
import { Toast } from './../utils/helper'

export default {
    components: {
        Navtabs
    },
    data() {
      return {
        users: []
      }
    },
    methods: {
      async fetchUsers() {
        try {
          const { data } = await userAPI.getTopUsers()

          this.users = data.users.map(user => ({
            id: user.id,
            name: user.name,
            image: user.image,
            // 改名稱
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed
          }))

        } catch(error) {
          console.log(error)
          Toast.fire({
            icon: 'error',
            title: '無法獲取美食達人資料，請稍後再試'
          })
        }
      },
      async follow (userId) {
        try {
          const { data } = await userAPI.follow({ userId })

          console.log('data', data)

          if (data.status !== 'success') {
            throw new Error(data.message)
          }

          this.users = this.users.map(user => {
            if (user.id !== userId) {
              return user
            } else {
              return {
                ...user,
                followerCount: user.followerCount + 1,
                isFollowed: true
              }
            }
          })
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法追蹤，請稍後再試'
          })
        }
      },
      async unFollow (userId) {
        try {
          const { data } = await userAPI.unFollow({ userId })

          if (data.status !== 'success') {
            throw new Error(data.message)
          }

          this.users = this.users.map(user => {
            if (user.id !== userId) {
              return user
            } else {
              return {
                ...user,
                followerCount: user.followerCount - 1,
                isFollowed: false
              }
            }
          })
        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法取消追蹤，請稍後再試'
          })
        }
      }
    },
    created() {
      this.fetchUsers()
    }
}
</script>