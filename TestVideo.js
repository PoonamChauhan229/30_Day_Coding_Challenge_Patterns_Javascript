// Hey everyone , Welcome back to Code with Poonam
// If you're new here, make sure to hit the like button and subscribe for more coding tutorials!
// We're on Day 20 of our 30-Day Pattern Challenge!
// and today’s pattern is all about printing an inverted star pyramid pattern.
// Lets proceed with the challenge and move towards our VS Code.

// In VS Code , the question is mentioned here that we have  

// Write a Javascript function to print the following pattern.
// *******
//  *****
//   ***
//    *

// Javascript function >> printPattern()
// Print Pattern >> Inverted Star Pyramid >> Left aligned with leading spaces

// Approach:
// Create str variable >> Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer loop   >> Manage n no. of rows >> i loop
// Inner Loop-1 >> Manage spaces        >> k loop
// Inner Loop-2 >> Manage stars         >> j loop

// 1234567
// *******  1>> i=1 >> Print 7 stars & 0 spaces
//  *****   2>> i=2 >> Print 5 stars & 1 space
//   ***    3>> i=3 >> Print 3 stars & 2 spaces
//    *     4>> i=4 >> Print 1 star  & 3 spaces

// i loop >> rows   >> start -1 || end-n
// k loop >> spaces >> start -1 || end-i-1
// j loop >> stars  >> start -1 || end-(2*(n-i)+1)

// for(let i=1;i<=n;i++){
//     for(let k=1;k<=i-1;k++){
//         Print Spaces
//         Concat >> str >>" "
//     }
//     for(let j=1;j<=2*(n-i)+1;j++){
//         Print stars
//         Concat >> str >> "*"
//     }
//     Concat >> str >>"\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++ || n=4
// k=1;1<=0 >>F >>0 Spaces
// j=1;1<=7 >>T >>"*"
// j=2;2<=7 >>T >>"*"
// ...
// j=7;7<=7 >>T >>"*"
// j=8;8<=7 >>F >>Terminate >>"*******"

// i=2;i<=n;i++
// k=1;1<=1 >>T >>" "
// k=2;2<=1 >>F >>Terminate >>" "
// j=1;1<=5 >>T >>"*"
// ...
// j=5;5<=5 >>T >>"*"
// j=6;6<=5 >>F >>Terminate >>" *****"

// i=3;i<=n;i++
// k=1;1<=2 >>T >>" "
// k=2;2<=2 >>T >>" "
// k=3;3<=2 >>F >>Terminate >>"  "
// j=1;1<=3 >>T >>"*"
// j=2;2<=3 >>T >>"*"
// j=3;3<=3 >>T >>"*"
// j=4;4<=3 >>F >>Terminate >>"   ***"

// i=4;i<=n;i++
// k=1;1<=3 >>T >>" "
// k=2;2<=3 >>T >>" "
// k=3;3<=3 >>T >>" "
// k=4;4<=3 >>F >>Terminate >>"   "
// j=1;1<=1 >>T >>"*"
// j=2;2<=1 >>F >>Terminate >>"    *"

// i=5;i<=n >>5<=4 >>F
// End of all loops

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
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

// If you found this video helpful, don't forget to like, share, and subscribe for more programming tutorials. See you in the next one!

// 👋 Keep Coding ,Keep Learning and Keep Growing

// Thank You
