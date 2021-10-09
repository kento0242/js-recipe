/*
3の倍数で元気になる
const genkifunction = function(num) {
  for (let n = 1; n <= num; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkifunction(100)
*/
/*
3が含まれる場合は元気になる
const ThreeLove = function(num2) {
  for (let m = 1; m < num2; m++) {
    let check = String(m).indexOf("3")
    if (m % 3 === 0 || check != -1) {
      console.log(m + "!!!!!!")
    } else {
      console.log(m)
    }
  }
}
ThreeLove(100)
*/
//ひとつずつ数え上げて3の倍数で元気になる
let n = 0
const genkifunction = function() {
  n += 1
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!!")
  }
}
if (n < 100) {
  setInterval(genkifunction, 1000)
}
