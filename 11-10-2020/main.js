var taskLists = [];
var inputTask;
var nodeUl = document.getElementById('lists');

taskLists = JSON.parse(localStorage.getItem('task'));

console.log(taskLists);

function common() {
    var taskString = '', taskListLength = taskLists.length;
    for (let index = 0; index < taskListLength; index++) {
        taskString += '<li class="list-group-item">'+ taskLists[index] +'</li>';   
    }
    nodeUl.innerHTML = taskString;
}

common();
function addNew() {
    inputTask = document.getElementById('task').value;
    taskLists.unshift(inputTask);
    localStorage.setItem('task', JSON.stringify(taskLists));
    common();   
}

