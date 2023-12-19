// Write a function called make_avg() which will take an three integers and return the average of those values.

const make_avg = ( num1, num2, num3) => {
    let totalSum = num1 + num2 + num3;
    let avgNumber = totalSum / 3;
    return avgNumber;
}

let average = make_avg(2, 4, 6.3);
console.log(parseFloat(average.toFixed(2)));