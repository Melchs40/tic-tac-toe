const gameBoard = (() => {
    const gameBoardArr = ["", "", "", "", "", "", "", "", ""];
    const square = document.getElementsByClassName("square");
    const playerSymbol1 = "X";
    const playerSymbol2 = "O";
    
    // for (let i = 0; i < square.length; i++) {
    //     square[i].addEventListener("click", function changeBoard() {
    //         square[i].textContent = gameBoardArr[i];
    // })}; 
})();

const players = [];

const Player = (name, playerSymbol) => {

    const sayHello = () => {
        alert("Hello, " + name + "!")
    }
    players.push([name, playerSymbol]);

    const changeBoard = () => {
        let squares = document.querySelectorAll(".square");
        let squaresArr = Array.from(squares);
        squaresArr.forEach(item => {
            item.addEventListener("click", function changeBoard() {
                item.textContent = activePlayer[1];
                item.classList.add(activePlayer[1]);
                item.disabled = "true";
                switchPlayerTurn();
            })
        })
    };

    return {
        name,
        playerSymbol,
        players,
        sayHello: sayHello,
        changeBoard: changeBoard
    }
};


document.getElementById("submit-button").addEventListener("click", function createPlayer (){
    
    let playerName = document.getElementById("player-name").value.toLowerCase();
    let playerSymbol = document.getElementById("player-symbol").value;
    let newPlayer = Player(playerName, playerSymbol);

    console.log(playerName);
    console.log(playerSymbol);
    console.log(newPlayer);

    return {
        playerName,
        playerSymbol,
        newPlayer
    }
});

let sam = Player("sam", "X");
let john = Player("john", "O");

let activePlayer = players[0];
const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

sam.changeBoard();

playGame = () => {
    
    let activePlayer = players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
      };

    const changeBoard = () => {
        let squares = document.querySelectorAll(".square");
        let squaresArr = Array.from(squares);
        squaresArr.forEach(item => {
            item.addEventListener("click", function changeBoard() {
                item.textContent = activePlayer.symbol;
                item.disabled = "true";
                switchPlayerTurn();
            })
        })
    };

    return {
        activePlayer,
        switchPlayerTurn: switchPlayerTurn,
        changeBoard: changeBoard
    }
};

let game = playGame();




