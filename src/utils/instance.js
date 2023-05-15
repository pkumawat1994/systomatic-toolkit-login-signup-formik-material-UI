import axios from "axios";
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});
instance.interceptors.request.use((request) => {
  // if (token && token) {
  //   request.headers.common.Authorization = `Bearer ${token}`;
  // }
  // return request;
  let token = localStorage.getItem("userToken");
  console.log("token", token);
  request.headers["Authorization"] = "Bearer " + token;
  // request.headers.common.Authorization = `Bearer ${token}`;
  return request;
});
