const figure = document.getElementById("figure")
let count = 0
figure.onclick = function() {
  count += 1
  console.log(count)
  figure.classList.add("transition")
  if (count % 3 == 1) {
    figure.classList.add("rounded")
    console.log("A")
  } else if (count % 3 == 2) {
    figure.classList.remove("spuare")
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
    console.log("B")
  } else if (count % 3 == 0) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
    console.log("C")
  }
}
