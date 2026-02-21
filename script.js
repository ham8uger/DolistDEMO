// 获取元素
const inputvalue = document.getElementById("inputvalue")
const addbtn = document.getElementById("addbtn")
const allbtn = document.getElementById("allbtn")
const clearbtn = document.getElementById("clearbtn")
const listcontainer = document.querySelector(".list-container")

// 建立数据对象
let nextId = 1
let todos = [{ id: nextId++, text: "待办事项展示", done: false }]

// 全部选择
allbtn.addEventListener("click", () => {
    const alldone = todos.every(t => t.done)
    // every -- 所有的元素检查都是 true - t.done

    todos.forEach(todo => {
        todo.done = !alldone
    });

    savetodos()
    render()
})

clearbtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.done)


    savetodos()
    render()
})

function nodoNum() {
    // 未完成数量
    const notodoNum = document.querySelector(".notodoNum")
    if(!notodoNum) return

    const nodoNum = todos.filter(t => !t.done).length
    notodoNum.textContent = "未完成数量" + nodoNum
}

//  点击添加
addbtn.addEventListener("click", () => {

    // 获取输入内容
    const value = inputvalue.value.trim()

    // 如果为空就不添加
    if (value === "") return

    todos.push({ id: nextId++, text: value, done: false })

    savetodos()
    render()

    //  清空输入框
    inputvalue.value = ""
})

// Enter 添加
inputvalue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addbtn.click()
})

function render() {
    listcontainer.innerHTML = ""

    nodoNum()

    const checkNum = todos.filter(t => t.done).length
    console.log("已完成" + checkNum)

    todos.forEach((todo) => {
        //  创建一条 todo
        const todoContainer = document.createElement("div")
        todoContainer.classList.add("todo-container")
        todoContainer.dataset.id = todo.id

        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.classList.add("check-box")
        checkBox.checked = todo.done
        checkBox.addEventListener("change", () => {
            const id = Number(todoContainer.dataset.id)

            // todos[index].done = checkBox.checked
            // 更新数据
            // 重新渲染数据
            // id 检查
            const item = todos.find(t => t.id === id)
            if (item) {
                item.done = checkBox.checked
            }
            savetodos()
            render()
        })

        const text = document.createElement("p")
        text.textContent = todo.text
        text.style.textDecoration = todo.done ? "line-through" : "none"

        const delbtn = document.createElement("button")
        delbtn.textContent = "Delete"
        delbtn.addEventListener("click", () => {
            // if (!confirm("确定删除么 ?")) return;
            // todos.splice(index, 1)
            // render()
            // 根据id删除
            const i = todos.findIndex(t => t.id == todo.id)
            // i 是当前数据在todos的实时位置
            // console.log("已删除"+i)




            if (i != -1) {
                todos.splice(i, 1)



                savetodos()
                render()
            }
        })
        //  组合
        todoContainer.append(checkBox, text, delbtn)
        listcontainer.appendChild(todoContainer)
    })
}

// 本地化
function savetodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
    localStorage.setItem("nextid", String(nextId))
}
// 刷新读取
function loadTodos() {
    const saved = localStorage.getItem("todos")
    const savedNextId = localStorage.getItem("nextid")

    if (saved) todos = JSON.parse(saved)
    if (savedNextId) nextId = Number(savedNextId)
}

loadTodos()
render()
