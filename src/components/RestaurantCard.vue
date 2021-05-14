<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#">
            {{ restaurant.name }}
          </a>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category.name }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="removeFavorite"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.stop.prevent="addToFavorite"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="unlike"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="like"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RestaurantCard',
    data() {
        return {
            // 後續需要修改資料以使用加入最愛等功能，但因為 props 傳進來的資料無法修改，所以必須複製一份進 data 使用
            restaurant: this.initialRestaurant
        }
    },
    methods: {
        addToFavorite() {
            this.restaurant.isFavorited = true 
        },
        removeFavorite() {
            this.restaurant.isFavorited = false
        },
        like() {
            this.restaurant.isLiked = true 
        },
        unlike() {
            this.restaurant.isLiked = false
        }
    },
    props: {
        initialRestaurant: {
            type: Object,
            required: true
        }
    }
}
</script>