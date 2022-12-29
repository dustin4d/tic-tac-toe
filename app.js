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
/**
 * Stole this idea from Michal Osman, just create a constructor for 2 players, even
 * if one of them is going to be a CPU, then we can assign two instances of
 * Player.team later.
 */
const Player = (team) => {
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

    let round = 1

    // Pulls data from the button player clicked and assigns teams
    const determineTeams = () => {
        if(displayController.passPlayerSign === 'X') {
            localPlayer = Player("X")
            aiPlayer = Player("O")
            console.log(`localPlayer: ${localPlayer}`)
        } else if (displayController.passPlayerSign === 'O') {
            localPlayer = Player("O")
            aiPlayer = Player("X")
            console.log(`aiPlayer: ${aiPlayer}`)
        }
    }

    // Decide who plays on round 1.
    const coinflip = () => {
        let coin = Math.random()
        if(coin > 0.5) {
            coin = "Heads"
            currentPlayer = localPlayer
            if (coin === "Heads") {
                displayController.setMessage("Heads! Player goes first.")
                console.log(currentPlayer)
            }
        } else if (coin < 0.5) {
            coin = "Tails"
            currentPlayer = aiPlayer
            if (coin === "Tails") {
                displayController.setMessage("Tails! AI goes first.")
                console.log(currentPlayer)
            }
        }
    }

    // Run this after a tile is clicked
    const playRound = (tileIndex) => {
        Gameboard.writeTile(tileIndex, currentPlayer)

        if (currentPlayer === "X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }
    }

    const checkSign = () => {
        const result = console.log(`localPlayer = ${localPlayer}, aiPlayer = ${aiPlayer}`)
        return result
    }

    // Game Controller Exports
    return {determineTeams, playRound, coinflip, currentPlayer, checkSign}
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
    }

    // Populate the board with array data
    const updateBoard = () => {
        tiles.forEach((tile, index) => {
            tile.textContent = Gameboard.board[index]

            tile.addEventListener("click", () => {
                tile.textContent = playerChoice
                console.log(`${playerChoice} marked a tile.`)
                console.log(`Returned from gameController.currentPlayer: ${gameController.currentPlayer}`)
            })
        })
    }

    const setMessage = (message) => {
        messageContainer.innerText = message
    }

    const setPlayerSign = (choice) => {
        playerChoice = choice
        console.log(`displayController.setPlayerSign: ${playerChoice}`)
        return playerChoice
    }

    // A way to pass the player sign to other modules
    const getPlayerSign = () => {
        return playerChoice
    }

    
    attachEventListeners()
    updateBoard()

   // displayController Exports
    return {getPlayerSign, setMessage}
})()