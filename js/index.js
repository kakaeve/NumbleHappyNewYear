import { makeDetail } from "./detail.js";
import { editPost } from "./editPost.js";
import { makeMainFeed } from "./home.js";
import { newPost } from "./newPost.js";

const endPoint = "http://43.201.103.199";

const render = async () => {
  try {
    const hash = window.location.hash.replace("/#", "");
    const body = document.querySelector("body");
    while (body.hasChildNodes()) {
      body.removeChild(body.firstChild);
    }
    console.log(body);
    console.log(hash);
    if (hash === "") {
      const res = await axios(`${endPoint}/posts`);
      await makeMainFeed(res);
    } else if (hash.includes("post/")) {
      console.log(`${endPoint}${hash.substring(1)}`);
      const res = await axios(`${endPoint}${hash.substring(1)}`);
      console.log(res);
      makeDetail(res);
    } else if (hash.includes("edit")) {
      const res = await axios(`${endPoint}/post${hash.substring(5)}`);
      editPost(res);
    } else if (hash.includes("new")) {
      newPost();
    }
  } catch (e) {
    console.log(e);
  }
};

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
