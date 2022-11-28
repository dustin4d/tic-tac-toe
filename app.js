// Gameboard Object
const Gameboard = (() => {
    let score

    const buildBoard = () => {
        /* Create all 9 DOM td nodes
         * and append them to tr
         * elements. Give the td cells
         * the class .tile
         */
        console.log("Board constructed.")
    }

    const board = [
        "X", "X", "X",
        "O", "O", "O",
        "X", "X", "X"
    ]

    // Gameboard exports
    return {buildBoard, board}
})()


// Player Object
const Player = (() => {
    const team = pickTeam()

    const pickTeam = () => {
        /* Get value of a DOM node,
         * do some light conditional formatting,
         * then set player.team to be whatever value
         * is returned from this function */
    }

    const mark = () => {
        /* Click DOM element, check Player's
         * team, and insert text into array index 
         * that corresponds to player's team choice */
    }

    // Player exports
    return {}
})()


// CPU Object
const Cpu = (() => {
    let team = oppositeTeam()

    // Picks the symbol of whatever is not picked by Player
    const oppositeTeam = () => {
        if (Player.team === 'X') {
            team = 'O'
        } else {
            team = 'X'
        }
    }

    // CPU Exports
    return {}

})()