import axios from "axios";

const ipUrl = axios.create({
  baseURL: "https://port-0-test2-m3viba9m327f6c46.sel4.cloudtype.app",
  // baseURL: "http://localhost:8000", // 로컬

  withCredentials: true,
  origin: "https://web-front-m3viba9m327f6c46.sel4.cloudtype.app",
});
export { ipUrl };
