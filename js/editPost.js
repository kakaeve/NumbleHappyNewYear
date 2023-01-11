const endPoint = "http://43.201.103.199";

async function editPost(res) {
  const form = document.createElement("section");
  const button = document.createElement("a");
  const formTitle = document.createElement("input");
  const formContent = document.createElement("textarea");
  const formImage = document.createElement("img");
  const backButton = document.createElement("a");
  const { title, content, image, postId } = res.data.data.post;

  backButton.innerText = "뒤로가기";
  backButton.href = `#/post/${postId}`;
  button.innerText = "수정하기";
  button.href = "#";
  formTitle.value = title;
  formContent.value = content;
  formImage.src = image;

  form.append(formTitle, formContent, formImage, button);
  form.method = "post";
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: formImage.src,
    };
    await axios
      .patch(`${endPoint}/post/${postId}`, sendData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.href = `#/post/${postId}`;
  });
  document.querySelector("body").append(backButton, form);
}

export { editPost };
