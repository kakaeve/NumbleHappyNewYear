function navbar() {
  const navbarContainer = document.createElement("nav");
  const navTitle = document.createElement("a");
  const backButton = document.createElement("a");
  const newPostButton = document.createElement("a");

  navTitle.innerText = "Happy new year";
  navTitle.classList.add("nav-bar-title");
  navTitle.href = "#";
  backButton.innerText = "뒤로가기";
  backButton.addEventListener("click", () => {
    window.history.back();
  });

  backButton.classList.add("button", "back-button");

  newPostButton.innerText = "새해인사하기";
  newPostButton.href = "#new";
  newPostButton.classList.add("new-post-button", "button");
  navbarContainer.classList.add("nav-bar-container");
  navbarContainer.append(backButton, navTitle, newPostButton);
  return navbarContainer;
}

export { navbar };
