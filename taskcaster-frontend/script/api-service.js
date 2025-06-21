// This file includes a mock API service class definition
// using localStorage

const people = [
  {
    id: "1",
    profileUrl:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    name: "John Doe",
  },
  { id: "2", profileUrl: "https://i.pravatar.cc/150?img=29", name: "Jane Doe" },
  {
    id: "3",
    profileUrl: "https://i.pravatar.cc/150?img=18",
    name: "Adam Smith",
  },
];
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class ApiService {
  async addReport(taskId, personId, status, assignee, title, desc) {
    const date = Date.now();
    const reports = JSON.parse(localStorage.getItem("reports")) ?? [];
    const task = await this.getTask(taskId);
    reports.push({
      id: Date.now().toString(),

      title: title.trim(),
      desc: desc.trim(),
      from: task.status,
      datetime: Date.now(),
      personId,
      to: status,
      assignee,
      status,
      taskId,
    });
    localStorage.setItem("reports", JSON.stringify(reports));

    await this.syncTask(
      task.id,
      task.projectId,
      task.name,
      task.desc,
      status,
      assignee
    );
  }
  async syncProject(id, name, desc) {
    if (!id) {
      id = Date.now().toString();
    }

    const nameExists = (await this.getProjects()).some(
      (project) =>
        project.name.toLowerCase() === name.toLowerCase().trim() &&
        project.id !== id
    );
    if (nameExists) return { error: true, name: "Project name exists!" };
    const project = { id, name: name.trim(), desc: desc.trim() };
    const projects = JSON.parse(localStorage.getItem("projects")) ?? [];
    const projectFound = projects.find((project) => project.id === id);
    if (projectFound) {
      projectFound.name = project.name;
      projectFound.desc = project.desc;
    } else projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
    return { error: false };
  }

  async syncTask(id = undefined, projectId, name, desc, status, assignee) {
    if (!id) {
      id = Date.now().toString();
    }
    const nameExists = (await this.getTasks()).some(
      (task) =>
        task.name.toLowerCase() === name.toLowerCase().trim() &&
        task.projectId === projectId &&
        task.id !== id
    );
    if (nameExists) return { error: true, name: "Task name exists!" };
    const task = {
      id,
      projectId,
      name: name.trim(),
      desc: desc.trim(),
      status,
      assignee,
    };
    const tasks = await this.getTasks();
    const taskFound = tasks.find((task) => task.id === id);
    if (taskFound) {
      taskFound.name = task.name;
      taskFound.desc = task.desc;
      taskFound.status = status;
      taskFound.assignee = assignee;
    } else tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return { error: false, id };
  }

  async getTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    return tasks;
  }
  async getAssignedTasks() {
    const tasks = await this.getTasks();
    return tasks.filter((task) => task.assignee === "1");
  }
  async getProjects() {
    const projects = JSON.parse(localStorage.getItem("projects")) ?? [];
    return projects;
  }
  async getTask(id) {
    const tasks = await this.getTasks();
    return tasks.find((task) => task.id === id);
  }
  async getProject(id) {
    const projects = await this.getProjects();
    return projects.find((project) => project.id === id);
  }
  async getProjectTasks(id) {
    const tasks = await this.getTasks();
    return tasks.filter((task) => task.projectId === id);
  }

  async getPeople() {
    return people;
  }

  async removeTask(id) {
    let tasks = await this.getTasks();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let reports = await this.getReports(id);
    reports = reports.filter((report) => report.taskId !== id);
    localStorage.setItem("reports", JSON.stringify(reports));
  }

  async removeProject(id) {
    let projects = await this.getProjects();
    projects = projects.filter((project) => project.id !== id);
    const tasks = await this.getProjectTasks(id);
    for (const task of tasks) {
      await this.removeTask(task.id);
    }
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  async getPerson(id) {
    const people = await this.getPeople();
    return people.find((person) => person.id === id);
  }
  async getReports(taskId) {
    const reports = JSON.parse(localStorage.getItem("reports")) ?? [];
    const arr = reports
      .filter((report) => report.taskId === taskId)
      .sort(
        (report1, report2) =>
          -(new Date(report1.datetime) - new Date(report2.datetime))
      );
    await arr.forEach(async (report) => {
      report.datetime = new Date(report.datetime).toLocaleString();
      report.person = await this.getPerson(report.personId);
    });
    return arr;
  }
}
const projects = `[{"id":"1750464411532","name":"Web Application Project","desc":"This is the term project for Web Tech course on KOU."}]`;
const reports = `[{"id":"1750464505782","title":"I am dealing with this","desc":"I will use figma.","from":"idle","datetime":1750464505782,"personId":"1","to":"progress","assignee":"1","status":"progress","taskId":"1750464467965"},{"id":"1750464526047","title":"UI Design complete!","desc":"We should move on with frontend!","from":"progress","datetime":1750464526047,"personId":"1","to":"done","assignee":"1","status":"done","taskId":"1750464467965"},{"id":"1750464581706","title":"Pure Javascript","desc":"I will use pure javascript without any libraries or frameworks","from":"idle","datetime":1750464581706,"personId":"1","to":"progress","assignee":"1","status":"progress","taskId":"1750464553752"},{"id":"1750464606936","title":"Frontend Done","desc":"Frontend is completed","from":"progress","datetime":1750464606936,"personId":"1","to":"done","assignee":"1","status":"done","taskId":"1750464553752"}]`;
const tasks = `[{"id":"1750464467965","projectId":"1750464411532","name":"UI Design","desc":"We should make an UI design for taskcaster.","status":"done","assignee":"1"},{"id":"1750464553752","projectId":"1750464411532","name":"Frontend","desc":"Coding for frontend","status":"done","assignee":"1"},{"id":"1750464673237","projectId":"1750464411532","name":"Submission of project","desc":"We should submit project to edestek2","status":"progress","assignee":"1"},{"id":"1750464716780","projectId":"1750464411532","name":"Result","desc":"We are waiting for the project submission results","status":"idle","assignee":"1"}]`;
if (!localStorage.getItem("loadedfirst")) {
  localStorage.setItem("tasks", tasks);
  localStorage.setItem("reports", reports);
  localStorage.setItem("projects", projects);
  localStorage.setItem("loadedfirst", "yes");
}

const apiService = new ApiService();
