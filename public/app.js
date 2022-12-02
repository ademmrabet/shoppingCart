
let plus1 = document.getElementsByClassName("plus")
for (let i = 0; i < plus1.length; i++) {
  plus1[i].addEventListener("click", function () {
        plus1[i].nextElementSibling.innerHTML++
        Somme()
      })
}



let moins1 = document.getElementsByClassName("moins")
for (let i = 0; i < moins1.length; i++) {
  moins1[i].addEventListener("click", function () {
        if (moins1[i].previousElementSibling.innerHTML > 0) {
          moins1[i].previousElementSibling.innerHTML--
          Somme()
    
        }
      })
 }