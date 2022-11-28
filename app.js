// Gameboard Object
const Gameboard = (() => {
    let score

    const board = [
        "X", "X", "X",
        "O", "O", "O",
        "X", "X", "X"
    ]

    // Gameboard exports
    return {}
})


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
})


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

})