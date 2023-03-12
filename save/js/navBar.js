function navbar() {
  const navbarContainer = document.createElement("nav");
  const navTitle = document.createElement("a");
  const backButton = document.createElement("a");
  const newPostButton = document.createElement("a");

  navTitle.innerText = "Happy new year";
  navTitle.classList.add("nav-bar-title");
  navTitle.href = "#";
  backButton.addEventListener("click", () => {
    window.history.back();
  });

  backButton.classList.add("button", "back-button", "fas", "fa-arrow-left");

  newPostButton.href = "#new";
  newPostButton.classList.add(
    "new-post-button",
    "button",
    "fas",
    "fa-plus-square"
  );
  navbarContainer.classList.add("nav-bar-container");
  navbarContainer.append(backButton, navTitle, newPostButton);
  return navbarContainer;
}

export { navbar };
