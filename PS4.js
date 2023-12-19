/* Create an array with the names of all the things you have learned in this lesson. Then use a for loop to output all elements of that array. */


let itemsLearnt = ["Variable declaration", "Data types","String concatenation", "ParseInt()", "ParseFloat()", "toFixed()", "Math operations","Conditions", "Multiple conditions", "Multi stage conditions", "Array","Find array elements by index", "Find index by array element", "Array length", "Update array element", "Add element at the last of an array", "Add element at first of an array", "Remove the last element of an array", "Remove first element of an array", "While loop", "For loop", "Loop break", "Loop continue", "Loop reverse" ];

for( let i = 0; i < itemsLearnt.length; i++){
    
    let item = itemsLearnt[i];
    console.log(i + ". " + item);
}