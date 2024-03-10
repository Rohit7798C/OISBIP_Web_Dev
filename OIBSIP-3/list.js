let tasks=[];
let completedTasks=[];
function AddTask()
{
    const taskInput=document.getElementById("taskInput");
    const taskText=taskInput.value.trim();
    if(taskText!=="")
    {
        const task={
text:taskText,
addedAt: new Date(),
            completed:false
        };
        tasks.push(task);
        taskInput.value="";
        updateTaskLists();
    }
}

function updateTaskLists() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
  
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";
  
  
    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.checked = task.completed;
      checkBox.addEventListener("change", () => {
        toggleTaskCompletion(index);
      });
  
      const taskText = document.createElement("span");
      taskText.innerText = task.text;
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteTask(index);
      });
  
      listItem.appendChild(checkBox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteButton);
  
      if (task.completed) {
        listItem.classList.add("completed");
        completedTasksList.appendChild(listItem);
      } else {
        pendingTasksList.appendChild(listItem);
      }
    });
  }
 function toggleTaskCompletion(index)
{
    tasks[index].completed=! tasks[index].completed;
    updateTaskLists();

}

function deleteTask(index)
{
    tasks.splice(index,1);
    updateTaskLists();

}
updateTaskLists();