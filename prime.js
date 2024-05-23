// print a prime number  by anonymus function
const isprime= val=> {
    for (let factor =2; factor < val; factor++){
        if(val % factor ===0)
            return false
    }
    return true
}

const prime=function(n){
    let primenumber=[]
    for(let value =2; value <=n ; value++){
        if(isprime(value))
            primenumber.push(value)
    }
  return primenumber
}
console.log(prime(9))

//print a prime number by arrow function
const isPrime= val=> {
    for (let factor =2; factor < val; factor++){
        if(val % factor ===0)
            return false
    }
    return true
}

const Prime=(n)=>{
    let primenumber=[]
    for(let value =2; value <=n ; value++){
        if(isPrime(value))
            primenumber.push(value)
    }
  return primenumber
}
console.log(Prime(20))

// print a prime number in IIFE function
const isprimeV= val=> {
    for (let factor =2; factor < val; factor++){
        if(val % factor ===0)
            return false
    }
    return true
}

const PRIME=(function(n){
    let primenumber=[]
    for(let value =2; value <=n ; value++){
        if(isprimeV(value))
            primenumber.push(value)
    }
  return primenumber
})
console.log(PRIME(15))