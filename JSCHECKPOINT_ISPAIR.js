function IsPair(arr) {
    var arr2 =[]
for (var i=0; i<arr.length; i++)
{
   if (arr[i]%2 == 0) {arr2.push(arr[i])}
}
return arr2 }

console.log (IsPair([1,10,8,5]))