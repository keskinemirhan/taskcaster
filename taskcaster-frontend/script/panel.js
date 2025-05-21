// Generic task item button with status icon and name
function createTaskItem(taskId, status, taskName) {
    const html = `
            <div class="assigned-task-item page-button">
                <div  class="icon ${status}">
                    <i class="bi bi-circle-fill"></i>
                </div>
                <div class="task-text">
                ${taskName}
                </div>
            </div>

        `;
    const element = createElement(html);
    element.addEventListener("click", function(e) {
        getTaskPage(taskId);
    });

    // The 'changepage' event is dispatched from the changePage function to indicate a page change.
    // Since a task item button is also a page button, it should have the 'active' class only when the current page matches its target page.
    element.addEventListener("changepage", function(e) {
        if (e.detail.itemId === taskId && e.detail.itemType === "task") {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
    return element;
}

// Generic project item button with name
function createProjectItem(projectId, projectName) {
    const html = `
            <div class="project-item page-button">
            ${projectName}
            </div>
        `;

    const element = createElement(html);
    element.addEventListener("click", function(e) {
        getProjectPage(projectId);
    })
    // Same as the task item button.
    element.addEventListener("changepage", function(e) {
        if (e.detail.itemId === projectId && e.detail.itemType === "project") {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
    return element;
}

// Home Page button in the left panel
function createHomePageButton() {
    const html = `
          <div id="home-button" class="menu-item page-button">
            <i class="menu-icon bi bi-activity"></i>
            <div class="menu-text">
              Home
            </div>
          </div>
    `;

    homePageButton = createElement(html);

    homePageButton.addEventListener("click", function(e) {
        getHomePage();
    });

    // Same as other page buttons.
    homePageButton.addEventListener("changepage", function(e) {
        if (e.detail.itemId === "homepage" && e.detail.itemType === "homepage") {
            homePageButton.classList.add("active");
        } else {
            homePageButton.classList.remove("active");
        }

    });
    return homePageButton;
}

// Assigned Tasks button and assigned tasks list in the left panel
async function createAssignedTasks() {
    const html = `
        <div class="panel-dropdown">
          <div class="menu-item ">
            <i class="menu-icon bi bi-person-fill-up"></i>
            <div class="menu-text">
              Assigned Tasks
            </div>
          </div>
          <div class="menu-item-content-list hidden">
          </div>
        </div>
    `;


    const element = createElement(html)

    // Get tasks assigned to the current user.
    const assignedTasks = await apiService.getAssignedTasks();
    const assignedTasksList = element.querySelector(".menu-item-content-list");


    // Create task items and append them to the assigned task list.
    assignedTasks.forEach(task => {
        const taskItem = createTaskItem(task.id, task.status, task.name);
        assignedTasksList.appendChild(taskItem);
    });
    const button = element.querySelector(".menu-item");

    // Adding event listeners for toggling the list. 
    button.addEventListener("click", function(e) {
        if (button.classList.contains("active")) {
            assignedTasksList.classList.add("hidden");
            button.classList.remove("active");
        } else {
            assignedTasksList.classList.remove("hidden");
            button.classList.add("active");
        }


    })
    return element;
}

// Projects button and projects list in the left panel
async function createProjectsButton() {
    const html = `
    <div class="panel-dropdown">
          <div class="menu-item ">
            <i class="menu-icon bi bi-card-checklist"></i>
            <div class="menu-text">
              Projects
            </div>
          </div>
          <div class="menu-item-content-list hidden">
          </div>
    </div>`;

    const element = createElement(html);
    const projects = await apiService.getProjects();
    const button = element.querySelector(".menu-item");
    const projectsList = element.querySelector(".menu-item-content-list")

    projects.forEach(project => {
        projectsList.appendChild(createProjectItem(project.id, project.name));
    });

    button.addEventListener("click", function(e) {
        if (button.classList.contains("active")) {
            projectsList.classList.add("hidden");
            button.classList.remove("active");
        } else {
            projectsList.classList.remove("hidden");
            button.classList.add("active");
        }
    });

    return element;
}

// Create the left panel buttons.
(async () => {
    const homePageButton = await createHomePageButton();
    const projectsButton = await createProjectsButton();
    const assignedTasks = await createAssignedTasks();
    const nav = document.querySelector("nav");
    nav.appendChild(homePageButton);
    nav.appendChild(projectsButton);
    nav.appendChild(assignedTasks);
})().then(() => {
    // Load home page after panel creation.
    getHomePage();
});

// TODO: Create components for dropdowns. 
bindDropdowns(document);
bindDropdownSelections(document);


// The following lines are for menu button function.
const menuButton = document.querySelector("#menu-btn");

const aside = document.querySelector("aside");

menuButton.addEventListener("click", function(e) {
    aside.classList.add("float-full");
});

const closeAsideButton = document.querySelector("#close-aside");

closeAsideButton.addEventListener("click", function(e) {
    aside.classList.remove("float-full");
});

