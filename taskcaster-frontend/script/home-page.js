async function getHomePage(pageButton) {
    const projects = await apiService.getProjects();
    title = `
            <i class="bi bi-activity"></i>
            <div class="title-text"> 
            Home
            </div> 
        `;
    const html = `
            
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
    changePage(title, html, pageButton);
}
