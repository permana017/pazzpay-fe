import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
