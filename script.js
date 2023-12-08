const textBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addText() {
    if (textBox.value === '') {
        alert("you must enter an text first");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "+";
        li.appendChild(span);
    }
    textBox.value = '';
    saveData();   
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

showTask();

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}