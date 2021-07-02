<template>
  <div class="container py-5">
    <Navtabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoritedUsers.length }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show</router-link
            >

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addToFavorite(restaurant.id)"
              v-else
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navtabs from './../components/Navtabs.vue'
import restaurantsAPI from './../apis/restaurants'
import userAPI from './../apis/user'
import { Toast } from './../utils/helper'

export default {
  components: {
    Navtabs 
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await restaurantsAPI.getRestaurantsTop()
        this.restaurants = data.restaurants.map(restaurant => ({
          ...restaurant
        }))
      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法取得餐廳資料，請稍候再試'
        })
      }
    },
    async addToFavorite(restaurantId) {
      try {
        const { data } = await userAPI.addFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: true
            }
          } else {
            return restaurant
          }
        })

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍候再試'
        })
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data } = await userAPI.deleteFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false
            }
          } else {
            return restaurant
          }
        })
      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍候再試'
        })
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
