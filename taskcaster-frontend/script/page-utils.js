function changePage(titleHtml, pageHtml, pageButton) {
    const headerTitle = document.querySelector(".header-title");
    const mainScreen = document.querySelector(".main-screen");
    const aside = document.querySelector("aside");
    aside.classList.remove("float-full");
    headerTitle.innerHTML = titleHtml;
    currentPageButton.classList.remove("active");
    currentPageButton = pageButton;
    currentPageButton.classList.add("active");
    mainScreen.innerHTML = pageHtml;
}
function getPageRoot() {
    return document.querySelector(".main-screen");
}
