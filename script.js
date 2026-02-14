const inputvalue = document.getElementById("inputvalue")
const addbtn = document.getElementById("addbtn")
const listcontainer = document.querySelector(".list-container")
const checkBox = document.querySelector(".check-box")
const todoText = document.querySelector(".todo-text")
const delbtn = document.querySelector(".delbtn")

todolist = ["默认样式"]

addbtn.addEventListener("click", () => {
    const value = inputvalue.value.trim()

    todolist.push(value)
    addTodo(value)

    alert(todolist)
    inputvalue.value = ""

})

function renderTodo(){
    todolist.forEach(e => {
        addTodo(e)
    });
}

function addTodo(value) {
    const todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.classList.add("check-box")
    const text = document.createElement("p")
    text.classList.add("todo-text")
    text.textContent = value

    const delbtn = document.createElement("button")
    delbtn.classList.add("delbtn")
    delbtn.textContent = "Delete"

    delbtn.addEventListener("click", () => {
        todoContainer.remove()
        deltodo(value)
    })

    todoContainer.append(checkBox, text, delbtn)
    listcontainer.appendChild(todoContainer)
}

function deltodo(value) {
    const index = todolist.indexOf(value)
    index !== -1 ? todolist.splice(index, 1) : alert("Error")
}

renderTodo()