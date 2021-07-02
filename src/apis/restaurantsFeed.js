import { apiHelper } from '../utils/helper'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurantsFeed() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { 
        Authorization: `Bearer ${getToken()}` 
      }
    })
  }
}