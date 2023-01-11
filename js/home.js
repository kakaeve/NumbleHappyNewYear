//const { default: axios } = require("axios");

async function makeMainFeed(res) {
  console.log(res);
  const mainFeedSection = document.createElement("section");
  const postListUl = document.createElement("ul");
  const newPostButton = document.createElement("a");
  const postList = res.data.data.posts;
  mainFeedSection.id = "mainFeedSection";
  postListUl.id = "postsList";
  for (let post of postList) {
    const img = document.createElement("img");
    const li = document.createElement("li");
    const title = document.createElement("div");
    const content = document.createElement("div");
    const a = document.createElement("a");

    title.innerText = post.title;
    content.innerText = post.content;
    img.src = post.image;

    a.href = `#/post/${post.postId}`;
    a.appendChild(img);
    a.appendChild(title);
    a.appendChild(content);
    li.appendChild(a);
    li.id = `${post.postId}`;
    postListUl.appendChild(li);
  }
  newPostButton.href = `#new`;
  newPostButton.innerText = "인사하기";
  mainFeedSection.appendChild(postListUl);
  document.querySelector("body").append(mainFeedSection, newPostButton);
}

export { makeMainFeed };
