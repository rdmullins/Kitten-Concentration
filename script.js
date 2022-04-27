let kittenArray = ["", "", "", "", "", "", "", "", "", ""];

const startGame = () => {
    console.log("Starting game!");
    removeButton();
    buildBoard();
    getKittens();
}

const removeButton = () => {
    let e = document.getElementById("startButton");
    e.parentNode.removeChild(e);
}

const buildBoard = () => {
    for (let i=1; i<21; i++) {
        let e = document.getElementById("gameBoard");
        let card = document.createElement("div");
        card.classList.add("catcard");
        card.id = i;
        card.innerText = "KC";
        e.appendChild(card);
    }
}

const getKittens = () => {
    for (let i=0; i<10, i++) {
        
    }
}