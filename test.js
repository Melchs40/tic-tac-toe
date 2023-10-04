// creates an empty game board and stores the players' name and symbol
const gameBoard = (() => {
    const gameBoardArr = ["", "", "", "", "", "", "", "", ""];
    const players = [];

    let squares = document.querySelectorAll(".square");
    let squaresArr = Array.from(squares);
    squaresArr.forEach(item => {
        item.disabled = "true";
    });

    return {
        gameBoardArr,
        players
    }
})();

// creates players and adds them to players array in gameBoard
function Player (name, playerSymbol) {

    const sayHello = () => {
        alert("Hello, " + name + "!")
    }
    gameBoard.players.push([name, playerSymbol]);

    return {
        name,
        playerSymbol,
        sayHello: sayHello,
    }
};

// adds button to create players for game
document.getElementById("submit-button").addEventListener("click", function createPlayer (){
    
    let playerName = document.getElementById("player-name").value.toLowerCase();
    let playerSymbol = document.getElementById("player-symbol").value;
    let newPlayer = Player(playerName, playerSymbol);
    document.getElementById("player-name").value = "";
    document.getElementById("player-symbol").value = "";
    return {
        playerName,
        playerSymbol,
        newPlayer
    }
});

// creates the flow of the game
playGame = () => {
    
    let activePlayer = gameBoard.players[0];
    let gameText = document.getElementById("player-announce");
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === gameBoard.players[0] ? gameBoard.players[1] : gameBoard.players[0];
      };
    
    const changeBoard = () => {
        let squares = document.querySelectorAll(".square");
        let squaresArr = Array.from(squares);
        squaresArr.forEach(item => {
            item.addEventListener("click", function changeBoard() {
                item.textContent = activePlayer[1];
                item.classList.add(activePlayer[1]);
                gameBoard.gameBoardArr[item.id] = activePlayer[1];
                item.disabled = "true";
                checkWinner();
                switchPlayerTurn();
                if (gameText.textContent.includes("won")) {

                } else if (gameText.textContent.includes("draw")) {
                
                } else {
                    gameText.textContent = `It is ${activePlayer[1]}'s turn`;
                }
            })
        })
    };

    const checkWinner = () => {
        const square = [];
        let squares = document.querySelectorAll(".square");
        let squaresArr = Array.from(squares);
        let checkDisabled = (item) => item.disabled;

        for (let i = 0; i < gameBoard.gameBoardArr.length; i++) {
            square[i] = gameBoard.gameBoardArr[i];
        }

        const winners = [
            [square[0], square[1], square[2]],
            [square[3], square[4], square[5]],
            [square[6], square[7], square[8]],
            [square[0], square[3], square[6]], 
            [square[1], square[4], square[7]],
            [square[2], square[5], square[8]],
            [square[0], square[4], square[8]],
            [square[2], square[4], square[6]]
        ];
 
        for (let i = 0; i < winners.length; i++) {
            if ((winners[i][0] === gameBoard.players[0][1] || winners[i][0] === gameBoard.players[1][1]) && winners[i][0] === winners[i][1] && winners[i][0] === winners[i][2]) {
                gameText.textContent = `${activePlayer[0]} has won the game!`;
                gameText.classList.add("winner");
                squaresArr.forEach(item => {
                    item.disabled = "true";
                })
                break;
            } else if (squaresArr.every(checkDisabled)) {
                gameText.textContent = "The game is a draw";
                break;
            }
        };

    }

    return {
        activePlayer,
        switchPlayerTurn: switchPlayerTurn,
        changeBoard: changeBoard,
        checkWinner: checkWinner
    }
};


document.getElementById("start-button").addEventListener("click", function() {
    let squares = document.querySelectorAll(".square");
    let squaresArr = Array.from(squares);
    squaresArr.forEach(item => {
        item.disabled = false;
    });
    playGame().changeBoard();
    playGame().checkWinner();
});

// let playerOne = Player("Player 1", "X");
// let playerTwo = Player("Player 2", "O");

