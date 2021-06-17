<template>
  <div class="row">
    <div class="col-md-12 mb-3">
    <h1>Judy Runte</h1>
    <p class="badge badge-secondary mt-1 mb-3">
      義大利料理
    </p>
    </div>
    <div class="col-lg-4">
    <img
      class="img-responsive center-block" 
      src="https://loremflickr.com/320/240/food,dessert,restaurant/"
      style="width: 250px;margin-bottom: 25px;"
    >
    <div class="contact-info-wrap">
      <ul class="list-unstyled">
      <li>
        <strong>Opening Hour:</strong>
        08:00
      </li>
      <li>
        <strong>Tel:</strong>
        (918) 827-1962
      </li>
      <li>
        <strong>Address:</strong>
        98138 Elisa Road
      </li>
      </ul>
    </div>
    </div>
    <div class="col-lg-8">
    <p>{{ restaurant.description }}</p>
    <a
      class="btn btn-primary btn-border mr-2"
      href="#"
    >Dashboard</a>

    <button
      type="button"
      class="btn btn-danger btn-border mr-2"
      v-if="restaurant.isFavorited"
      @click.stop.prevent="removeFavorite"
    >
      移除最愛
    </button>
    <button
      type="button"
      class="btn btn-primary btn-border mr-2"
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
</template>

<script>
export default {
  props: {
    initialRestaurant: {
        type: Object,
        required: true
    }
  },
  data() {
    return {
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
  }
}
</script>