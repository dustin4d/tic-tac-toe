const Controller = (() => {
    const coinflipBtn = document.querySelector('#coinflip-button')
    // Invoke the function with arrow syntax
    coinflipBtn.addEventListener('click', () => {assignTeam()})

    const assignTeam = () => {
        // Random number between 0 and 1
        const coin = Math.floor(Math.random() * 2)
        console.log(`Flipping coin...`)
        console.log(`Coin value is ${coin}`)

        if (coin === 0) {
            Player.team = 'X'
            Cpu.team = 'O'
            hideButton()
        } else if (coin === 1) {
            Player.team = 'O'
            Cpu.team = 'X'
            hideButton()
        } else {
            console.log("Error")
            alert("Error")
        }

    }

    const hideButton = () => {
        coinflipBtn.remove()
    }

    const showTeams = () => {
        const coinflip = document.querySelector('.coinflip')
        const teamDisplay = document.createElement('p')
        teamDisplay.innerText(`You are ${Player.team}`)
        coinflip.append(teamDisplay)
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