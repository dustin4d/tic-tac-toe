// Gameboard Object
const Gameboard = (() => {
    let score
    
    // Tile eventListener
    const tile = document.querySelectorAll('.tile')
    console.log(tile)

   const board = []
    
    const buildBoard = () => {
        /* Create all 9 DOM nodes as divs
         * and append them to .board
         */
        for (i = 0; i < 9; i++) {
            
        }
    }

    const mark = (team) => {
        /* Grab the player's or CPU's team
        * indentifier (X or O), then write that value
        * to the array index that corresponds to the DOM
        * node that was clicked.
        */
    }

    const arrayLink = () => {
        /* Associate each array index to the DOM
         * 0  1  2
         * 3  4  5
         * 6  7  8
        */
    }

    // Gameboard exports
    return {buildBoard, board, tile}
})()


// Player Object
const Player = (() => {
    let team

    const pickTeam = () => {
        /* Get value of a DOM node,
         * do some light conditional formatting,
         * then set player.team to be whatever value
         * is returned from this function */
    }

    // Player exports
    return {team}
})()


// CPU Object
const Cpu = (() => {
    //let team = oppositeTeam()

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