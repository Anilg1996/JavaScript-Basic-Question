// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

const findLeapYear = (year) => {
    const leapYears = [];
    for(let i = 0; i < year.length; i++ ){
        let yr = year[i];
        if((yr % 4 == 0 && yr % 100 != 0) || (yr % 400 == 0)) {
            leapYears.push(yr);
        }
    }
    return leapYears;
};

 const randomYears = [ 2023, 2024, 2025, 2028, 2030 ];
// const leapYear_Year = findLeapYear(randomYears);

// console.log( "Array of leap year", leapYear_Year );

console.log(findLeapYear(randomYears))
