// convert all the string  to title caps by Anonymous Function
const titlecase= function(str){
    str= str.toLowerCase().split(' ');  
    for(i=0; i<str.length; i++){
        str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  return str.join(' ')
}
console.log(titlecase("hello all student"))

//convert all the string  to title caps by IIFE Function

const Titlecase= (function(str){
    str= str.toLowerCase().split(' ');  
    for(i=0; i<str.length; i++){
        str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  return str.join(' ')
})
console.log(Titlecase("hey all student"))

// convert all string to title caps by arrow function

titleCase= (str)=>{
    str= str.toLowerCase().split(' ');  
    for(i=0; i<str.length; i++){
        str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  return str.join(' ')
}
console.log(titleCase("i am here"))






