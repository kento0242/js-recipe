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
