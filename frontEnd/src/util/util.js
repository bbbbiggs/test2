import axios from "axios";

const ipUrl = axios.create({
  // baseURL : "http://3.37.165.53:8000", // s3

  // baseURL: "http://mysssbuckettt.s3-website.ap-northeast-2.amazonaws.com", // s3

  baseURL: "https://port-0-test2-m3viba9m327f6c46.sel4.cloudtype.app",
  // baseURL: "http://localhost:8000", // 로컬

  withCredentials: true,
});
export { ipUrl };
