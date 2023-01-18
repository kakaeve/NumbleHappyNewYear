const endPoint = "http://43.201.103.199";

function makeDetail(res) {
  const { title, content, image, postId } = res.data.data.post;
  const postTitle = document.createElement("div");
  const postContent = document.createElement("div");
  const postImage = document.createElement("img");
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
  const commentSubmitButton = document.createElement("button");

  for (let comment of comments) {
    const { content, commentId } = comment;
    const li = document.createElement("li");
    const commentContent = document.createElement("div");
    const commentDeleteButton = document.createElement("button");
    commentDeleteButton.innerText = "삭제하기";
    commentDeleteButton.addEventListener("click", async () => {
      await axios
        .delete(`${endPoint}/comment/${commentId}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location.reload();
    });

    commentContent.innerText = content;
    li.append(commentContent, commentDeleteButton);
    commentList.append(li);
  }

  commentSubmitButton.innerText = "제출";
  commentSubmitButton.addEventListener("click", async () => {
    const sendData = { content: commentInput.value };
    console.log(sendData);
    await axios
      .post(`${endPoint}/comment/${postId}`, sendData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  });

  commentInputForm.append(commentInput, commentSubmitButton);
  commentSection.append(commentList, commentInputForm);

  editButton.href = `#edit/${postId}`;
  editButton.innerText = "수정하기";

  removeButton.href = "#remove";
  removeButton.innerText = "삭제하기";
  postIdSave.innerText = postId;
  postIdSave.classList.add("hidden");
  removeButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await axios
      .delete(`${endPoint}/post/${postId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.href = "#";
  });

  buttonContainer.append(editButton, removeButton);

  postTitle.innerText = title;
  postTitle.id = "postTitle";
  postContent.innerText = content;
  postContent.id = "postContent";
  postImage.src = image;
  postImage.id = "postImage";

  postSection.append(
    postIdSave,
    postTitle,
    postContent,
    postImage,
    buttonContainer
  );
  postSection.classList.add("post-section");
  postTitle.classList.add("postTitle");
  postContent.classList.add("postContent");
  postImage.classList.add("postImage");
  buttonContainer.classList.add("buttonContainer");
  editButton.classList.add("button");
  editButton.id = "editButton";

  detailSection.append(postSection, commentSection);

  return detailSection;
}

export { makeDetail };
