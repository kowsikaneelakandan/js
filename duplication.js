const dup= function(array){
    let result=[...new Set(array)]
    return result
}
console.log(dup([1,1,2,3,4,4,5]))

//Remove duplicates from array by IIFE function
const duplicates=( function(array){
    let res=[...new Set (array)]
    return res
})
console.log(duplicates([3,3,5,6,6,7,8]))