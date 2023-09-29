// creates an empty game board and stores the players' name and symbol
const gameBoard = (() => {
    const gameBoardArr = ["", "", "", "", "", "", "", "", ""];
    const players = [];

    return {
        gameBoardArr,
        players
    }
})();

// creates players and adds them to players array in gameBoard
const Player = (name, playerSymbol) => {

    const sayHello = () => {
        alert("Hello, " + name + "!")
    }
    gameBoard.players.push([name, playerSymbol]);

    const startGame = () => {
        playGame().changeBoard();
        playGame().checkWinner();
    }

    return {
        name,
        playerSymbol,
        sayHello: sayHello,
        startGame: startGame
    }
};

// adds button to create players for game
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

// creates the flow of the game
playGame = () => {
    
    let activePlayer = gameBoard.players[0];
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
                document.getElementById("player-announce").textContent = `It is ${activePlayer[1]}'s turn`;
            })
        })
    };

    const checkWinner = () => {
        const winners = [
            [gameBoard.gameBoardArr[0], gameBoard.gameBoardArr[1], gameBoard.gameBoardArr[2]],
            [gameBoard.gameBoardArr[3], gameBoard.gameBoardArr[4], gameBoard.gameBoardArr[5]],
            [gameBoard.gameBoardArr[6], gameBoard.gameBoardArr[7], gameBoard.gameBoardArr[8]],
            [gameBoard.gameBoardArr[0], gameBoard.gameBoardArr[3], gameBoard.gameBoardArr[6]], 
            [gameBoard.gameBoardArr[1], gameBoard.gameBoardArr[4], gameBoard.gameBoardArr[7]],
            [gameBoard.gameBoardArr[2], gameBoard.gameBoardArr[5], gameBoard.gameBoardArr[8]],
            [gameBoard.gameBoardArr[0], gameBoard.gameBoardArr[4], gameBoard.gameBoardArr[8]],
            [gameBoard.gameBoardArr[2], gameBoard.gameBoardArr[4], gameBoard.gameBoardArr[6]]
        ];
 
        for (let i = 0; i < winners.length; i++) {
            if ((winners[i][0] === gameBoard.players[0][1] || winners[i][0] === gameBoard.players[1][1]) && winners[i][0] === winners[i][1] && winners[i][0] === winners[i][2]) {
                alert(`${activePlayer[1]} has won the game!`)
            } else {
                console.log("nope")
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

let playerOne = Player("Player 1", "X");
let playerTwo = Player("Player 2", "O");

playerOne.startGame();




