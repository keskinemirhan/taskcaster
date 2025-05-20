function changePage(itemId, itemType, titleElement, pageElement) {
    const headerTitle = document.querySelector(".header-title");
    const section = document.querySelector("section");
    const aside = document.querySelector("aside");
    aside.classList.remove("float-full");
    headerTitle.innerHTML = "";
    headerTitle.appendChild(titleElement);
    const pageButtons = document.querySelectorAll(".page-button");
    const event = new CustomEvent("changepage", { detail: { itemId: itemId, itemType: itemType } });
    pageButtons.forEach(button => button.dispatchEvent(event));
    section.innerHTML = "";
    section.appendChild(pageElement)
}
function getPageRoot() {
    return document.querySelector("section");
}
