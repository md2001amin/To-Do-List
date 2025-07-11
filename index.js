let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    if (inp.value.trim() === "") return;

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value = "";
});

// Event delegation for delete buttons
ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON" && event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        console.log("Deleting:", listItem.innerText);
        listItem.remove();
    }
});
