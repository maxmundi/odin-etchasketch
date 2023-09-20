function addListeners() {
    const cellNodes = document.querySelectorAll(".cell");
    for (let i = 0; i < cellNodes.length; i++) {
        cellNodes[i].addEventListener("mouseover", function (e) {
            cellNodes[i].classList.replace("cell", "color");
            const firstValue = Math.random() * 250;
            const secondValue = Math.random() * 250;
            const thirdValue = Math.random() * 250;
            cellNodes[i].style.backgroundColor = "rgb(" + firstValue + "," + secondValue + "," + thirdValue + ")";
        })
    }
}

function firstPad(cells) {
    const pad = document.querySelector("#pad");

    for (i = 0; i < cells; ++i) {
        const row = document.createElement("div");
        row.className += "row";
        for (j = 0; j < cells; ++j) {
            const cell = document.createElement("div");
            cell.className += "cell";
            row.appendChild(cell);
        }
        pad.appendChild(row);
    }
    addListeners();
}

function newPad() {
    let cells = prompt("How many rows and columns should the new pad have? (Enter a number between 16-100");
    const pad = document.querySelector("#pad");
    pad.replaceChildren();
    firstPad(cells);
}

firstPad(50);
document.querySelector("button").addEventListener("click", () => newPad());