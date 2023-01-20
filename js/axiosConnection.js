const axios = require("axios");

async function axiosConnection(method, url, data) {
  return await axios({
    method: method,
    url: `${process.env.END_POINT}${url}`,
    data: data,
  });
}

async function randomImage() {
  return await axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random",
    params: {
      client_id: process.env.UNSPLASH_ACCESSS_KEY,
    },
  });
}

export { axiosConnection, randomImage };
