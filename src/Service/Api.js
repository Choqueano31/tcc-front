import axios from "axios";

const myApi = axios.create({
 //baseURL: "https://rafaelapi.herokuapp.com",
  baseURL: "http://localhost:3333",
});

export default myApi;
