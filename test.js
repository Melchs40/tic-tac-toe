const gameBoard = (() => {
    const gameBoardArr = ["X", "O", "O", "O", "X", "X", "O", "X", "X"];
    const square = document.getElementsByClassName("square");
    const playerSymbol1 = "X";
    const playerSymbol2 = "O";
    
    // for (let i = 0; i < square.length; i++) {
    //     square[i].addEventListener("click", function changeBoard() {
    //         square[i].textContent = gameBoardArr[i];
    // })}; 
})();

const Player = (name, playerSymbol) => {
    const sayHello = () => {
        alert("Hello, " + name + "!")
    }
    id = 1;
    const changeBoard = () => {
        let squares = document.querySelectorAll(".square");
        let squaresArr = Array.from(squares);
        squaresArr.forEach(item => {
            item.addEventListener("click", function changeBoard() {
                item.textContent = playerSymbol;
                item.disabled = "true";
            })
        })
    };

    return {
        name,
        id,
        playerSymbol,
        sayHello: sayHello,
        changeBoard: changeBoard
    }
};


document.getElementById("submit-button").addEventListener("click", function createPlayer (){
    
    let playerName = document.getElementById("player-name").value;

    let playerSymbol = document.getElementById("player-symbol").value;

    console.log(playerName);
    console.log(playerSymbol);

    let newPlayer = Player(playerName, playerSymbol);

    console.log(newPlayer);

    Player.id++;

    return {
        playerName,
        playerSymbol,
        newPlayer
    }


});




