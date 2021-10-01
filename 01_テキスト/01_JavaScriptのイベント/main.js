const button = document.getElementById("button")

const alertMesssage = function() {
  alert("クリックしたね")
}

button.onclick = alertMesssage
/*
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

inputText.oninput = function(e) {
  console.log(e.target.value)
}
inputDate.oninput = logValue*/
/*
document.onkeydown = function(e) {
  console.log(e.key)
}
*/
const inputKey = document.getElementById("input-text")

inputKey.onkeydown = function(e) {
  console.log(e.key)
}

//ここ質問する
