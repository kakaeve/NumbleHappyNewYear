const axios = require("axios");

const { END_POINT, UNSPLASH_ACCESSS_KEY } = process.env;

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
      client_id: UNSPLASH_ACCESSS_KEY,
    },
  });
}

export { axiosConnection, randomImage };
