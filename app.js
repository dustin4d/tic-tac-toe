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

    return {board}
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


//// Display Controller Object
const displayController = (() => {
    // Draw array contents to tiles
    const tiles = document.querySelectorAll('.tile')

    tiles.forEach((tile, index) => {
        console.log(Gameboard.board[index])
        tile.textContent = Gameboard.board[index]
    })

})()