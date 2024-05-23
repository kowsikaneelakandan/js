const isPalindrome= (N)=>
{
    let str = ""+N
    let len = str.length
    for(let i=0; i< parseInt(len/2,10); i++){
        if( str[i] !=str[len - 1- i])
            return false
    }
    return true
}

const palindrome = function( arr, n){
    for(let i=0; i<n; i++){
        let ans= isPalindrome(arr[i])
        if (ans === false)
            return false
        return true
    }
    return palindrome
}

console.log(palindrome(["dad,car,wow"]))
