
function createTaskItem(taskId, status, taskName) {
    const html = `
            <div data-comptype="page-button" data-type="task" data-id="${taskId}" class="assigned-task-item page-button">
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
    return element;
}

function createProjectItem(projectId, projectName) {
    const html = `
            <div data-comptype="page-button" data-type="project" data-id="${projectId}" class="project-item page-button">
            ${projectName}
            </div>
        `;

    const element = createElement(html);
    element.addEventListener("click", function(e) {
        getProjectPage(projectId);
    })
    return element;
}

async function loadAssignedTasks(apiService) {
    const assignedTasks = await apiService.getAssignedTasks();

    const assignedTasksList = document.querySelector('#assigned-tasks-list');
    assignedTasks.forEach(task => {
        const taskItem = createTaskItem(task.id, task.status, task.name);
        assignedTasksList.appendChild(taskItem);
    });
}

loadAssignedTasks(apiService);

async function loadProjects(apiService) {
    const projects = await apiService.getProjects();

    const projectsList = document.querySelector("#projects-list")
    projects.forEach(project => {
        projectsList.appendChild(createProjectItem(project.id, project.name));
    });
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
    getHomePage();
});

getHomePage();

const menuButton = document.querySelector("#menu-btn");
const aside = document.querySelector("aside");

menuButton.addEventListener("click", function(e) {
    aside.classList.add("float-full");
});

const closeAsideButton = document.querySelector("#close-aside");
closeAsideButton.addEventListener("click", function(e) {
    aside.classList.remove("float-full");
});

