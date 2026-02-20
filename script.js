// 获取元素
const inputvalue = document.getElementById("inputvalue")
const addbtn = document.getElementById("addbtn")
const listcontainer = document.querySelector(".list-container")

//  点击添加
addbtn.addEventListener("click", () => {

    // 获取输入内容
    const value = inputvalue.value.trim()

    // 如果为空就不添加
    if (value === "") return

    //  创建一条 todo
    const todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.classList.add("check-box")

    checkBox.addEventListener("change", () => {
        (checkBox.checked) ? text.style.textDecoration = "line-through" : text.style.textDecoration = "none"
        let checkNum = 0
        const checkall = document.querySelectorAll(".check-box")

        checkall.forEach(element => {
            if (element.checked) {
                checkNum ++
            }
        });
        alert("已完成" + checkNum)
    })

    const text = document.createElement("p")
    text.textContent = value

    const delbtn = document.createElement("button")
    delbtn.textContent = "Delete"

    delbtn.addEventListener("click", () => {
        if (confirm("确定删除么 ?"))
            // 

            todoContainer.remove()
    })

    //  组合
    todoContainer.append(checkBox, text, delbtn)
    listcontainer.appendChild(todoContainer)

    //  清空输入框
    inputvalue.value = ""
})

// Enter 添加
inputvalue.addEventListener("keydown", (e) => {
    if (e.key === "Enter")  addbtn.click() 
})
