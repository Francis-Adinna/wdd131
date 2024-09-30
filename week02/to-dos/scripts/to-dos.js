let tasks = [];

function newTasks() {
    const task = document.querySelector("#todo").value;

    tasks.push({detail: task, completed: false});
    renderTasks(tasks)
}

function taskTemplate(task) {
    return `
      <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
          <span data-function="delete">❎</span>
          <span data-function="complete">✅</span>
        </div>
      </li>`
}

function renderTasks(tasks) {
    const listElement = document.querySelector('#todolist');
    listElement.innerHTML = '';
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;

}

function removeTask(taskElement){
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );

    taskElement.remove();
}

function completeTask(taskElement) {
    const taskIndex = task.findIndex(
        (task) => task.detail === taskElement.childNodes[0].innerText
    );

    tasks[taskIndex].completed = tasks[taskIndex].completed ? false: true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event) {
    console.log(event.target);
    console.log(event.currentTarget);
}

document.querySelector('#submitTask').addEventlistner('click', newTasks)