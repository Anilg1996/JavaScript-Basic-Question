/* Task 1. Print the numbers 58 to 98 

Task 2. Print all the even numbers between 412 to 456 

Task 3. Print all the odd numbers between 581 to 623 */


// Task 1 =>

for(let i = 58; i <= 98; i++){
    console.log(i);
}

// Task 2 => 

for(let i = 412; i <= 456; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


// method a
 let num = 412; 
while ( num <= 456) {
    console.log(num);
    num += 2;
}

// Task 3 =>

for(let i = 581; i <= 623; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}