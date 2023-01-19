//const axios = require("axios");

//import axios from "axios";

//const { default: axios } = require("axios");
const END_POINT = "http://43.201.103.199";

async function axiosConnection(method, url, data) {
  return await axios({
    method: method,
    url: `${END_POINT}${url}`,
    data: data,
  });
}

async function randomImage() {
  return await axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random",
    params: {
      client_id: "AuK9RkFBKsBrqWlY59_A7YApuJkzgxnm5USdMzq5Ang",
    },
  });
}

export { axiosConnection, randomImage };
