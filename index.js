let currMoleTile
let currPlantTile

window.onload = function() {
  setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
      let tile = document.createElement("div")
      tile.id = i.toString()
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


  mole = document.createElement("img")
  mole.src = "./img/monty-mole.png"

  let num = getRandomTile()
  currMoleTile = document.getElementById(num)
  currMoleTile.appendChild(mole)
}

function setPiranhaPlant() {
  if (currMoleTile) {
    currMoleTile.innerHTML = ""
  }

  piranhaPlant = document.createElement("img")
  piranhaPlant.src = "./img/piranha-plant.png"

  let num = getRandomTile()
  currPiranhaPlant = document.getElementById(num)
  currPiranhaPlantTile.appendChild(mole)
}