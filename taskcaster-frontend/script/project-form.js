// Creates home page element.
async function getProjectForm(id = undefined) {
  let formData = {
    id: undefined,
    name: "",
    desc: "",
  };
  if (id) {
    formData = await apiService.getProject(id);
  }

  const titleElement = createElement(`
    <div class="header-title">
            <div class="title-text"> 
    ${id ? "Edit Project: " + formData.name : "Create Project"}
            </div> 
    </div>
        `);
  const pageElement = createElement(`
    <div class="main-screen">
          <form class="item-form">
            <div class="form-group">
              <label for="project-name">Project Name</label>
              <p id="project-name-err" class="form-error"><p>
              <input
                type="text"
                id="project-name"
                name="project-name"
                placeholder="Enter Title..."
                value="${formData.name}"
              />
            </div>
            <div class="form-group">
              <label for="project-desc">Project Description</label>
              <p id="project-desc-err" class="form-error"><p>
              <textarea
                rows="4"
                placeholder="Enter Description..."
                id="project-desc"
                name="project-desc"
                cols="50"
              >${formData.desc}</textarea>
            </div>
            <div class="form-group">
              <button class="btn form-project-btn">
                <i class="bi bi-plus"></i>
                ${id ? "Update Project" : "Add Project"}
              </button>
              ${
                id
                  ? `<button class="btn btn-remove remove-project-btn">
                  <i class="bi bi-trash"></i>
                  Remove Project
              </button>`
                  : ""
              }
              
            </div>
          </form>
      </div>
        `);
  const formProjectBtn = pageElement.querySelector(".form-project-btn");
  formProjectBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let error = false;
    const nameErr = pageElement.querySelector("#project-name-err");
    nameErr.innerText = "";
    const name = pageElement.querySelector("#project-name").value.trim();
    if (!name || name === "") {
      nameErr.innerText = "Name is required!";
      error = true;
    }
    const descErr = pageElement.querySelector("#project-desc-err");
    descErr.innerText = "";
    const desc = pageElement.querySelector("#project-desc").value.trim();
    if (!desc || desc === "") {
      descErr.innerText = "Description is required!";
      error = true;
    }
    if (!error) {
      const res = await apiService.syncProject(id, name, desc);

      if (res.error) {
        descErr.innerText = res.desc ?? "";
        nameErr.innerText = res.name ?? "";
      } else {
        syncPanel();
        getHomePage();
      }
    }
  });
  const removeProjectBtn = pageElement.querySelector(".remove-project-btn");
  if (removeProjectBtn) {
    removeProjectBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      await apiService.removeProject(id);
      await syncPanel();
      getHomePage();
    });
  }
  changePage(id, "project", titleElement, pageElement);
}
