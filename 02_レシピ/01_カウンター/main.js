const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multiButton = document.getElementById("*-button")
const divisionButton = document.getElementById("/-button")
const numberButtons = document.getElementById("numberButtons")
const childbuttons = Array(10)
let num
let count = 0
/*for (let n = 0; n < 10; n++) {
  childbuttons[n] = numberButtons.children[n]
}*/
childbuttons[1] = numberButtons.children[1]
for (num = 0; num < 10; num++) {
  childbuttons[num] = function() {
    if (count !== 0) {
      count += num
      display.textContent = count
    } else {
      count = num
      display.textContent = count
    }
  }
}
plusButton.onclick = function() {}
minusButton.onclick = function() {}
multiButton.onclick = function() {}
divisionButton.onclick = function() {}

const numberButtonsClicked = function() {
  console.log("firtsStep")
  childbuttons[num].onclick = childbuttons[num]
}
numberButtons.onclick = numberButtonsClicked

//1が押された時
childbuttons[1].onclick = function() {
  console.log("aaaaa")
}
