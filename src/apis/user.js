import { apiHelper } from "../utils/helper";
const getToken = () => localStorage.getItem("token");

export default {
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
  like({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
  unlike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
  getTopUsers() {
    return apiHelper.get("/users/top", {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
  follow({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
  unFollow({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: {
        Authorization: `bearer ${getToken()}`,
      },
    });
  },
};
