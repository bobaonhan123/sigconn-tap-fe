import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
// const baseUrl = "http://192.168.1.18:8000/api";
// const baseUrl = "https://505c-113-160-235-186.ngrok-free.app/api";
//php artisan serve --host=192.168.1.18 --port=8000
//php artisan serve --host=192.168.193.30 --port=8000
export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning":"1234"
  },
});