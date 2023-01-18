import { makeDetail } from "./detail.js";
import { editPost } from "./editPost.js";
import { makeMainFeed } from "./home.js";
import { navbar } from "./navBar.js";
import { newPost } from "./newPost.js";

const endPoint = "http://43.201.103.199";

const render = async () => {
  try {
    const hash = window.location.hash.replace("/#", "");
    const body = document.querySelector("body");
    body.lastChild.remove();
    if (!body.querySelector(".nav-bar-container")) {
      body.append(navbar());
    }

    const mainContainer = document.createElement("section");
    mainContainer.classList.add("main-container");
    body.append(mainContainer);
    if (hash === "") {
      const res = await axios(`${endPoint}/posts`);
      const mainFeedSection = await makeMainFeed(res);
      mainContainer.append(mainFeedSection);
    } else if (hash.includes("post/")) {
      console.log(`${endPoint}${hash.substring(1)}`);
      const res = await axios(`${endPoint}${hash.substring(1)}`);
      console.log(res);
      mainContainer.append(makeDetail(res));
    } else if (hash.includes("edit")) {
      const res = await axios(`${endPoint}/post${hash.substring(5)}`);
      console.log(res);
      mainContainer.append(await editPost(res));
    } else if (hash.includes("new")) {
      mainContainer.append(newPost());
    } else {
      window.location.href = "#";
    }
  } catch (e) {
    console.log(e);
  }
};

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
