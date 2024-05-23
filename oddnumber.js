// print oddnumbers in array by Anonymous function
const oddnumbers =function(array){
  let odd =[]
  for(i=0; i< array.length; i++){
    if(array[i]%2!=0){
      odd.push(array[i])
    }
  }
  return odd
}
console.log(oddnumbers([1,2,3,4,5]))

// print oddnmbers in array by arrow function
oddnumber = (Array) =>{
  let number= []
  for (i=0; i < Array.length; i++){
      if(Array[i]%2!=0){
          number.push(Array[i])
      }
  }
  return number
}
console.log(oddnumber([9,8,7,6,5]))

// print oddnumbers in array by IIFE function
const oddresult = (function(Array){
  let number= []
  for (i=0; i < Array.length; i++){
      if(Array[i]%2!=0){
          number.push(Array[i])
      }
  }
  return number
})
console.log(oddresult([5,6,7,8,9,]))