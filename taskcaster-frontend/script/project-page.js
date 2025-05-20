async function getProjectPage(id, pageButton) {
    const project = await apiService.getProject(id);
    const tasks = await apiService.getProjectTasks(id);
    const assigned = tasks.filter((task) => task.assigned);
    const active = tasks.filter((task) => task.status !== "done");
    const done = tasks.filter((task) => task.status === "done");
    const title  =`
            <i class="menu-icon bi bi-card-checklist"></i>
            ${project.name}
    ` 

    const html = ` 
            <div class="project-title">
              <h1>${project.name}</h1>
              <button class="btn">
                <i class="bi bi-pencil-square"></i>
                Edit
              </button>
            </div>
            <p class="project-description">
            ${project.desc}
            </p>
            <hr>
            <div class="project-task-header">
              <h2>Tasks</h2>
              <button class="btn">
                <i class="bi bi-plus"></i>
                Add Task
              </button>
            </div>
            <div class="project-tasks">
              <div class="project-task-list">
                <div class="project-task-list-title">
                  Assigned
                </div>
                <hr>
                <div class="project-task-list-items">`
        + assigned.map((task) => `
                  <div id="${task.id}" class="assigned-task-item page-button">
                    <div class="icon ${task.status}">
                      <i class="bi bi-circle-fill"></i>
                    </div>
                    <div class="task-text">
                    ${task.name}
                    </div>
                  </div>
`).join("") +





        `
                </div>
              </div>
              <div class="project-task-list">
                <div class="project-task-list-title">
                  Active
                </div>
                <hr>
                <div class="project-task-list-items">
                ` + active.map((task) => `
                  <div id="${task.id}" class="assigned-task-item page-button">
                    <div class="icon ${task.status}">
                      <i class="bi bi-circle-fill"></i>
                    </div>
                    <div class="task-text">
                    ${task.name}
                    </div>
                  </div>
`).join("") + `
                </div>
              </div>
              <div class="project-task-list">
                <div class="project-task-list-title">
                  Done
                </div>
                <hr>
                <div class="project-task-list-items">
                `+

        done.map((task) => `
                  <div id="${task.id}" class="assigned-task-item page-button">
                    <div class="icon ${task.status}">
                      <i class="bi bi-circle-fill"></i>
                    </div>
                    <div class="task-text">
                    ${task.name}
                    </div>
                  </div>
`).join("") + `
                </div>
              </div>
            </div>
            <hr>
            <h2>Activities</h2>
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

    changePage(title, html, pageButton);
    bindTaskButtons(getPageRoot());
}
