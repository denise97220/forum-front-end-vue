<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category.name
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="removeFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.stop.prevent="addToFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="unlike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="like(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from './../apis/user'
import { Toast } from './../utils/helper'

export default {
  name: 'RestaurantCard',
  data() {
    return {
      // 後續需要修改資料以使用加入最愛等功能，但因為 props 傳進來的資料無法修改，所以必須複製一份進 data 使用
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addToFavorite(restaurantId) {
      try {
        const { data } = await userAPI.addFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法喜歡，請稍候再試'
        })
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data } = await userAPI.deleteFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍候再試'
        })
      }
    },
    async like(restaurantId) {
      try {
        const { data } = await userAPI.like({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍候再試'
        })
      }
    },
    async unlike(restaurantId) {
      try {
        const { data } = await userAPI.unlike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除喜歡，請稍候再試'
        })
      }
    },
  },
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
};
</script>
