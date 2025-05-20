function changePage(itemId, itemType, titleElement, pageElement) {
    const headerTitle = document.querySelector(".header-title");
    const section = document.querySelector("section");
    const aside = document.querySelector("aside");
    aside.classList.remove("float-full");
    headerTitle.innerHTML = "";
    headerTitle.appendChild(titleElement);
    const pageButtons = document.querySelectorAll(`[data-comptype="page-button"]`);
    pageButtons.forEach((pageButton) => {
        const type = pageButton.getAttribute("data-type");
        const id = pageButton.getAttribute("data-id");
        if (itemId === id && itemType === type) {
            pageButton.classList.add("active");
        } else {
            pageButton.classList.remove("active");
        }
    });

    section.innerHTML = "";
    section.appendChild(pageElement)
}
function getPageRoot() {
    return document.querySelector("section");
}
