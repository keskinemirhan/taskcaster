// Creates home page element.
async function getTaskForm(projectId, id = undefined) {
  let formData = {
    id: undefined,
    projectId,
    name: "",
    desc: "",
    status: "idle",
    assignee: undefined,
  };
  if (id) {
    formData = await apiService.getTask(id);
  }
  const people = await apiService.getPeople();
  const titleElement = createElement(`
    <div class="header-title">
            <div class="title-text"> 
            ${id ? "Edit Task: " + formData.name : "Add Task"}
            </div> 
    </div>
        `);
  const pageElement = createElement(
    `
              <div class="main-screen">
            <form class="item-form">
              <div class="form-group">
                <label for="status-btn">Status</label>
                <div class="dropdown selection">
                  <input hidden id="task-status" type="text" name="status" value="${
                    id ? formData.status : "idle"
                  }" />
                  <button id="status-btn" class="btn dropbtn"></button>
                  <div class="dropdown-content">
                    <div class="drop-header">Select Status</div>
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
                <label for="assignees-button">Assignee</label>
                <div class="dropdown selection">
                  <input hidden id="task-assignee" type="text" name="assignee" value="${
                    id ? formData.assignee : "1"
                  }" />
                  <button id="status-btn" class="btn dropbtn"></button>
                  <div class="dropdown-content">
                  <div class="drop-header">Select Assignee</div>
                  ` +
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
                <label for="report-title">Task Name</label>
                <p id="task-name-err" class="form-error"><p>
                <input
                  type="text"
                  id="task-name"
                  name="task-name"
                  placeholder="Enter Name..."
                  value="${formData.name}"
                />
              </div>
              <div class="form-group">
                <label for="report-desc">Task Description</label>
                <p id="task-desc-err" class="form-error"><p>
                <textarea
                  rows="4"
                  placeholder="Enter Description..."
                  id="task-desc"
                  name="task-desc"
                  cols="50"
                >${formData.desc}</textarea>
              </div>
              <div class="form-group">
                <button class="btn add-task-btn">
                  <i class="bi bi-plus"></i>
                  ${id ? "Edit Task" : "Add Task"}
                </button>
                ${
                  id
                    ? `<button class="btn btn-remove remove-task-btn">
                      <i class="bi bi-trash"></i>
                      Remove Task
                    </button>
                  `
                    : ""
                }

              </div>
            </form>
          </div>
    `
  );
  const addTaskBtn = pageElement.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let error = false;
    const nameErr = pageElement.querySelector("#task-name-err");
    nameErr.innerText = "";
    const name = pageElement.querySelector("#task-name").value.trim();
    if (!name || name === "") {
      nameErr.innerText = "Name is required!";
      error = true;
    }
    const descErr = pageElement.querySelector("#task-desc-err");
    descErr.innerText = "";
    const desc = pageElement.querySelector("#task-desc").value.trim();
    if (!desc || desc === "") {
      descErr.innerText = "Description is required!";
      error = true;
    }
    const status = pageElement.querySelector("#task-status").value;
    const assignee = pageElement.querySelector("#task-assignee").value;
    if (!error) {
      const res = await apiService.syncTask(
        id,
        projectId,
        name,
        desc,
        status,
        assignee
      );

      if (res.error) {
        descErr.innerText = res.desc ?? "";
        nameErr.innerText = res.name ?? "";
      } else {
        await syncPanel();
        getTaskPage(res.id);
      }
    }
  });
  const removeTaskBtn = pageElement.querySelector(".remove-task-btn");
  if (removeTaskBtn) {
    removeTaskBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await apiService.removeTask(id);
      syncPanel();
      getProjectPage(projectId);
    });
  }
  changePage("addtask", "addtask", titleElement, pageElement);
  bindFormPreventDefault(getPageRoot());
  bindDropdowns(getPageRoot());
  bindDropdownSelections(getPageRoot());
}
