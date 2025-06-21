// Creates home page element.
async function getHomePage() {
  const projects = await apiService.getProjects();
  const titleElement = createElement(`
    <div class="header-title">
            <i class="bi bi-activity"></i>
            <div class="title-text"> 
            Home
            </div> 
    </div>
        `);
  const pageElement = createElement(`
            <div class="main-screen">         
            <div class="h-projects-header">
                <h1>Projects</h1>
                <button class="btn add-project-btn">
                <i class="bi bi-plus"></i>
                    Add Project
                </button>
            </div>
            <hr>
            <div class="project-item-list">
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
            </div>
    `);
  const projectList = pageElement.querySelector(".project-item-list");
  const addProjectBtns = pageElement.querySelectorAll(".add-project-btn");
  addProjectBtns.forEach((addProjectBtn) => {
    addProjectBtn.addEventListener("click", () => {
      getProjectForm();
    });
  });
  projects.forEach((project) => {
    projectList.appendChild(createProjectItem(project.id, project.name));
  });
  if (projects.length === 0) projectList.innerText = "No Projects...";
  changePage("homepage", "homepage", titleElement, pageElement);
}
