import { axiosConnection } from "./axiosConnection.js";

async function editPost(res) {
  const editPostSection = document.createElement("section");
  const form = document.createElement("div");
  const button = document.createElement("a");
  const formTitle = document.createElement("input");
  const formContent = document.createElement("textarea");
  const backButton = document.createElement("a");
  const { title, content, image, postId } = res.data.data.post;
  const setImageButton = document.createElement("div");
  const setImageViewer = document.createElement("div");
  const setImage = document.createElement("img");
  const setImageContainer = document.createElement("div");
  const uploadImageButton = document.createElement("div");

  setImage.src = image;
  button.innerText = "수정하기";
  button.href = "#";
  formTitle.value = title;
  formTitle.classList.add("edit-post-title");
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
  formContent.value = content;
  formContent.classList.add("edit-post-content");
  form.classList.add("edit-post-form");
  button.classList.add("submit-button");
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: setImage.src,
    };
    const res = await axiosConnection("patch", `/post/${postId}`, sendData)
      .then((res) => {})
      .catch((e) => console.log(e));
    window.location.href = `#/post/${postId}`;
  });
  setImageButton.addEventListener("click", async () => {
    const res = await randomImage();
    setImage.src = res.data.urls.small;
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: randomImageUrl,
    };
  });

  form.append(formTitle, formContent, button);
  editPostSection.classList.add("edit-post-section");
  setImageContainer.classList.add("set-image-container");
  setImageViewer.classList.add("set-image-viewer");
  setImageViewer.append(setImage);
  setImageContainer.append(setImageViewer, setImageButton, uploadImageButton);

  editPostSection.append(setImageContainer, form);
  return editPostSection;
}

export { editPost };
