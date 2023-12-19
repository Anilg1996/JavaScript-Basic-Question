// Write a function that takes the hour as an input parameter. 
// And it will convert those hours to minutes and return minutes.

const hoursToMinutes = (hour) => {
    
    let minutes = hour * 60;
    return minutes;
}

// let hoursHaveToConvert = 24;

// const convertingMinutes = hoursToMinutes(hoursHaveToConvert);

// console.log( hoursHaveToConvert,"hours equals to",convertingMinutes,"minutes." )

console.log(hoursToMinutes(24))