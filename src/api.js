import axios from "axios";
//const response =  (await api.get('/')).data.results;


const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });





export default api;