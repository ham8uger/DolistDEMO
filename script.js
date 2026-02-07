const inputvalue = document.querySelector(".inputvalue");
const addbtn = document.getElementById("addbtn");
const todoListEl = document.getElementById("todo-list");

function getDones(){
  try { return JSON.parse(localStorage.getItem("dones")) || []; }
  catch (e) { return []; }
}
function saveDones(dones){
  localStorage.setItem("dones", JSON.stringify(dones));
}

/** 渲染一条 Todo 到页面 */
function appendTodoItem(text){
  // list-group-item
  const item = document.createElement("div");
  item.className = "list-group-item";

  const row = document.createElement("div");
  row.className = "task-item";

  const left = document.createElement("div");
  left.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input task-check";

  const spantext = document.createElement("span");
  spantext.className = "showtext task-text";
  spantext.textContent = text;

  left.append(checkbox, spantext);

  const actions = document.createElement("div");
  actions.className = "task-actions";

  // 删除按钮（只删页面这条 todo）
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn btn-outline-danger btn-icon";
  deleteBtn.setAttribute("aria-label", "Delete");
  deleteBtn.innerHTML = `<i class="bi bi-trash"></i>`;

  deleteBtn.addEventListener("click", () => {
    item.remove();
  });

  actions.append(deleteBtn);

  row.append(left, actions);
  item.append(row);
  todoListEl.append(item);

  // 勾选：写入 dones，并从 todo 列表移除
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      const dones = getDones();
      dones.push(spantext.textContent);
      saveDones(dones);
      item.remove();
    }
  });
}

// 回车添加
inputvalue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addbtn.click();
});

// 点击 + 添加
addbtn.addEventListener("click", () => {
  const value = inputvalue.value.trim();
  if (!value) return;

  appendTodoItem(value);
  inputvalue.value = "";
});
