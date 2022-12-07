//// GAMEBOARD OBJECT
const Gameboard = (() => {
    const board = []

    const writeTile = () => {
        /* Set a given iteration of the board array
         * to the given sign (Two arguments?)
         */
    }

    // Retreive the data from a given index
    const getTile = (index) => {
        /* Just return the index in the board array
         * for it to give the data, since we aren't 
         * writing anything */
        return board[index]
    }

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
const gameController = () => {

}

