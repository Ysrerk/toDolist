//selectors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter")



//eventlisteners

todobutton.addEventListener('click', addToDo);
todolist.addEventListener('click', deleteCheck);
filteroption.addEventListener('click', filtertodo);





//functions

function addToDo(event) {
    //event.preventDefault();
    //console.log("merhaba")
    //tododiv
    const toDodiv = document.createElement("div")
        //todo
    toDodiv.classList.add("toDo");
    //createLi
    const newTodo = document.createElement("li")
    newTodo.innerHTML = todoinput.value;
    newTodo.classList.add("todo-item");
    toDodiv.appendChild(newTodo);





    //check button

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('complete-btn');
    toDodiv.appendChild(checkButton);


    ///trashbutton

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash "></i>';
    trashButton.classList.add('trash-btn');
    toDodiv.appendChild(trashButton);


    //Append to list
    todolist.appendChild(toDodiv)
    todoinput.value = "";


}

function deleteCheck(e) {

    const item = e.target;
    //console.log(item)
    if (item.classList[0] === 'trash-btn') {

        const todo = item.parentElement;
        todo.classList.add("fall")

        todo.remove();

    }

    //// burada tiklandiginda sinifini completed yapiyoruz
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')


    }

}

function filtertodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function(todo) {

        switch (e.target.value) {

            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;


        }

    })

}