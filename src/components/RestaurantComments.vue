<template>
    <div>
        <h2 class="my-4">
        所有評論：
        </h2>

        <div v-for="comment in restaurantComments" :key="comment.id">
        <blockquote class="blockquote mb-0">
            <button
            type="button"
            class="btn btn-danger float-right"
            v-if="currentUser.isAdmin"
            @click.prevent.stop="handleDeleteBtn(comment.id)"
            >
            Delete
            </button>
            <h3>
            <router-link :to="{ name: 'user', params:{ id: comment.User.id } }">
                {{ comment.User.name }}
            </router-link>
            </h3>
            <p>{{ comment.text }}</p>
            <footer class="blockquote-footer">
            {{ comment.createdAt | fromNow }}
            </footer>
        </blockquote>
        <hr>
        </div>
    </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'

// 當前使用者的假資料
const dummyUser = {
  User: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  data() {
    return {
      currentUser: dummyUser.User
    }
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
  methods: {
    handleDeleteBtn(commentId) {
      this.$emit('delete-comment', commentId)
    }
  }
}
</script>