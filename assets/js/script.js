// const florquesecheire = document.getElementsByName("tarefa")
const button = document.querySelector("#addTarefa");
let list = document.querySelector("#list");
let input = document.querySelector("#taskName");
let newTask;
let inputChk;
let taskName;

function addNewTask(){
    newTask = document.createElement('li');
    inputChk = document.createElement('input');

    taskName = input.value;
    inputChk.type = "checkbox";
    inputChk.name = "checkTask";
    newTask.className = "listItem";

    newTask.appendChild(inputChk);
    newTask.appendChild(document.createTextNode(taskName));
    list.appendChild(newTask);
}

button.addEventListener("click", addNewTask);

