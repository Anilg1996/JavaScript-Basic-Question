// I have 10 object data but i want to 9th update data.


// Assuming you have an array of objects
let arrayOfObjects = [
    { name: 'Soni', profile: 'CEO'},
    { name: 'Ankit', profile: 'Developer'},
    { name: 'Abhi', profile: 'Nodejs Developer'},
    { name: 'Anil', profile: 'BA'},
    { name: 'Shubham', profile: 'Marketing Manager'},
    { name: 'Abhay', profile: 'Email Developer'},
    { name: 'Salman', profile: 'HR'},
    { name: 'Ram', profile: 'CTO'},
    { name: 'Krish', profile: 'Software Developer'},
    { name: 'Priya', profile: 'CFO'}
  ];
  
//   // Updating the data of the 9th object (index 8)
//   arrayOfObjects[8] = {
//     name: 'Ramu',
//     profile: 'Office Manager',
//   };

  // Use a for loop to find and update the 9th object
// for (let i = 0; i < arrayOfObjects.length; i++) {
//     if (i === 8) { 
//       arrayOfObjects[i] = {
//         name: 'Rama',
//         profile: 'Office Manager',
//       };
//       break;
//     }
//   }
  
  // Now arrayOfObjects has the updated data for the 9th object
//   console.log(arrayOfObjects);

  // Accessing the value of the 'profile' property in the fourth object (index 3)
let fourthProfile = arrayOfObjects[3].profile;

// Now 'fourthProfile' contains the value 'BA' from the fourth object
console.log(fourthProfile);