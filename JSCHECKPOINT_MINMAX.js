function MinMax(arr) {
    var min=arr[0]
   var max=arr[0]
for (var i=0; i<arr.length; i++)
{
   if (arr[i]<min) {min=arr[i]}
   else if (arr[i]>max) {max=arr[i]}
   
}
return [min,max]}

console.log (MinMax([1,5,8,5]))