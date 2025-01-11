function factoriel(num) {
    var fact=1
    if (num=0) {fact=1}
    else {
    for (var i=num; i>0; i--) {
     fact = fact * i
      }
      return fact} }

console.log (factoriel(5))