//Task: Write a function that returns the multiplication table of 13  as output.

// for(let i = 1; i <= 10; i++){
//     let res = i * 13;
//     console.log(res);
// }


function multiplicationTable(){
    console.log("Multiplication Table Of 13");
    console.log("**************************");
     for(let i = 1; i <= 10; i++){
        
        let baseNum = 13;
        console.log(baseNum, "*",i, "=", baseNum * i);
    };
 
};

multiplicationTable()