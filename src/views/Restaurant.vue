<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
      :restaurantComments="restaurantComments"
      @delete-comment="deleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurant-id="restaurant.id" 
      @create-comment="createComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment.vue'

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Keely Bogisich",
    "tel": "119.568.4472 x714",
    "address": "9991 Dorothy Canyon",
    "opening_hours": "08:00",
    "description": "Beatae et sit aut velit sed minus esse est est. Cupiditate quod ut impedit ipsa repudiandae dicta blanditiis dignissimos consequuntur. Illum minima explicabo animi nostrum recusandae voluptatum fugit. Sunt impedit praesentium atque. Itaque doloribus minima provident unde odit quod iste et.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.31238337743435",
    "viewCounts": 1,
    "createdAt": "2021-05-17T05:11:05.000Z",
    "updatedAt": "2021-05-22T09:12:06.352Z",
    "CategoryId": 4,
    "Category": {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2021-05-17T05:11:05.000Z",
      "updatedAt": "2021-05-17T05:11:05.000Z"
    },
    "FavoritedUsers": [
      {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
        "isAdmin": true,
        "image": null,
        "createdAt": "2021-05-17T05:11:05.000Z",
        "updatedAt": "2021-05-17T05:11:05.000Z",
        "Favorite": {
          "UserId": 1,
          "RestaurantId": 1,
          "createdAt": "2021-05-22T01:39:25.000Z",
          "updatedAt": "2021-05-22T01:39:25.000Z"
        }
      }
    ],
    "LikedUsers": [
      {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
        "isAdmin": true,
        "image": null,
        "createdAt": "2021-05-17T05:11:05.000Z",
        "updatedAt": "2021-05-17T05:11:05.000Z",
        "Like": {
          "UserId": 1,
          "RestaurantId": 1,
          "createdAt": "2021-05-22T01:39:33.000Z",
          "updatedAt": "2021-05-22T01:39:33.000Z"
        }
      }
    ],
    "Comments": [
      {
        "id": 1,
        "text": "Ex dolorem molestiae id sint.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2021-05-17T05:11:05.000Z",
        "updatedAt": "2021-05-17T05:11:05.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
          "isAdmin": true,
          "image": null,
          "createdAt": "2021-05-17T05:11:05.000Z",
          "updatedAt": "2021-05-17T05:11:05.000Z"
        }
      },
      {
        "id": 51,
        "text": "Exercitationem quis sunt quae repellendus.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2021-05-17T05:11:05.000Z",
        "updatedAt": "2021-05-17T05:11:05.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$A0B7wDm/3dqFAxjH45sXW.2ASFMgKVGKU3DH6O5VpnGSG3Bd6Y9kq",
          "isAdmin": false,
          "image": null,
          "createdAt": "2021-05-17T05:11:05.000Z",
          "updatedAt": "2021-05-17T05:11:05.000Z"
        }
      },
      {
        "id": 101,
        "text": "Eligendi et ut magni occaecati ipsum.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2021-05-17T05:11:05.000Z",
        "updatedAt": "2021-05-17T05:11:05.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$XaxJSOdUg2/931GxMxcJpOWAB1wmUbW5WUwM1GohFh0SyfUxHNYKG",
          "isAdmin": true,
          "image": null,
          "createdAt": "2021-05-17T05:11:05.000Z",
          "updatedAt": "2021-05-17T05:11:05.000Z"
        }
      }
    ]
  },
  "isFavorited": true,
  "isLiked": true
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'restaurant',
  components: {
      RestaurantDetail,
      RestaurantComments,
      CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        Category: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
    },
    methods: {
      fetchData(restaurantId) {
        console.log(restaurantId)
        const { restaurant, isFavorited, isLiked } = dummyData
        const {
          id,
          name,
          Category,
          image,
          openingHours,
          tel,
          address,
          description,
          Comments
        } = restaurant

        this.restaurant = {
          id,
          name,
          categoryName: Category? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        },
        this.restaurantComments = Comments
      },
      deleteComment(commentId) {
        this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
      },
      createComment(payload) {
        const { commentId, restaurantId, text } = payload
        this.restaurantComments.push({
          id: commentId,
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name
          },
          text,
          createdAt: new Date()
        })
      }
    },
    created() {
      const { id: restaurantId } = this.$route.params
      this.fetchData(restaurantId)
    }
}
</script>