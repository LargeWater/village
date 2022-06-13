const wood = document.getElementById('wood')
const woodCount = document.getElementById('wood-count')
const house = document.getElementById('house')
const houseCount = document.getElementById('house-count')
const villagerCount = document.getElementById('villager-count')


wood.addEventListener('click', addWood)
house.addEventListener('click', addHouse)

let woodTotal = 0
let woodOverTime = 0
let houseTotal = 0
let housesOverTime = 0
let villagers = 1

function render() {
  woodCount.innerText = woodTotal + ' wood'
  houseCount.innerText = houseTotal + ' houses'
  villagerCount.innerText = villagers + ' villagers'
}

function addWood() {
  woodTotal++
  woodOverTime++ 
  render()
}



function addHouse() {
  if(woodTotal >= 25) {
    houseTotal++
    housesOverTime++
    woodTotal = woodTotal - 25
  } else {
    return
  }
  render()
}

render()