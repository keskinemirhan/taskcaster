// Creates task page element.
async function getTaskPage(id) {
  const task = await apiService.getTask(id);
  const reports = await apiService.getReports(id);
  const project = await apiService.getProject(task.projectId);
  const assignee = await apiService.getPerson(task.assignee);
  const people = await apiService.getPeople();
  const titleElement = createElement(`
                <div class="task-status">
                  <i class="${task.status} bi bi-circle-fill"></i>
                  <div class="task-status-text">
                  ${task.name}
                  </div>
                </div>

        `);
  const pageElement = createElement(
    `
            <div class="main-screen" > 
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
                  ${
                    task.status === "done"
                      ? "Done"
                      : task.status === "progress"
                      ? "Progress"
                      : task.status === "warning"
                      ? "Warning"
                      : "Idle"
                  }
                  </div>
                </div>
              </div>
              <div class="task-actions">
                <div>
                  <button class="btn">
                      <img class="profile-image" src="${assignee.profileUrl}">
                      <div class="profile-name">
                        ${assignee.name}
                      </div>
                    
                  </button>
                </div>
                <button class="btn edit-task-btn">
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
                  <input hidden id="report-status" type="text" name="status" value="${
                    task.status
                  }">
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
                <div class="dropdown selection">
                  <input hidden id="report-assignee" type="text" name="assignee" value="${
                    assignee.id
                  }" />
                  <button id="assignees-button" class="dropbtn btn">
                  </button>
                  <div class="dropdown-content">
                    <div class="drop-header">
                      Select Assignee
                    </div>` +
      people
        .map(
          (
            person
          ) => `<div value="${person.id}" class="dropdown-item profile-indicator">
                      <img class="profile-image" src="${person.profileUrl}">
                      <div class="profile-name">
                        ${person.name}
                      </div>
                    </div>`
        )
        .join("") +
      `
 
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="report-title">Report Title</label>
                <p id="report-title-err" class="form-error"><p>
                <input type="text" id="report-title" name="title" placeholder="Enter Title...">
              </div>
              <div class="form-group">
                <label for="report-desc">Report Description</label>
                <p id="report-desc-err" class="form-error"><p>
                <textarea rows="4" placeholder="Enter Description..." id="report-desc" name="report-desc" cols="50"></textarea>
              </div>
              <div class="form-group">
                <button class="btn add-report-btn">
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
            ` +
      reports
        .map(
          (report) => `
              <div class="report">
                <div class="report-top">
                <div class="report-profile">
                  <div class="profile-indicator">
                    <img class="profile-image" src="${
                      report.person.profileUrl
                    }">
                    <div class="profile-name">
                    ${report.person.name}
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
                  ${
                    report.from === "done"
                      ? "Done"
                      : report.from === "progress"
                      ? "Progress"
                      : report.from === "warning"
                      ? "Warning"
                      : "Idle"
                  }
                      </div>
                    </div>
                    <i class="bi bi-arrow-right"></i>
                    <div class="task-status">
                      <i class="${report.to} bi bi-circle-fill"></i>
                      <div class="task-status-text">
                  ${
                    report.to === "done"
                      ? "Done"
                      : report.to === "progress"
                      ? "Progress"
                      : report.to === "warning"
                      ? "Warning"
                      : "Idle"
                  }
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="report-header">${report.title}</h3>
                <p class="report-desc">
                ${report.desc}
                </p>
              </div>`
        )
        .join("") +
      `</div></div>`
  );
  const editTaskBtn = pageElement.querySelector(".edit-task-btn");
  const addReportBtn = pageElement.querySelector(".add-report-btn");
  addReportBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let error = false;
    const titleErr = pageElement.querySelector("#report-title-err");
    titleErr.innerText = "";
    const title = pageElement.querySelector("#report-title").value.trim();
    if (!title || title === "") {
      titleErr.innerText = "Title is required!";
      error = true;
    }
    const descErr = pageElement.querySelector("#report-desc-err");
    descErr.innerText = "";
    const desc = pageElement.querySelector("#report-desc").value.trim();
    const assignee = pageElement.querySelector("#report-assignee").value;
    const status = pageElement.querySelector("#report-status").value;
    if (!desc || desc === "") {
      descErr.innerText = "Description is required!";
      error = true;
    }
    if (!error) {
      const res = await apiService.addReport(
        id,
        "1",
        status,
        assignee,
        title,
        desc
      );
      syncPanel();
      getTaskPage(id);
    }
  });
  editTaskBtn.addEventListener("click", (e) => {
    getTaskForm(project.id, task.id);
  });
  changePage(id, "task", titleElement, pageElement);
  bindFormPreventDefault(getPageRoot());
  bindDropdowns(getPageRoot());
  bindDropdownSelections(getPageRoot());
}
