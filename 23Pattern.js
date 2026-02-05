// Write a Javascript function to print the following pattern.
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Javascript function >>printPattern()
// Print Pattern >>Diamond star Pattern
// Stars & Spaces

// Approach:
// Create str variable >>Final Output
// let str=""
// 2 Parts >>Upper Pyramid & Lower Inverted Pyramid
// Nested Loops -6 loops
// Outer Loop   >>Manage n no. of rows >> i loop   
// Inner Loop-1 >>Manage spaces        >> k loop >>Print spaces
// Inner Loop-2 >>Manage n no. of cols >> j loop >>Print stars

// Upper Pyramid Pattern
// 1234567 >>cols >>j loop
//    *    >>1 >> i loop >>Print 1 stars & Print 3 spaces
//   ***   >>2 >> i loop >>Print 3 stars & Print 2 spaces
//  *****  >>3 >> i loop >>Print 5 stars & Print 1 spaces 
// ******* >>4 >> i loop >>Print 7 stars & Print 0 spaces 

//  Lower Inverted Pyramid
// 123456 >>cols >>j loop
//  ***** >>2 >> i loop >>Print 5 stars & Print 1 spaces
//   ***  >>3 >> i loop >>Print 3 stars & Print 2 spaces
//    *   >>4 >> i loop >>Print 1 stars & Print 3 spaces

// Upper Pyramid Pattern
// i loop >>start-1 ||end-n ||n=4                                 >>i=1;i<=n;i++
// k loop >>start-1 ||end-n-i ||i=1,3|i=2,2|i=3,1|i=4,0           >>k=1;k<=n-i;k++
// j loop >>start-1 ||end-(2*i)-1 ||i=1,1|i=2,3|i=3,5|i=4,7       >>j=1;j<=(2*i)-1;j++

//  Lower Inverted Pyramid
// i loop >>start-2 ||end-n ||n=4                                 >>i=2;i<=n;i++
// k loop >>start-1 ||end-i-1 ||i=2,1|i=3,2|i=4,3                 >>k=1;k<=i-1;k++
// j loop >>start-1 ||end-2*(n-i)+1 ||i=2,5|i=3,3|i=4,1           >>j=1;j<=2*(n-i)+1;j++

// Working:
// Video 17 & Video 20 >>In the Pattern Series
// 1 change >>Lower Inverted Pyramid ,i=2

// Code Implementation

function printPattern(n){
    let str=""
    // Upper Pyramid Pattern
    for(let i=1;i<=n;i++){
        for(k=1;k<=n-i;k++){
            // spaces
            str+=" "
        }
        for(j=1;j<=(2*i)-1;j++){
            // stars
            str+="*"
        }
        str+="\n"
    }
    //  Lower Inverted Pyramid
    for(let i=2;i<=n;i++){
        for(k=1;k<=i-1;k++){
            // spaces
            str+=" "
        }
        for(j=1;j<=2*(n-i)+1;j++){
            // stars
            str+="*"
        }
        str+="\n"
    }
    console.log(str.trimEnd())

}
printPattern(4)






