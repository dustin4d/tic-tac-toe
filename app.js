
const Controller = (() => {
    const assignTeam = () => {
        // Random number between 0 and 1
        const coin = Math.floor(Math.random() * 2)
        console.log(`Flipping coin...`)
        console.log(`Coin value is ${coin}`)

        if (coin === 0) {
            Player.team = 'X'
            Cpu.team = 'O'
        } else if (coin === 1) {
            Player.team = 'O'
            Cpu.team = 'X'
        } else {
            console.log("Error")
            alert("Error")
        }
    }
    // Controller Exports
    return {assignTeam}
})()

// Gameboard Object
const Gameboard = (() => {
    const board = ['X', 'X', 'X',
                   'O', 'O', 'O',
                   'X', 'X', 'X'
                ]
    // Gameboard exports
    return {board}
})()

// Player Object
const Player = (() => {
    let team

    // Player exports
    return {team}
})()

// CPU Object
const Cpu = (() => {
    let team
    
    // CPU Exports
    return {team}

})()

const coinflipBtn = document.querySelector('#coinflip-button')
coinflipBtn.addEventListener('click', Controller.assignTeam)