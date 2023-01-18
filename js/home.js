//const { default: axios } = require("axios");

async function makeMainFeed(res) {
  console.log(res);
  //console.log(END_POINT);

  const mainFeedSection = document.createElement("section");
  const postListUl = document.createElement("ul");
  const viewToggleButton = document.createElement("button");

  const postList = res.data.data.posts;

  mainFeedSection.classList.add("main-feed-section");
  postListUl.classList.add("post-list");
  postListUl.classList.add("card-view");
  //postListUl.classList.add("list-view");

  for (let post of postList) {
    const img = document.createElement("img");
    const li = document.createElement("li");
    const postContainer = document.createElement("div");
    const title = document.createElement("div");
    const content = document.createElement("div");
    const a = document.createElement("a");
    const imageBox = document.createElement("div");

    li.classList.add("post-item");
    title.classList.add("post-title");
    content.classList.add("post-content");
    postContainer.classList.add("post-container");
    imageBox.classList.add("img-box");

    title.innerText = post.title;
    content.innerText = post.content;
    img.src = post.image;

    a.href = `#/post/${post.postId}`;
    postContainer.append(title, content);
    imageBox.append(img);
    a.append(imageBox, postContainer);
    a.classList.add("postAtag");
    li.appendChild(a);
    li.id = `${post.postId}`;
    postListUl.appendChild(li);
  }
  mainFeedSection.appendChild(postListUl);
  return mainFeedSection;
}

export { makeMainFeed };
