import moment from "moment";

export const fromNowFilter = {
  filters: {
    fromNow(date) {
      if (!date) return "-";
      return moment(date).fromNow();
    },
  },
};

export const emptyImageFilter = {
  filters: {
    emptyImageFilter(src) {
      // 如果圖片為空，回傳 No image 的圖片
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  },
};
