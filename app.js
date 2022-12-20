//// GAMEBOARD OBJECT
const Gameboard = (() => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']

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
        if(displayController.playerChoice === 'X') {
            console.log(`Player sign: ${playerChoice}`)
            localPlayer = Player("X")
            aiPlayer = Player("O")
        } else if (displayController.playerChoice === 'O') {
            console.log(`Player sign: ${playerChoice}`)
            localPlayer = Player("O")
            aiPlayer = Player("X")
        }
    }

    return {determineTeams}
})()

//// Display Controller Object
const displayController = (() => {
    const tiles = document.querySelectorAll('.tile')
    const teamChoice = document.querySelectorAll('.team-choice')

    /* This var just holds the player's choice, but gets passed to 
     * `gameController` later for team assignment */
    let playerChoice

    // Populate the board with array data
    tiles.forEach((tile, index) => {
        tile.textContent = Gameboard.board[index]
    })

    /* Loop through the array, and save the player's choice, which 
     * gets passed to the `gameController` object to determine teams */
    teamChoice.forEach((choice) => {
        console.log(choice)
        choice.addEventListener("click", () => {
           console.log(`Player chose team: ${choice.outerText}`)
           playerChoice = choice.outerText
        })
       choice.addEventListener("click", gameController.determineTeams)
    })

    // displayController Exports
    return {playerChoice}
})()