<template>
  <div class="container py-5">
    <Navtabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import Navtabs from './../components/Navtabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/Newestcomments'
import { Toast } from './../utils/helper'
import restaurantsFeedAPI from './../apis/restaurantsFeed'

export default {
  name: 'Restaurantsfeed',
  components: {
    Navtabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await restaurantsFeedAPI.getRestaurantsFeed()
        const {restaurants, comments} = response.data
        this.restaurants = restaurants
        this.comments = comments

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法取得資料，請稍候再試'
        })
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>