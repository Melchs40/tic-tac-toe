const gameBoard = (() => {
    const gameBoardArr = [];
    const square = document.getElementsByClassName("square");
    const playerSymbolArr = ["X", "O"];
    
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function changeBoard() {
            square[i].textContent = playerSymbolArr[1];
            gameBoardArr[i] = playerSymbolArr[1];
    })}; 
})();

const Player = (name) => {
    const sayHello = () => {
        alert("Hello, " + name + "!")
    }
    return {
        name,
        sayHello: sayHello,
    }
};

document.getElementById("submit-button").addEventListener("click", function createPlayer (){
    
    let playerName = document.getElementById("player-name").value;
    console.log(playerName);

    const Player = (name) => {
        const playerId = 1;
        playerId++;
        const sayHello = () => {
            alert("Hello, " + name + "!")
        }
        return {
            name,
            playerId,
            sayHello: sayHello,
        }
    };


});




