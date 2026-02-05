// Hey everyone, Welcome back to Code with Poonam 👋
// If you're new here, make sure to hit the like button 👍 
// and subscribe for more coding tutorials!
// We're on Day 21 of our 30-Day Pattern Challenge!
// And today’s pattern is all about printing an inverted number pyramid pattern.
// Let’s proceed with the challenge and move towards our VS Code.

// In VS Code, the question is mentioned here that we have:

// Write a Javascript function to print the following pattern.
// 1111111
//  22222
//   333
//    4

// Javascript function >> printPattern()
// Print Pattern >> Inverted Number Pyramid Pattern
// Numbers and spaces

// Approach:
// Create str variable >> Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer Loop   >> Manage n no. of rows >> i loop
// Inner Loop-1 >> Manage spaces        >> k loop >> Print spaces
// Inner Loop-2 >> Manage n no. of cols >> j loop >> Print number

// 1234567 >> cols >> j loop
// 1111111 >>1 >>i loop  >>Print 7 numbers & Print 0 spaces
//  22222  >>2 >>i loop  >>Print 5 numbers & Print 1 spaces
//   333   >>3 >>i loop  >>Print 3 numbers & Print 2 spaces
//    4    >>4 >>i loop  >>Print 1 number  & Print 3 spaces

// i loop >> start-1 || end-n  >> i=1;i<=n;i++
// k loop >> start-1 || end-i-1 >> i=1>0,i=2>1,i=3>2,i=4>3 >> k=1;k<=i-1;k++
// j loop >> start-1 || end-2*(n-i)+1 >> i=1>>7,i=2>>5,i=3>>3,i=4>>1
// >> j=1;j<=2*(n-i)+1;j++

// for(let i=1;i<=n;i++){
//     for(k=1;k<=i-1;k++){
//         // Print spaces
//         // Concat str variable >> " " 
//     }
//     for(j=1;j<=2*(n-i)+1;j++){
//         // Print number
//         // Concat str variable >> i
//     }
//     // Move cursor to next line
//     // Concat str >> "\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++
// i=1;1<=4 >> True
// k=1;k<=i-1;k++
// k=1;1<=1-1 >> 1<=0 >> False >> Terminate >> 0 spaces
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(3)+1 >> 1<=7 >> True >> "1"
// j=2;2<=7 >> True >> "1"
// j=3;3<=7 >> True >> "1"
// j=4;4<=7 >> True >> "1"
// j=5;5<=7 >> True >> "1"
// j=6;6<=7 >> True >> "1"
// j=7;7<=7 >> True >> "1"
// j=8;8<=7 >> False >> Terminate >> str="1111111"

// i=2;2<=4 >> True
// k=1;k<=i-1;k++
// k=1;1<=2-1 >> 1<=1 >> True >> " "
// k=2;2<=1 >> False >> Terminate >> str=" "
// j=1;j<=2*(2)+1 >> 1<=5 >> True >> "2"
// j=2;2<=5 >> True >> "2"
// j=3;3<=5 >> True >> "2"
// j=4;4<=5 >> True >> "2"
// j=5;5<=5 >> True >> "2"
// j=6;6<=5 >> False >> Terminate >> str="22222"

// i=3;3<=4 >> True
// k=1;k<=i-1;k++
// k=1;1<=3-1 >> 1<=2 >> True >> " "
// k=2;2<=2 >> True >> " "
// k=3;3<=2 >> False >> Terminate >> str="  "
// j=1;j<=2*(1)+1 >> 1<=3 >> True >> "3"
// j=2;2<=3 >> True >> "3"
// j=3;3<=3 >> True >> "3"
// j=4;4<=3 >> False >> Terminate >> str="333"

// i=4;4<=4 >> True
// k=1;k<=i-1;k++
// k=1;1<=4-1 >> 1<=3 >> True >> " "
// k=2;2<=3 >> True >> " "
// k=3;3<=3 >> True >> " "
// k=4;4<=3 >> False >> Terminate >> str="   "
// j=1;j<=2*(0)+1 >> 1<=1 >> True >> "4"
// j=2;2<=1 >> False >> Terminate >> str="4"

// i=5;5<=4 >> False
// Terminate >> End of loops
// Print str variable

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        for(let k=1;k<=i-1;k++){
            str+=" "
        }
        for(let j=1;j<=2*(n-i)+1;j++){
            str+=i
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
