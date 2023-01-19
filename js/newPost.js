import { axiosConnection, randomImage } from "./axiosConnection.js";

function newPost() {
  const newPostSection = document.createElement("section");
  const form = document.createElement("div");
  const button = document.createElement("a");
  const formTitle = document.createElement("input");
  const formContent = document.createElement("textarea");
  const setImageButton = document.createElement("div");
  const setImageViewer = document.createElement("div");
  const setImage = document.createElement("img");
  const setImageContainer = document.createElement("div");
  const uploadImageButton = document.createElement("div");

  let randomImageUrl = "";
  button.innerText = "등록하기";
  setImageButton.classList.add(
    "fas",
    "fa-random",
    "random-image-button",
    "button"
  );
  uploadImageButton.classList.add(
    "fas",
    "fa-image",
    "upload-image-button",
    "button"
  );
  setImageButton.addEventListener("click", async () => {
    const res = await randomImage();
    randomImageUrl = res.data.urls.small;
    setImage.src = randomImageUrl;
    console.log("random image : ", randomImageUrl);
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: randomImageUrl,
    };
  });
  formTitle.classList.add("edit-post-title");
  formTitle.placeholder = "title";
  formContent.classList.add("edit-post-content");
  formContent.placeholder = "content";
  button.classList.add("submit-button");

  form.append(formTitle, formContent, button);
  form.classList.add("edit-post-form");
  button.href = "#";
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    let targetId = 0;
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: randomImageUrl,
    };
    const res = await axiosConnection("post", "/post", sendData)
      .then((res) => {
        targetId = res.data.data.postId;
      })
      .catch((e) => console.log(e));
    window.location.href = `#/post/${targetId}`;
  });
  newPostSection.classList.add("edit-post-section");
  setImageContainer.classList.add("set-image-container");
  setImageViewer.classList.add("set-image-viewer");
  setImageViewer.append(setImage);
  setImageContainer.append(setImageViewer, setImageButton, uploadImageButton);

  newPostSection.append(setImageContainer, form);
  return newPostSection;
}

export { newPost };
