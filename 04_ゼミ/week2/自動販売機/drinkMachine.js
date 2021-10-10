// HTML要素を取得する
const buyButtonTea = document.getElementById("buy-button-tea")
const buyButtonBeer = document.getElementById("buy-button-beer")
const displayItems = document.getElementById("display-items")
const addButton100 = document.getElementById("add-button-100")
const displaySaifu = document.getElementById("display-saifu")
const displayjihankimoney = document.getElementById("display-jihanki-money")
const otsuriButton = document.getElementById("Otsuri")
//Valueが入力された数字、Tonyuが数字を自販機に投入するボタン
const moneyValue = document.getElementById("money-value")
const moneyTonyu = document.getElementById("money-toryu")

// 財布の所持金
let saifu = 1000
//投入金額
let jihankiMoney = 0

//投入ボタンを押した後の処理
moneyTonyu.onclick = function() {
  const inputMoney = moneyValue.value
  if (saifu >= inputMoney) {
    saifu -= inputMoney
    jihankiMoney += inputMoney
  }
  displaySaifu.textContent = saifu
  displayjihankimoney.textContent = jihankiMoney
}

//addButton100 を押した後の処理
addButton100.onclick = function() {
  if (saifu >= 100) {
    saifu -= 100
    jihankiMoney += 100
    displaySaifu.textContent = saifu
    displayjihankimoney.textContent = jihankiMoney
  }
  buttonDisabled()
}

//ボタンを押せるか押せないか
const buttonDisabled = function() {
  if (jihankiMoney < 100) {
    buyButtonTea.disabled = true
  } else {
    buyButtonTea.disabled = false
  }

  if (jihankiMoney < 150) {
    buyButtonBeer.disabled = true
  } else {
    buyButtonBeer.disabled = false
  }
}

// buyButtonTea を押した時の処理
buyButtonTea.onclick = function() {
  if (jihankiMoney >= 100) {
    jihankiMoney -= 100
    displayjihankimoney.textContent = jihankiMoney
    displayItems.textContent += "🍵"
  }
  buttonDisabled()
}
// buyButtonBeer を押した時の処理
buyButtonBeer.onclick = function() {
  if (jihankiMoney >= 150) {
    jihankiMoney -= 150
    displayjihankimoney.textContent = jihankiMoney
    displayItems.textContent += "🍺"
  }
  buttonDisabled()
}

// お釣りボタンを押した時の処理
otsuriButton.onclick = function() {
  saifu += jihankiMoney
  jihankiMoney = 0
  displaySaifu.textContent = saifu
  displayjihankimoney.textContent = jihankiMoney
  buttonDisabled()
}
