import axios from 'axios'
import Swal from 'sweetalert2'
// import { end } from 'worker-farm'

export const apiHelper = axios.create({
  baseURL: 'https://forum-express-api.herokuapp.com/'
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})