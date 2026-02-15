const inputvalue = document.getElementById("inputvalue")
const addbtn = document.getElementById("addbtn")
const showbtn = document.getElementById("showbtn")
const listcontainer = document.querySelector(".list-container")
const todoText = document.querySelector(".todo-text")
const delbtn = document.querySelector(".delbtn")


addbtn.addEventListener("click", () => {
    const value = inputvalue.value.trim()

    todolist.push(value)
    addTodo(value)

    alert(todolist)
    inputvalue.value = ""
})

showbtn.addEventListener("click", () => {
    readytodo = ["已完成事项"]

    const checkBox = document.querySelectorAll(".check-box")
    checkBox.forEach((e, index) => {
        if (e.checked) {
            const todoText = document.querySelectorAll(".todo-text")[index].textContent
            readytodo.push(todoText)
        }
    });
    todolist = [...readytodo]

    listcontainer.innerHTML = ""
    renderTodo()


})

function renderTodo() {
    todolist = ["默认样式"]
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
    const todo = todolist.indexOf(value)
    index !== -1 ? todolist.splice(todo, 1) : alert("Error")

    const ready = readytodo.indexOf(value)
    index !== -1 ? readytodo.splice(ready, 1) : alert("Error")
}

renderTodo()