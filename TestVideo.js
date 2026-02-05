// Hey everyone, Welcome back to Code with Poonam 👋
// If you're new here, make sure to hit the like button 👍 
// and subscribe for more coding tutorials!
// We're on Day 23 of our 30-Day Pattern Challenge!
// And today’s pattern is all about printing a diamond star pattern.
// Let’s proceed with the challenge and move towards our VS Code.

// In VS Code, the question is mentioned here that we have:

// Write a Javascript function to print the following pattern.
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Javascript function >> printPattern()
// Print Pattern >> Diamond Star Pattern
// Stars and spaces

// Approach:
// Create str variable >> Final Output
// let str=""
// Nested Loops
// Two parts
// Upper Pyramid
// Lower Inverted Pyramid

// Upper Pyramid &  Lower Inverted Pyramid
// Outer Loop   >> Manage n no. of rows >> i loop
// Inner Loop-1 >> Manage spaces        >> k loop >> Print spaces
// Inner Loop-2 >> Manage n no. of cols >> j loop >> Print star


// 1234567 >> cols >> j loop
//    *        >>1 >>i loop  >>Print 1 star & Print 3 spaces
//   ***       >>2 >>i loop  >>Print 3 stars & Print 2 spaces
//  *****      >>3 >>i loop  >>Print 5 stars & Print 1 space
// *******     >>4 >>i loop  >>Print 7 stars & Print 0 spaces

//  12345 >> cols >> j loop
//  *****      >>2 >>i loop  >>Print 5 stars & Print 1 space
//   ***       >>3 >>i loop  >>Print 3 stars & Print 2 spaces
//    *        >>4 >>i loop  >>Print 1 star  & Print 3 spaces

// Upper Pyramid
// i loop >>start-1 ||end-n ||n=4                      >>i=1;i<=n;i++
// k loop >>start-1 ||end-n-i ||i=1,3||i=2,2           >>k=1;k<=n-i;k++
// j loop >>start-1 ||end-(2*i)-1 || i=1,1 | i=2,3 |i=3,5 |i=4,7 >>j=1;j<=(2*i)-1;j++

// Lower Inverted Pyramid
// i loop >>start-2 ||end-n ||n=4                   >>i=2;i<=n;i++
// k loop >>start-1 ||end-i-1 ||i=2>1,i=3>2,i=4>3   >>k=1;k<=i-1;k++
// j loop >>start-1 ||end-2*(n-i)+1 >>i=2>>5,i=3>>3,i=4>>1  >>j=1;j<=2*(n-i)+1;j++

// Working:
// For detailed working and dry-run explanation,
// please refer to Video 17 and Video 20 of this pattern series.
// 1 change >> Lower Inverted Pyramid >>i=2 so you can just omit what happens when i=1, rest remains the same

// Code Implementation

function printPattern(n){
    let str=""

    // Upper Pyramid
    for(let i=1;i<=n;i++){
        for(let k=1;k<=n-i;k++){
            str+=" "
        }
        for(let j=1;j<=(2*i)-1;j++){
            str+="*"
        }
        str+="\n"
    }

    // Lower Inverted Pyramid
    for(let i=2;i<=n;i++){
        for(let k=1;k<=i-1;k++){
            str+=" "
        }
        for(let j=1;j<=2*(n-i)+1;j++){
            str+="*"
        }
        str+="\n"
    }

    console.log(str.trimEnd())
}

printPattern(4)


// Try experimenting with different values of n and let me know your results in the comments!

// If you found this video helpful, don't forget to like, share, and subscribe 
// for more programming tutorials. See you in the next one!

// 👋 Keep Coding, Keep Learning and Keep Growing

// Thank You
