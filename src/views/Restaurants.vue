<template>
  <div class="container py-5">
    <Navtabs />
    
    <!-- RestaurantNavPills -->
    <RestaurantNavPills :categories="categories" />
    <div class="row">
      <!-- RestaurantCard -->
      <!-- 在外層使用迴圈，傳入的是迴圈單筆資料 -->
      <RestaurantCard 
        v-for="restaurant in restaurants" 
        :key="restaurant.id" 
        :initial-restaurant="restaurant" 
      />
    </div>

    <!-- RestaurantPagination -->
    <RestaurantPagination
        v-if="totalPage.length > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
        :previous-page="previousPage"
        :next-page="nextPage"
    />
  </div>
</template>

<script>
import Navtabs from './../components/Navtabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantNavPills from './../components/RestaurantNavPills'
import RestaurantPagination from './../components/RestaurantPagination'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helper'

export default {
  components: {
    Navtabs,
    RestaurantCard,
    RestaurantNavPills,
    RestaurantPagination
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })

        const {restaurants, categories, categoryId, page, totalPage, prev, next} = response.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        

      } catch(error) {
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法取得餐廳資料，請稍候再試'
        })
      }
    }
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  // 當路由有改變時，重新抓取頁面資料
  beforeRouteUpdate (to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  }
}
</script>