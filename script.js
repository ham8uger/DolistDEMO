// 1️⃣ 获取元素
const inputvalue = document.getElementById("inputvalue")
const addbtn = document.getElementById("addbtn")
const listcontainer = document.querySelector(".list-container")

// 2️⃣ 点击添加
addbtn.addEventListener("click", () => {

  // 获取输入内容
  const value = inputvalue.value.trim()

  // 如果为空就不添加
  if (value === "") return

  // 3️⃣ 创建一条 todo
  const todoContainer = document.createElement("div")
  todoContainer.classList.add("todo-container")

  const checkBox = document.createElement("input")
  checkBox.type = "checkbox"

  const text = document.createElement("p")
  text.textContent = value

  const delbtn = document.createElement("button")
  delbtn.textContent = "Delete"

  // 4️⃣ 组合
  todoContainer.append(checkBox, text, delbtn)
  listcontainer.appendChild(todoContainer)

  // 5️⃣ 清空输入框
  inputvalue.value = ""
})
