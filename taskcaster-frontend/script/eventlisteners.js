// For preventing the default behaviour with buttons in forms.
function bindFormPreventDefault(rootElement) {
    const itemFormButtons = rootElement.querySelectorAll("form.item-form button");

    itemFormButtons.forEach((itemButton) => {
        itemButton.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
}

// For selection fields with dropdown contents.
function bindDropdownSelections(rootElement) {
    const dropdownSelections = rootElement.querySelectorAll("form.item-form .dropdown.selection");
    dropdownSelections.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropbtn");
        const selections = dropdown.querySelectorAll(".dropdown-item");
        const input = dropdown.querySelector("input");
        selections.forEach((selection) => {
            if (selection.getAttribute("value") == input.value) {
                button.innerHTML = selection.innerHTML;
            }
            selection.addEventListener("click", () => {

                button.innerHTML = selection.innerHTML;
                input.setAttribute("value", selection.getAttribute("value"));
            })

        })
    })
}



// Hide the dropdown content when clicked outside of it.
window.onclick = function(event) {
    if (!event.target.matches(".dropdown *")) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }

        }
    }
}

// For dropdown buttons.
function bindDropdowns(rootElement) {
    const dropdowns = rootElement.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        const dropbtn = dropdown.querySelector(".dropbtn");
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        if (dropbtn !== null && dropdownContent != null) {
            dropbtn.addEventListener("click", function(e) {
                document.querySelectorAll(".dropdown-content").forEach((element) => {
                    element.classList.remove("show");
                });
                dropdownContent.classList.toggle("show");
                if (dropdownContent.classList.contains("show")) {
                    dropdownContent.removeAttribute("style");
                    const windowWidth = document.body.getBoundingClientRect().width;
                    const boxRight = dropdownContent.getBoundingClientRect().right;

                    if (boxRight + 5 > windowWidth) {
                        dropdownContent.setAttribute("style", `left:-${5 + boxRight - windowWidth}px`);
                    }
                }
            });
        }
    });

}
