
/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */

let sideOfTriangle1 = 9;
let sideOfTriangle2 = 8;
let sideOfTriangle3 = 9;

if( sideOfTriangle1 == sideOfTriangle2 || sideOfTriangle1 == sideOfTriangle3 ||  sideOfTriangle2 == sideOfTriangle3 ){
    console.log("This is Isosceles Triangle")
} else {
    console.log("This is Not an Isosceles Triangle");
}