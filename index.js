let currMoleTile
let currPiranhaPlantTile
let score = 0
let gameOver = false

window.onload = function() {
  setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
      let tile = document.createElement("div")
      tile.id = i.toString()
      tile.addEventListener("click", () => {
        if (this == currMoleTile) {
        score++
        }
      })
      document.getElementById("board").appendChild(tile)
    }

    setInterval(setMole, 1000)
    setInterval(setPiranhaPlant, 2000)
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9)
  return num.toString()
}

function setMole() {
  if (currMoleTile) {
    currMoleTile.innerHTML = ""
  }

  let mole = document.createElement("img")
  mole.src = "./img/monty-mole.png"

  let num = getRandomTile()
  if (currPiranhaPlantTile && currPiranhaPlantTile.id == num) {
    return
  }
  currMoleTile = document.getElementById(num)
  currMoleTile.appendChild(mole)
}

function setPiranhaPlant() {
  if (currPiranhaPlantTile) {
    currPiranhaPlantTile.innerHTML = ""
  }

  let piranhaPlant = document.createElement("img")
  piranhaPlant.src = "./img/piranha-plant.png"

  let num = getRandomTile()
  if (currMoleTile && currMoleTile.id == num) {
    return
  }
  currPiranhaPlantTile = document.getElementById(num)
  currPiranhaPlantTile.appendChild(piranhaPlant)
}