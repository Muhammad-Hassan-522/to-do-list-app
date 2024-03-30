const inputBox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '' || inputBox.value === ' ') {
        alert ("Input field can't be empty!!!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
}

listConatiner.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false)

function saveData () {
    localStorage.setItem("data", listConatiner.innerHTML);
}

function displayData () {
    listConatiner.innerHTML = localStorage.getItem ("data");
}

displayData();