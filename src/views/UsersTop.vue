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
            @click.stop.prevent="unFollow(user)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button 
            v-else
            @click.stop.prevent="follow(user)" 
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

const users = [
  {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "password": "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
    "isAdmin": true,
    "image": null,
    "createdAt": "2021-05-17T05:11:05.000Z",
    "updatedAt": "2021-05-17T05:11:05.000Z",
    "Followers": [],
    "FollowerCount": 0,
    "isFollowed": false
  },
  {
    "id": 2,
    "name": "user1",
    "email": "user1@example.com",
    "password": "$2a$10$A0B7wDm/3dqFAxjH45sXW.2ASFMgKVGKU3DH6O5VpnGSG3Bd6Y9kq",
    "isAdmin": false,
    "image": null,
    "createdAt": "2021-05-17T05:11:05.000Z",
    "updatedAt": "2021-05-17T05:11:05.000Z",
    "Followers": [],
    "FollowerCount": 0,
    "isFollowed": false
  },
  {
    "id": 3,
    "name": "user2",
    "email": "user2@example.com",
    "password": "$2a$10$b7E1.cVoAcrTFooTp4tx4eFnxUxKizT8mVr26QYJGuhp4YbRnjB02",
    "isAdmin": false,
    "image": null,
    "createdAt": "2021-05-17T05:11:05.000Z",
    "updatedAt": "2021-05-17T05:11:05.000Z",
    "Followers": [],
    "FollowerCount": 0,
    "isFollowed": false
  }
]

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
      fetchUsers() {
        this.users = users
      },
      follow(user) {
        user.isFollowed = true
      },
      unFollow(user) {
        user.isFollowed = false
      }
    },
    created() {
      this.fetchUsers()
    }
}
</script>