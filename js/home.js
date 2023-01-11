//const { default: axios } = require("axios");

async function makeMainFeed(res) {
  console.log(res);

  const mainFeedSection = document.createElement("section");
  const postListUl = document.createElement("ul");
  const newPostButton = document.createElement("a");
  const viewToggleButton = document.createElement("button");

  const postList = res.data.data.posts;

  mainFeedSection.id = "mainFeedSection";
  postListUl.id = "postsList";
  postListUl.classList.add("card-view");
  //postListUl.classList.add("list-view");

  for (let post of postList) {
    const img = document.createElement("img");
    const li = document.createElement("li");
    const postContainer = document.createElement("div");
    const title = document.createElement("div");
    const content = document.createElement("div");
    const a = document.createElement("a");

    li.classList.add("post-item");
    title.classList.add("post-title");
    content.classList.add("post-content");
    postContainer.classList.add("post-container");

    title.innerText = post.title;
    content.innerText = post.content;
    img.src = post.image;

    a.href = `#/post/${post.postId}`;
    postContainer.append(title, content);
    a.append(img, postContainer);
    li.appendChild(a);
    li.id = `${post.postId}`;
    postListUl.appendChild(li);
  }
  newPostButton.href = `#new`;
  newPostButton.innerText = "인사하기";
  newPostButton.classList.add("new-post-btn");
  mainFeedSection.appendChild(postListUl);
  document.querySelector("body").append(mainFeedSection, newPostButton);
}

export { makeMainFeed };
