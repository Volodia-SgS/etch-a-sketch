const gridContainer = document.querySelector("#grid-container")
const grid = document.querySelector("#grid")
const resetBtn = document.querySelector('#reset-btn')
const grid32 = document.querySelector(".grid-32")
const grid64 = document.querySelector(".grid-64")
const grid128 = document.querySelector(".grid-128")

function createGrid(side){
    for (i = 1; i <= side ** 2; i++){
        let square = document.createElement("div")
        square.setAttribute("class", "card")
        square.style.width = `${100/side}%`
        square.style.height = `${100/side}%`
        grid.appendChild(square)
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black"
        })
    }
}

/*
const a = 6;

for (i = 1; i <= a ** 2; i++) {
    let square = document.createElement("div")
    square.setAttribute('class', 'card')
    square.style.width = `${100/a}%`
    square.style.height = `${100/a}%`
    grid.appendChild(square)
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
    })
}
*/

function reset(){
    const pixels = document.querySelectorAll(".card")
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white"
    })
}

resetBtn.addEventListener("click", () => {
    reset()
})

grid32.addEventListener("click", () => {
    grid.innerHTML = ''
    createGrid(32);
})

grid64.addEventListener("click", () => {
    grid.innerHTML = ''
    createGrid(64);
})

grid128.addEventListener("click", () => {
    grid.innerHTML = ''
    createGrid(128);
})
