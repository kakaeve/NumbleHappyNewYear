const endPoint = "http://43.201.103.199";

function newPost() {
  const newPostSection = document.createElement("section");
  const form = document.createElement("div");
  const button = document.createElement("a");
  const formTitle = document.createElement("input");
  const formContent = document.createElement("textarea");
  const formImage = document.createElement("img");
  const randomImageButton = document.createElement("button");

  let randomImageUrl = "";
  button.innerText = "등록하기";
  randomImageButton.innerText = "random 지정!";
  randomImageButton.addEventListener("click", async () => {
    const res = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: UNSPLASH_ACCESSS_KEY,
      },
    });

    randomImageUrl = res.data.urls.small;
    console.log("random image : ", randomImageUrl);
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: randomImageUrl,
    };
    console.log(sendData);
  });

  form.append(formTitle, formContent, formImage, button);

  button.href = "#";
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    let targetId = 0;
    const sendData = {
      title: formTitle.value,
      content: formContent.value,
      image: randomImageUrl,
    };

    //const img = res.urls.raws;
    console.log(sendData);
    await axios
      .post(`${endPoint}/post`, sendData)
      .then((res) => {
        targetId = res.data.data.postId;
        console.log(res);
      })
      .catch((err) => console.log(err));
    window.location.href = `#/post/${targetId}`;
  });
  newPostSection.append(form, randomImageButton);
  return newPostSection;
}

export { newPost };
