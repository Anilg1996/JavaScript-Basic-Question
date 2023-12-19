// Check whether your age is odd or even number with a function. 
// If a number is given as a parameter to that function, the function will return true if that number is Even and false if it is Odd.

const checkAge = (age) => {
    if(age % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(checkAge(20));