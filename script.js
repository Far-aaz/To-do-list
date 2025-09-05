let taskinput = document.getElementById("taskinput");
let addbutton = document.getElementById("addbutton");
let tasklist = document.getElementById("tasklist");

let tasks = ["Tugas 1, Tugas 2, Tugas 3"];

function renderTasks() {
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button")
        
       
        li.appendChild(deleteButton);
        tasklist.appendChild(li);
    });
}

function addTask() {
    const task = taskinput.value.trim();
    if (task === "" ) {
        alert("Masukkan tugas");
    }else{
        tasks.push(task);

        renderTasks();
        taskinput.value = "";
    
    }
    }



addbutton.addEventListener("click", addTask)

taskinput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

tasklist.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
        const index = Array.from(tasklist.children).indexOf(e.target.parentElement);
        deleteTask(index);
    }
});

renderTasks();