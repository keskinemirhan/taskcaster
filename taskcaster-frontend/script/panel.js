async function loadAssignedTasks(apiService) {
    const assignedTasks = await apiService.getAssignedTasks();

    const assignedTasksList = document.querySelector('#assigned-tasks-list');
    assignedTasks.forEach(task => {
        assignedTasksList.innerHTML += `
            <div id="${task.id}" class="assigned-task-item page-button">
                <div  class="icon ${task.status}">
                    <i class="bi bi-circle-fill"></i>
                </div>
                <div class="task-text">
                ${task.name}
                </div>
            </div>
    `;
    });
    bindTaskButtons(document);
}

loadAssignedTasks(apiService);

async function loadProjects(apiService) {
    const projects = await apiService.getProjects();

    const projectsList = document.querySelector("#projects-list")
    projects.forEach(project => {
        projectsList.innerHTML += `
            <div id="${project.id}" class="project-item page-button">
            ${project.name}
            </div>
        `;
    });
    bindProjectButtons(document);
}

loadProjects(apiService);

bindDropdowns(document);
bindDropdownSelections(document);

const homePageButton = document.querySelector("#home-button");

const assignedTasksButton = document.querySelector('#assigned-tasks');
const assignedTasksList = document.querySelector('#assigned-tasks-list');

assignedTasksButton.addEventListener("click", function(e) {
    if (assignedTasksButton.classList.contains("active")) {
        assignedTasksList.classList.add("hidden");
        assignedTasksButton.classList.remove("active");
    } else {
        assignedTasksList.classList.remove("hidden");
        assignedTasksButton.classList.add("active");
    }


})

bindTaskButtons(document);


const projectsButton = document.querySelector("#projects-button");
const projectsList = document.querySelector("#projects-list")

projectsButton.addEventListener("click", function(e) {
    if (projectsButton.classList.contains("active")) {
        projectsButton.classList.remove("active");
        projectsList.classList.add("hidden");
    } else {
        projectsButton.classList.add("active");
        projectsList.classList.remove("hidden");
    }
});

homePageButton.addEventListener("click", function(e) {
    getHomePage(homePageButton);
});

let currentPageButton = homePageButton;
// getHomePage(homePageButton);

const menuButton = document.querySelector("#menu-btn");
const aside = document.querySelector("aside");

menuButton.addEventListener("click", function(e) {
    aside.classList.add("float-full");
});

const closeAsideButton = document.querySelector("#close-aside");
closeAsideButton.addEventListener("click", function(e) {
    aside.classList.remove("float-full");
});

