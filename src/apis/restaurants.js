import { apiHelper } from "../utils/helper"

// 餐廳主頁面需要代入 token，才能拿到資料
const getToken = () => localStorage.getItem('token')
// const token = localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })

    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // JWT 規範
      headers: { 
        Authorization: `Bearer ${getToken()}` 
      },
    })
  },
  getRestaurantsTop() {
    return apiHelper.get('/restaurants/top', {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  }
}


