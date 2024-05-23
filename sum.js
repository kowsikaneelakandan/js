//sum all numbers in array by anonymous function
const add = function(array){
let sum = 0
for(i =0; i<array.length; i++){
    sum +=array[i]
}
return sum
}
console.log(add([1,2,3,4]))


// sum all numbers in array by arrow function
sum = (array) =>{
    let sum= 0
    for(i=0; i <array.length; i++){
       sum += array[i]
    }
    return sum
}
console.log(sum([1,2]))

// sum all numbers in array by IIFE fnction
const result=(function(array){
    let sum =0
    for (i=0; i < array.length; i++){
        sum +=array[i] 
    }
        return sum
})
console.log(result([15,5]))