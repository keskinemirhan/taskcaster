class ApiService {
    async getAssignedTasks() {
        return dashboard.assigned_tasks;
    }
    async getProjects() {
        return dashboard.projects;
    }
}

const currentPage = {
    type: "page",
    name: "activities",
    action: "none"
}

const apiService = new ApiService();

async function loadAssignedTasks(apiService) {
    const assignedTasks = await apiService.getAssignedTasks();

    const assignedTasksList = document.querySelector('#assigned-tasks-list');
    assignedTasks.forEach(task => {
        assignedTasksList.innerHTML += `
            <div class="assigned-task-item page-button">
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
            <div id="${project.id}" class="project-item page-button">
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

async function getHomePage() {
    const projects = await apiService.getProjects();
    return `
            
            <div class="h-projects-header">
                <h1>Projects</h1>
                <button class="btn">
                <i class="bi bi-plus"></i>
                    Add Project
                </button>
            </div>
            <hr>
            <div class="project-item-list">
            ${projects.map(project => {
        return '<div id="' + project.id + '" class="project-item page-button">' +
            project.name +
            '</div>';

    }).join("")}
            </div>
            <h1>Activities</h1>
            <hr>
            <div class="table-container">
              <table>
                <tr>
                  <th>User</th>
                  <th>Date</th>
                  <th>Action</th>
                  <th>Project</th>
                  <th>Task</th>
                </tr>
                <tr>
                  <td>
                    <div class="table-profile">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                  </td>
                  <td>
                    11.08.2025 11:35 PM
                  </td>
                  <td>Add Task</td>
                  <td>Web Application Project</td>
                  <td>
                    <div class="assigned-task-item">
                      <div class="icon progress">
                        <i class="bi bi-circle-fill"></i>
                      </div>
                      <div class="task-text">
                        Unit Tests
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="table-profile">
                      <img class="profile-image" src="https://picsum.photos/200/300">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                  </td>
                  <td>
                    11.08.2025 11:35 PM
                  </td>
                  <td>Add Task</td>
                  <td>Web Application Project</td>
                  <td>
                    <div class="assigned-task-item">
                      <div class="icon progress">
                        <i class="bi bi-circle-fill"></i>
                      </div>
                      <div class="task-text">
                        Unit Tests
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="table-profile">
                      <img class="profile-image" src="https://picsum.photos/200/300">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                  </td>
                  <td>
                    11.08.2025 11:35 PM
                  </td>
                  <td>Add Task</td>
                  <td>Web Application Project</td>
                  <td>
                    <div class="assigned-task-item">
                      <div class="icon progress">
                        <i class="bi bi-circle-fill"></i>
                      </div>
                      <div class="task-text">
                        Unit Tests
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="table-profile">
                      <img class="profile-image" src="https://picsum.photos/200/300">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                  </td>
                  <td>
                    11.08.2025 11:35 PM
                  </td>
                  <td>Add Task</td>
                  <td>Web Application Project</td>
                  <td>
                    <div class="assigned-task-item">
                      <div class="icon progress">
                        <i class="bi bi-circle-fill"></i>
                      </div>
                      <div class="task-text">
                        Unit Tests
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
    `;

}

const homePageButton = document.querySelector("#home-button");

let currentPageButton = homePageButton;


async function changePage(pageInfo, pageButton) {
    const mainScreen = document.querySelector(".main-screen");
    const headerTitle = document.querySelector(".header-title");
    currentPageButton.classList.remove("active");
    currentPageButton = pageButton;
    currentPageButton.classList.add("active");
    let title;
    if (pageInfo.name === "home") {
        mainScreen.innerHTML = await getHomePage();
        title = `
            <i class="bi bi-activity"></i>
            <div class="title-text"> 
            Home
            </div> 
        `;
    }

    headerTitle.innerHTML = title;

}

changePage({ name: "home" }, homePageButton);

homePageButton.addEventListener("click", function(e) {
    changePage({ name: "home" }, homePageButton);
});






