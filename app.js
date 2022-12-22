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
        /* Set a given index of the board array
         * to the given sign (Two arguments?)
         */
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

    // Pulls data from the button player clicked and assigns teams
    const determineTeams = () => {
        if(displayController.passPlayerSign === 'X') {
            localPlayer = Player("X")
            aiPlayer = Player("O")
            console.log(`localPlayer: ${localPlayer}`)
        } else if (displayController.playerChoice === 'O') {
            localPlayer = Player("O")
            aiPlayer = Player("X")
            console.log(`aiPlayer: ${aiPlayer}`)
        }
    }

    return {determineTeams}
})()

//// Display Controller Object
const displayController = (() => {
    const tiles = document.querySelectorAll('.tile')
    const teamButtons = document.querySelectorAll(".team-choice")

    let playerChoice

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
    }

    // Populate the board with array data
    const updateBoard = () => {
        tiles.forEach((tile, index) => {
            tile.textContent = Gameboard.board[index]
            tile.addEventListener("click", () => {
                tile.textContent = playerChoice
            })
        })
    }
 
    const setPlayerSign = (choice) => {
        playerChoice = choice
        console.log(`playerChoice is now: ${playerChoice}`)
        return playerChoice
    }

    const getPlayerSign = () => {
        return playerChoice
    }

    
    attachEventListeners()
    updateBoard()

   // displayController Exports
    return {
        getPlayerSign
    }
})()