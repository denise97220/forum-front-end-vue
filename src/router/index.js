import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/restaurants",
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: Restaurants,
  },
  {
    path: "/restaurants/feed",
    name: "restaurants-feed",
    component: () => import("../views/RestaurantsFeed.vue"),
  },
  {
    path: "/restaurants/top",
    name: "restaurants-top",
    component: () => import("../views/RestaurantsTop.vue"),
  },
  {
    path: "/restaurants/:id",
    name: "restaurant",
    component: () => import("../views/Restaurant.vue"),
  },
  {
    path: "/restaurants/:id/dashboard",
    name: "restaurant-dashboard",
    component: () => import("../views/RestaurantDashboard.vue"),
  },
  {
    path: "/users/top",
    name: "users-top",
    component: () => import("../views/UsersTop.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/admin",
    exact: true,
    redirect: "/admin/restaurants",
  },
  {
    path: "/admin/restaurants",
    name: "admin-restaurants",
    component: () => import("../views/AdminRestaurants.vue"),
  },
  {
    path: "/admin/restaurants/new",
    name: "admin-restaurants-new",
    component: () => import("../views/AdminRestaurantNew.vue"),
  },
  {
    path: "/admin/restaurants/:id",
    name: "admin-restaurant",
    component: () => import("../views/AdminRestaurant.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
