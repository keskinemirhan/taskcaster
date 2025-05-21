function changePage(itemId, itemType, titleElement, pageElement) {
    const headerTitle = document.querySelector(".header-title");

    // Pages are inside the section element.
    const section = document.querySelector("section");

    // Page titles are inside the aside element.
    const aside = document.querySelector("aside");

    // To close the full page menu on smaller screen widths.
    aside.classList.remove("float-full");

    headerTitle.innerHTML = "";
    headerTitle.appendChild(titleElement);
    const pageButtons = document.querySelectorAll(".page-button");

    // Page buttons listen for and respond to the "changepage" event.
    const event = new CustomEvent("changepage", { detail: { itemId: itemId, itemType: itemType } });
    pageButtons.forEach(button => button.dispatchEvent(event));
    section.innerHTML = "";
    section.appendChild(pageElement)
}

function getPageRoot() {
    return document.querySelector("section");
}

// Creates an element with given html string.
function createElement(htmlString) {
    const node = document.createElement("div");
    node.innerHTML = htmlString;
    return node.firstElementChild;
}
