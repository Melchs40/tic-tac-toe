const gameBoard = (() => {
    const gameBoardArr = ["", "", "", "", "", "", "", "", ""];
    const square = document.getElementsByClassName("square");
    const playerSymbol1 = "X";
    const playerSymbol2 = "O";
    const players = [];

    // for (let i = 0; i < square.length; i++) {
    //     square[i].addEventListener("click", function changeBoard() {
    //         square[i].textContent = gameBoardArr[i];
    // })}; 
    return {
        gameBoardArr,
        players
    }
})();



const Player = (name, playerSymbol) => {

    const sayHello = () => {
        alert("Hello, " + name + "!")
    }
    gameBoard.players.push([name, playerSymbol]);

    const changeBoard = () => {
        let squares = document.querySelectorAll(".square");
        let squaresArr = Array.from(squares);
        squaresArr.forEach(item => {
            item.addEventListener("click", function changeBoard() {
                item.textContent = activePlayer[1];
                item.classList.add(activePlayer[1]);
                gameBoard.gameBoardArr[item.id] = activePlayer[1];
                item.disabled = "true";
                switchPlayerTurn();
                document.getElementById("player-announce").textContent = `It is ${activePlayer[1]}'s turn`;
            })
        })
    };

    return {
        name,
        playerSymbol,
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

let playerOne = Player("Player 1", "X");
let playerTwo = Player("Player 2", "O");

playerOne.changeBoard();

let activePlayer = gameBoard.players[0];
const switchPlayerTurn = () => {
    activePlayer = activePlayer === gameBoard.players[0] ? gameBoard.players[1] : gameBoard.players[0];
  };



playGame = () => {
    
    let activePlayer = gameBoard.players[0];
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === gameBoard.players[0] ? gameBoard.players[1] : gameBoard.players[0];
      };

    // const changeBoard = () => {
    //     let squares = document.querySelectorAll(".square");
    //     let squaresArr = Array.from(squares);
    //     squaresArr.forEach(item => {
    //         item.addEventListener("click", function changeBoard() {
    //             item.textContent = activePlayer.symbol;
    //             item.disabled = "true";
    //             switchPlayerTurn();
    //         })
    //     })
    // };

    return {
        activePlayer,
        switchPlayerTurn: switchPlayerTurn,
        // changeBoard: changeBoard
    }
};

let game = playGame();




