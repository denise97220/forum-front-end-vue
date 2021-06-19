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

const dummyData = {
  "restaurants": [
      {
          "id": 4,
          "name": "Justine Gislason",
          "tel": "563-802-5980",
          "address": "70758 Oberbrunner Rapid",
          "opening_hours": "08:00",
          "description": "eos",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.17694141676466",
          "viewCounts": 20,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-25T15:36:00.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": true
      },
      {
          "id": 9,
          "name": "Elody Spencer",
          "tel": "(262) 490-7212 x49783",
          "address": "18267 Ryan Avenue",
          "opening_hours": "08:00",
          "description": "Est saepe ullam molestiae rerum iusto voluptatem m",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.55782683941975",
          "viewCounts": 2,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-05-11T09:02:22.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": true
      },
      {
          "id": 12,
          "name": "Hildegard Kshlerin",
          "tel": "984.024.2649 x9990",
          "address": "7157 Alan Expressway",
          "opening_hours": "08:00",
          "description": "Quia necessitatibus expedita magnam.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.88827387642861",
          "viewCounts": 19,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-08T17:07:38.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": true
      },
      {
          "id": 24,
          "name": "Raquel Metz",
          "tel": "418-761-3762 x5137",
          "address": "78799 Bartell Turnpike",
          "opening_hours": "08:00",
          "description": "Sint voluptates omnis placeat.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.15223262484906",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 25,
          "name": "Baron Grady",
          "tel": "382.728.2533 x6820",
          "address": "038 Genesis Plains",
          "opening_hours": "08:00",
          "description": "itaque atque voluptatum",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.90940630133672",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 28,
          "name": "Melvina Torphy",
          "tel": "1-934-403-0415 x678",
          "address": "65315 Delphia Squares",
          "opening_hours": "08:00",
          "description": "Perferendis voluptatem dignissimos aliquam aut aut",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.522747474074304",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 30,
          "name": "Mrs. Bradly Anderson",
          "tel": "1-957-421-9334 x2880",
          "address": "44172 Gleason Divide",
          "opening_hours": "08:00",
          "description": "Pariatur eum eos consectetur qui ex facilis quo.\nD",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.69267318226757",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 35,
          "name": "Maye Gibson",
          "tel": "754-359-5847 x72353",
          "address": "5168 Rogahn Forest",
          "opening_hours": "08:00",
          "description": "Temporibus eveniet tempore officia.\nEsse eos omnis",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=46.848682738404946",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 44,
          "name": "Lisa Kuphal",
          "tel": "1-335-613-9224 x470",
          "address": "9695 Koch Gardens",
          "opening_hours": "08:00",
          "description": "Hic atque et sit incidunt ratione unde tempore. Su",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.92681081675933",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      },
      {
          "id": 45,
          "name": "Kiara Lemke",
          "tel": "436.695.7214 x268",
          "address": "33828 Denesik Glens",
          "opening_hours": "08:00",
          "description": "Ullam aut beatae.",
          "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.61542017655447",
          "viewCounts": 0,
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z",
          "CategoryId": 2,
          "Category": {
              "id": 2,
              "name": "   日本料理",
              "createdAt": "2021-04-07T14:21:46.000Z",
              "updatedAt": "2021-04-12T08:59:51.000Z"
          },
          "isFavorited": false,
          "isLiked": false
      }
  ],
  "categories": [
      {
          "id": 2,
          "name": "   日本料理",
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-12T08:59:51.000Z"
      },
      {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z"
      },
      {
          "id": 4,
          "name": "墨西哥料理",
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z"
      },
      {
          "id": 5,
          "name": "素食料理",
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z"
      },
      {
          "id": 6,
          "name": "美式料理",
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z"
      },
      {
          "id": 7,
          "name": "複合式料理",
          "createdAt": "2021-04-07T14:21:46.000Z",
          "updatedAt": "2021-04-07T14:21:46.000Z"
      }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
      1,
      2,
      3,
      4,
      5
  ],
  "prev": 1,
  "next": 2
}

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
    fetchRestaurants() {
      const {restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created() {
    this.fetchRestaurants()
  }
 
}
</script>