let toDoList = [];
        
function addToDo() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    if(task){
        toDoList.push(task);
        taskInput.value = "";
        displayToDos();
    }
}

function removeToDo(index) {
    toDoList.splice(index, 1);
    displayToDos();
}

function displayToDos() {
    let list = document.getElementById("toDoList");
    list.innerHTML = "";
    for (let i = 0; i < toDoList.length; i++) {
        let task = toDoList[i];
        let li = document.createElement("li");
        li.innerHTML = task;
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Delete";
        removeButton.onclick = function() {
            removeToDo(i);
        }
        li.appendChild(removeButton);
        list.appendChild(li);
    }
}




