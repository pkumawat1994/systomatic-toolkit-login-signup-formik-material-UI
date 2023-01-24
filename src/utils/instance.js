import axios from "axios";
export const instance = axios.create({
  baseURL: "https://concerned-leotard-fox.cyclic.app",
});
