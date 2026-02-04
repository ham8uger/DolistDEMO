const inputvalue = document.querySelector(".inputvalue")
const addbtn = document.getElementById("addbtn")
const listcontainer = document.getElementById("list-container")

// const textnode = document.querySelector("h1")
// console.log(textnode.dataset.one)
// console.log(textnode.dataset.two="change this text")
// console.log(textnode.dataset)

// element.classList.toggle("box"，根据布尔值确定是否创建) 存在删除不存在创建
// 
function createElement(inputvalue) {
    var showcontainer = document.createElement("div")
    showcontainer.className = "show-container"

    var showcard = document.createElement("div")
    showcard.className = "show-card"

    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"


    var spantext = document.createElement("span")
    spantext.className = "showtext"
    spantext.textContent = inputvalue.value



    showcard.append(checkbox, spantext)
    showcontainer.append(showcard)
    listcontainer.append(showcontainer)


    inputvalue.addEventListener("keydown",(e) => {
        if(e.key === "Enter") {
            addbtn.click()
        }
    })

    checkbox.addEventListener("click", () => {
        if (checkbox.checked == true) {
            listcontainer.removeChild(showcontainer)
        }
    })
}

addbtn.addEventListener("click", () => {
    if (inputvalue.value !== "") {
        createElement(inputvalue)
        inputvalue.value = ""
        // 光标回到输入栏
        // inputvalue.focus() 
    } else {
        alert("input is null")
    }
})

