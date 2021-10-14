/*//要素を取得
const memoInput = document.getElementById("memo-input")
const addButoon = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
//const deleteContainer = document.getElementById("delete-button")

//関数の定義
addButoon.onclick = function() {
  const memoText = document.createElement("div")
  memoText.className = "memoText"
  memoText.textContent = memoInput.value
  memoContainer.append(memoText)

  const deleteButton = document.createElement("div")
  deleteButton.className = "deleteButton"
  memoContainer.append(deleteButton)
  deleteButton.onclick = function() {
    memoText.remove()
  }
  console.log(memoInput.value)
  memoInput.value = ""
}
console.dir(memoInput)*/
/*
const memoinput = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

button.onclick = function() {
  CreateCardContainer()
}

const CreateCardContainer = function() {
  const card = document.createElement("div")
  card.className = "card"
  memocontainer.append(card)
  CreateTodoCotainer(card)
}
const CreateTodoCotainer = function(card) {
  const todo = document.createElement("div")
  todo.className = "todo-container"
  card.append(todo)
  todo.textContent = memoinput.value
  memoinput.value = ""
  CreateDeleteButton(card)
}
const CreateDeleteButton = function(card) {
  const deletebutton = document.createElement("button")
  deletebutton.className = "delete-container"
  deletebutton.textContent = "削除"
  card.append(deletebutton)

  deletebutton.onclick = function() {
    card.remove()
  }
}
*/
const memoinput = document.getElementById("memo-input")
const button = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

button.onclick = function() {
  const card = createCard(memoinput.value)
  memocontainer.append(card)

  memoinput.value = ""
}

const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo-container"
  todo.textContent = text
  card.append(todo)

  //削除ボタン出して消せるようにしたい
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.className = "delete-container"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)

  return card
}
