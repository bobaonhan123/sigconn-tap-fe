import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
// const baseUrl = "http://192.168.1.18:8000/api";
// const baseUrl = "https://6cf1-2001-ee0-4b6e-cd90-b0ac-12c9-dd9e-3bca.ngrok-free.app/api";
//php artisan serve --host=192.168.1.18 --port=8000
//php artisan serve --host=192.168.193.30 --port=8000
export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning":"1234"
  },
});