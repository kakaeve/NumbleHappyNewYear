function navbar() {
  const navbarContainer = document.createElement("nav");
  const navTitle = document.createElement("a");
  const backButton = document.createElement("a");
  const newPostButton = document.createElement("a");

  navTitle.innerText = "Happy new year";
  navTitle.classList.add("navBarTitle");
  navTitle.href = "#";
  backButton.innerText = "뒤로가기";
  console.log(window.history);
  //backButton.href = window.history.back();
  backButton.addEventListener("click", () => {
    //window.history.back();
    window.history.back();
    if (window.location.href.includes("edit")) {
    } else {
    }
  });

  backButton.id = "backButton";
  backButton.classList.add("button");

  newPostButton.innerText = "새해인사하기";
  newPostButton.href = "#new";
  newPostButton.id = "newPostButton";
  navbarContainer.id = "navBarContainer";
  newPostButton.classList.add("button");
  navbarContainer.append(backButton, navTitle, newPostButton);
  console.log("qwe");
  return navbarContainer;
}

export { navbar };
