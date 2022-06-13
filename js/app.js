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
  console.log(woodTotal)
  console.log(woodOverTime)
  console.log(houseTotal)
  if(woodOverTime > 100){
    house.innerText = 'Build House - 50 wood'}
}

function addWood() {
  woodTotal = woodTotal + villagers
  woodOverTime = woodOverTime + villagers
  render()
}

function addHouse() {
  if(woodTotal >= 25) {
    woodTotal = woodTotal - 25
  } else if (woodTotal > 100){
    woodTotal= woodTotal - 50
  } else {
    return
  }
  villagers = villagers + 3
  houseTotal++
  housesOverTime++
  render()
}

render()