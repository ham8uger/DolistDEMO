const doneContainer = document.getElementById("done-container")

window.Done = {
    add(text) {
        const card = document.createElement("div");
        card.className = "show-card done";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;
        checkbox.disabled = true;

        const span = document.createElement("span");
        span.className = "showtext";
        span.textContent = text;

        card.append(checkbox, span)
        doneContainer.append(card)

    }
}


if (!doneContainer) {
    throw new Error("Missing #done-container")
}

function getDones() {
    try {
        return JSON.parse(localStorage.getItem("dones")) || []
    } catch (e) {
        return []
    }
}

function renderDones() {
    doneContainer.innerHTML = ""
    const dones = getDones()

    if (dones.length === 0) {
        const empty = document.createElement("div");
        empty.className = "show-card done";
        empty.textContent = "暂无已完成事项";
        doneContainer.append(empty);
        return;
    }

    dones.forEach((text) => {
        const card = document.createElement("div");
        card.className = "show-card done";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;
        checkbox.disabled = true;

        const span = document.createElement("span");
        span.className = "showtext";
        span.textContent = text;

        card.append(checkbox, span);
        doneContainer.append(card);
    });
}

// 页面打开就渲染
renderDones();