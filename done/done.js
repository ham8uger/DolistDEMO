const doneContainer = document.getElementById("done-container");

if (!doneContainer) {
  throw new Error("Missing #done-container");
}

function getDones() {
  try { return JSON.parse(localStorage.getItem("dones")) || []; }
  catch (e) { return []; }
}
function saveDones(dones) {
  localStorage.setItem("dones", JSON.stringify(dones));
}

function renderDones() {
  doneContainer.innerHTML = "";
  const dones = getDones();

  if (dones.length === 0) {
    const empty = document.createElement("div");
    empty.className = "list-group-item text-secondary small";
    empty.textContent = "暂无已完成事项";
    doneContainer.append(empty);
    return;
  }

  dones.forEach((text, index) => {
    const item = document.createElement("div");
    item.className = "list-group-item";

    const row = document.createElement("div");
    row.className = "task-item";

    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input task-check";
    checkbox.checked = true;
    checkbox.disabled = true;

    const span = document.createElement("span");
    span.className = "showtext task-text";
    span.textContent = text;

    left.append(checkbox, span);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    // 删除（从 localStorage 删除对应 index）
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn btn-outline-danger btn-icon";
    deleteBtn.setAttribute("aria-label", "Delete");
    deleteBtn.innerHTML = `<i class="bi bi-trash"></i>`;

    deleteBtn.addEventListener("click", () => {
      const arr = getDones();
      arr.splice(index, 1);
      saveDones(arr);
      renderDones(); // 重新渲染保持 index 正确
    });

    actions.append(deleteBtn);

    row.append(left, actions);
    item.append(row);

    // done 样式标记（用于划线变灰）
    item.classList.add("done");

    doneContainer.append(item);
  });
}

renderDones();
