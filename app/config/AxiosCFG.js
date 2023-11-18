import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
// const baseUrl = "http://192.168.1.18:8000/api";
//php artisan serve --host=192.168.1.18 --port=8000
export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});