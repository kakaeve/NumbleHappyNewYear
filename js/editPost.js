const endPoint = "http://43.201.103.199";

async function editPost(res) {
  const editPostSection = document.createElement("section");
  const form = document.createElement("div");
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

  form.append(formTitle, formContent, formImage, button);
  editPostSection.append(backButton, form);
  return editPostSection;
}

export { editPost };
