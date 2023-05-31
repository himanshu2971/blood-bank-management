import axios from "axios";
//setting default base url
const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });
// using interceptor
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;

//when user logins ,token is generated and will be saved in local storage