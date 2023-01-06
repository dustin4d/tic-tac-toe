//// GAMEBOARD OBJECT
const Gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', '', '']
    // Set each index programmatically, to set or reset the board.
    const setBoard = () => {
        for (let i = 0; i < 9; i++) {
            board.push('')
        }
    }

    const writeTile = (index, team) => {
        board[index] = team
    }

    // Retreive the data from a given index
    const getTile = (index) => {
        /* Just return the index in the board array
         * for it to give the data, since we aren't 
         * writing anything */
        return board[index]
    }

    return {board, writeTile, getTile}
})()

//// PLAYER OBJECT
// Simple constructor to make a player object to set and reveal Player sign
function Player(team) {
    this.team = team

    // Make a way to publicly reveal the team of Player
    const getTeam = () => {
        return team
    }

    // Player exports
    return {getTeam}
}

//// GAME CONTROLLER OBJECT
const gameController = (() => {
    let localPlayer
    let aiPlayer
    let currentPlayer
    let gameOver = false

    let round = 0

    // Pulls data from the button player clicked and assigns teams
    const determineTeams = () => {
        if(displayController.getPlayerSign() === 'X') {
            localPlayer = Player("X")
            aiPlayer = Player("O")
        } else if (displayController.getPlayerSign() === 'O') {
            localPlayer = Player("O")
            aiPlayer = Player("X")
        }
    }

    // Decide who plays on round 1.
    const coinflip = () => {
        let coin = Math.random() > 0.5 ? "Heads" : "Tails"
        if (coin === "Heads") {
            currentPlayer = localPlayer
            console.log(`currentPlayer is: ${currentPlayer.getTeam()}`)
            displayController.setMessage("Heads. Player goes first.")
            return currentPlayer
        } else {
            currentPlayer = aiPlayer
            console.log(`currentPlayer is: ${currentPlayer}`)
            displayController.setMessage("Tails. AI goes first.")
            return currentPlayer
        }
    }

    // From @michalosman on GitHub
    // Much shorter than tons of if/else statements
    const checkWinner = (tileIndex) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        // .filter(), .some, etc
        return winConditions
            .filter((combination) => combination.includes(tileIndex))
            .some((possibleCombination) => possibleCombination.every((index) => Gameboard.getTile(index) === currentPlayer.getTeam()))
    }

    // This function is run after a tile is clicked.
    const playRound = (tileIndex) => {
        // Check if tile has already been set, or if game is over.
        if (Gameboard.getTile(tileIndex) !== "" || gameOver) {
            return
        }

        Gameboard.writeTile(tileIndex, currentPlayer.getTeam())

        if (checkWinner(tileIndex)) {
            const winningPlayer = currentPlayer.getTeam() === "X" ? "X" : "O"
            displayController.setMessage(`Game Over. ${winningPlayer} wins!`)
            // Disable clicks on tiles after game is over
            gameOver = true
        }

        displayController.updateBoard()

        // Alternate player turns
        if (currentPlayer === localPlayer) {
            currentPlayer = aiPlayer
        } else {
            currentPlayer = localPlayer
        }

        round++
        if (round === 9) {
            displayController.setMessage("Game over.")
            gameOver = true
        }
    }

    // Game Controller Exports
    return {determineTeams, coinflip, currentPlayer, playRound, checkWinner}
})()

//// Display Controller Object
const displayController = (() => {
    const tiles = document.querySelectorAll('.tile')
    const teamButtons = document.querySelectorAll(".team-choice")
    const modalContainer = document.querySelector('.modal-container')
    const playBtn = document.querySelector('.playBtn')
    const wrapper = document.querySelector('.wrap')
    const messageContainer = document.querySelector('.message')

    let playerChoice

    /* Buttons that start the game.
     * After the "Play" button is clicked, hide the 
     * modal, showing the game board */
    const attachEventListeners = () => {
        teamButtons.forEach((button) => {
        if(button.innerText == "X") {
            button.addEventListener("click", () => {
                setPlayerSign("X")
                gameController.determineTeams()
        })
        } else if (button.innerText == "O") {
            button.addEventListener("click", () => {
                setPlayerSign("O")
                gameController.determineTeams()
            })
        }
        })

        playBtn.addEventListener("click", () => {
            if (playerChoice !== "X" && playerChoice !== "O" ) {
                console.log("Pick a team, please")
            } else {
                gameController.coinflip()
                modalContainer.style.display = "none"
                wrapper.style.display = "block"
            }
        })

        tiles.forEach((tile, index) => {
            tile.addEventListener("click", () => {
                gameController.playRound(index)
            })
        })
    }

    // Populate the board with array data
    const updateBoard = () => {
        tiles.forEach((tile, index) => {
            tile.textContent = Gameboard.getTile(index)
        })
    }

    const setMessage = (message) => {
        messageContainer.innerText = message
    }

    const setPlayerSign = (choice) => {
        playerChoice = choice
        return playerChoice
    }

    // A way to pass the player sign to other modules
    const getPlayerSign = () => {
        return playerChoice
    }

    
    attachEventListeners()

   // displayController Exports
    return {getPlayerSign, setMessage, updateBoard}
})()