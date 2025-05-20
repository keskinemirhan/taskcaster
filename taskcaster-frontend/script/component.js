function createElement(htmlString) {
    const node = document.createElement("div");
    node.innerHTML = htmlString;
    return node.firstElementChild;
}

class Component {
}

