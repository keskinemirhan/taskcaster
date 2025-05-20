async function getTaskPage(id, pageButton) {
    const task = await apiService.getTask(id);
    const project = await apiService.getProject(task.projectId);
    const title = `
                <div class="task-status">
                  <i class="${task.status} bi bi-circle-fill"></i>
                  <div class="task-status-text">
                  ${task.name}
                  </div>
                </div>

        `;
    const html = `
            <div class="task-top">
              <div class="task-identifier">
                <div class="task-header">
                  <h1 class="task-name">
                  ${task.name}
                  </h1>
                  <div class="task-project">
                  ${project.name}
                  </div>
                </div>
                <div class="task-status">
                  <i class="${task.status} bi bi-circle-fill"></i>
                  <div class="task-status-text">
                  ${task.status === "done" ? "Done" : task.status === "progress" ? "Progress" : task.status === "warning" ? "Warning" : "Idle"}
                  </div>
                </div>
              </div>
              <div class="task-actions">
                <div class="dropdown">
                  <button class="dropbtn btn">
                    <i class="bi bi-person-circle"></i>
                    <div>
                      Assigness 5
                    </div>
                  </button>
                  <div class="dropdown-content">
                    <div class="drop-header">
                      Assignees
                    </div>
                    <div class="dropdown-item profile-indicator">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                    <div class="dropdown-item profile-indicator">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                    <div class="dropdown-item profile-indicator">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn">
                  <i class="bi bi-pencil-square"></i>
                  <div>
                    Edit
                  </div>
                </button>
              </div>
            </div>
            <p class="task-description">
            ${task.desc}
            </p>
            <hr>
            <form class="item-form">
              <div class="form-group">
                <label for="status-btn">Status</label>
                <div class="dropdown selection">
                  <input hidden type="text" name="status" value="${task.status}">
                  <button id="status-btn" class="btn dropbtn">
                  </button>
                  <div class="dropdown-content">
                    <div class="drop-header">
                      Select Status
                    </div>
                    <div value="done" class="dropdown-item">
                      <i class="done bi bi-circle-fill"></i>
                      Done
                    </div>
                    <div value="progress" class="dropdown-item">
                      <i class="progress bi bi-circle-fill"></i>
                      Progressing
                    </div>
                    <div value="warning" class="dropdown-item">
                      <i class="warning bi bi-circle-fill"></i>
                      Warning
                    </div>
                    <div value="idle" class="dropdown-item">
                      <i class="idle bi bi-circle-fill"></i>
                      Idle
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="assignees-button">Add/Remove Assignees</label>
                <div class="dropdown">
                  <button id="assignees-button" class="dropbtn btn">
                    <i class="bi bi-person-circle"></i>
                    <div>
                      Assigness 5
                    </div>
                  </button>
                  <div class="dropdown-content">
                    <div class="drop-header">
                      Assignees
                    </div>
                    <div class="dropdown-item profile-indicator">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                    <div class="dropdown-item profile-indicator">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                    <div class="dropdown-item profile-indicator">
                      <img class="profile-image" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250">
                      <div class="profile-name">
                        John Doe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="report-title">Report Title</label>
                <input type="text" id="report-title" name="title" placeholder="Enter Title...">
              </div>
              <div class="form-group">
                <label for="report-desc">Report Description</label>
                <textarea rows="4" placeholder="Enter Description..." id="report-desc" name="report-desc" cols="50"></textarea>
              </div>
              <div class="form-group">
                <button class="btn">
                  <i class="bi bi-plus"></i>
                  Add Report
                </button>
              </div>
            </form>
            <hr>
            <h2>
              Recent Reports
            </h2>
            <div class="report-list">
            `  + task.reports.map((report) => `
              <div class="report">
                <div class="report-top">
                <div class="report-profile">
                  <div class="profile-indicator">
                    <img class="profile-image" src="${report.imageUrl}">
                    <div class="profile-name">
                    ${report.name}
                    ${report.surname}
                    </div>
                  </div>
                  <hr>
                  </div>
                  <div class="datetime">
                  ${report.datetime}
                  </div>
                  <div class="status-change-indicator">
                    <div class="task-status">
                      <i class="${report.from} bi bi-circle-fill"></i>
                      <div class="task-status-text">
                  ${report.from === "done" ? "Done" : report.from === "progress" ? "Progress" : report.from === "warning" ? "Warning" : "Idle"}
                      </div>
                    </div>
                    <i class="bi bi-arrow-right"></i>
                    <div class="task-status">
                      <i class="${report.to} bi bi-circle-fill"></i>
                      <div class="task-status-text">
                  ${report.to === "done" ? "Done" : report.to === "progress" ? "Progress" : report.to === "warning" ? "Warning" : "Idle"}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="report-header">${report.title}</h3>
                <p class="report-desc">
                ${report.desc}
                </p>
              </div>`).join("");
    + `</div>`;
    changePage(title, html, pageButton);
    bindFormPreventDefault(getPageRoot());
    bindDropdowns(getPageRoot());
    bindDropdownSelections(getPageRoot());
}



