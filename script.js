const TaskInput = document.getElementById('TaskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
    });
}



function addTask() {

    if (TaskInput.value.trim() === '') {
        alert('Please enter a task.');
    } else {
        const task = TaskInput.value.trim();
        tasks.push(task);
        TaskInput.value = "";
        renderTasks();
    }

}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}



addButton.addEventListener('click', addTask);
TaskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});



renderTasks();