import { dashboard } from './database';
// import './style.css'

class ApiService {
    async getAssignedTasks() {
        return dashboard.assigned_tasks;
    }
    async getProjects() {
        return dashboard.projects;
    }
}

const apiService = new ApiService();

async function loadAssignedTasks(apiService) {
    const assignedTasks = await apiService.getAssignedTasks();

    const assignedTasksList = document.querySelector('#assigned-tasks-list');
    assignedTasks.forEach(task => {
        assignedTasksList.innerHTML += `
            <div class="assigned-task-item">
                <div id="${task.id}" class="icon ${task.status}">
                    <i class="bi bi-circle-fill"></i>
                </div>
                <div class="task-text">
                ${task.name}
                </div>
            </div>
    `;
    });
}
loadAssignedTasks(apiService);

async function loadProjects(apiService) {
    const projects = await apiService.getProjects();

    const projectsList = document.querySelector("#projects-list")
    projects.forEach(project => {
        projectsList.innerHTML += `
            <div id="${project.id}" class="project-item">
            ${project.name}
            </div>
        `;

    });
}

loadProjects(apiService);




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

const dropdowns = document.querySelectorAll(".dropdown");
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
