import { axiosConnection } from "./axiosConnection.js";

function makeDetail(res) {
  const { title, content, image, postId } = res.data.data.post;
  const postImageContainer = document.createElement("div");
  const postTitle = document.createElement("div");
  const postContent = document.createElement("div");
  const postImage = document.createElement("img");
  const postContainer = document.createElement("div");
  const detailSection = document.createElement("section");
  const postSection = document.createElement("section");
  const commentSection = document.createElement("section");
  const commentList = document.createElement("ul");
  const editButton = document.createElement("a");
  const removeButton = document.createElement("a");

  const postIdSave = document.createElement("div");

  const buttonContainer = document.createElement("div");

  const comments = res.data.data.comments;
  const commentInputForm = document.createElement("section");
  const commentInput = document.createElement("input");
  const commentSubmitButton = document.createElement("div");

  for (let comment of comments) {
    const { content, commentId } = comment;
    const li = document.createElement("li");
    const commentContent = document.createElement("div");
    const commentDeleteButton = document.createElement("span");
    li.classList.add("comment-item");
    commentDeleteButton.classList.add("fas", "fa-trash-alt", "remove-button");
    commentContent.classList.add("comment-content");
    commentDeleteButton.addEventListener("click", async () => {
      await axiosConnection("delete", `/comment/${commentId}`)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
      window.location.reload();
    });
    commentContent.append(content, commentDeleteButton);
    li.append(commentContent);
    commentList.append(li);
  }

  commentSubmitButton.innerText = "제출";
  commentSubmitButton.addEventListener("click", async () => {
    const sendData = { content: commentInput.value };
    const comment = await axiosConnection(
      "post",
      `/comment/${postId}`,
      sendData
    )
      .then((res) => {
        const { content, commentId } = res.data.data;
        const li = document.createElement("li");
        const commentContent = document.createElement("div");
        const commentDeleteButton = document.createElement("span");
        li.classList.add("comment-item");
        commentDeleteButton.classList.add(
          "fas",
          "fa-trash-alt",
          "remove-button"
        );
        commentContent.classList.add("comment-content");
        commentDeleteButton.addEventListener("click", async () => {
          await axiosConnection("delete", `/comment/${commentId}`)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
          window.location.reload();
        });
        commentContent.append(content, commentDeleteButton);
        li.append(commentContent);
        commentList.append(li);
      })
      .catch((e) => console.log(e));
  });
  commentSection.classList.add("comment-section");
  commentList.classList.add("comment-list");
  commentInputForm.classList.add("comment-input-form");

  commentInputForm.append(commentInput, commentSubmitButton);
  commentSection.append(commentList, commentInputForm);

  editButton.href = `#edit/${postId}`;

  removeButton.href = "#remove";
  postIdSave.innerText = postId;
  postIdSave.classList.add("hidden");
  removeButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await axiosConnection("delete", `/post/${postId}`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    window.location.href = "#";
  });

  buttonContainer.append(editButton, removeButton);

  postTitle.innerText = title;
  postTitle.classList.add("post-title");
  postContent.innerText = content;
  postContent.classList.add("post-content");
  postImage.src = image;
  postImage.classList.add("post-image");
  postContainer.classList.add("post-container");
  postImageContainer.classList.add("post-image-container");
  postImageContainer.append(postImage);
  postContainer.append(buttonContainer, postTitle, postContent);
  postSection.append(postIdSave, postImageContainer, postContainer);

  postSection.classList.add("post-section");
  buttonContainer.classList.add("button-container");
  editButton.classList.add("button");
  removeButton.classList.add("button");
  editButton.id = "editButton";
  removeButton.classList.add("fas", "fa-trash-alt");
  editButton.classList.add("fas", "fa-edit");
  detailSection.classList.add("detail-section");
  detailSection.append(postSection, commentSection);

  return detailSection;
}

export { makeDetail };
