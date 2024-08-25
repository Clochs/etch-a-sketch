let inputBtn = document.querySelector('#inputBtn')
let buildBtn = document.querySelector('#buildBtn')
let container = document.querySelector('#container')
let userChoice

inputBtn.addEventListener('click', () => {
    userChoice = Number(prompt('Enter the number of squares per row/column:'))
    console.log(userChoice)
    console.log(typeof (userChoice))
})

buildBtn.addEventListener('click', () => {
    // Clear any existing squares
    container.innerHTML = ''

    let squareSize = container.clientWidth / userChoice;

    for (let i = 0; i < userChoice * userChoice; i++) {
        let squares = document.createElement('div')
        squares.classList.add('squares')
        squares.style.width = `${squareSize}px`
        squares.style.height = `${squareSize}px`

        squares.addEventListener('mouseover', () => {
            squares.classList.add('black')
            console.log("Hovered")
        })

        container.appendChild(squares)
    }
})