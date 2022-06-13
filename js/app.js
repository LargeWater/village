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
let houseCost = 25


function render() {
  woodCount.innerText = woodTotal + ' wood'
  houseCount.innerText = houseTotal + ' houses'
  villagerCount.innerText = villagers + ' villagers'
  console.log(woodTotal)
  console.log(woodOverTime)
  console.log(houseTotal)
  house.innerText = `Build House - ${houseCost} wood`
}

function addWood() {
  woodTotal = woodTotal + villagers
  woodOverTime = woodOverTime + villagers
  render()
}

function addHouse() {
  if ((woodTotal - houseCost) >= 0) {
  woodTotal = woodTotal - houseCost
  } else {
    return
  }
  houseCost = houseCost + 20
  villagers = villagers + 3
  houseTotal++
  housesOverTime++
  render()
}

render()