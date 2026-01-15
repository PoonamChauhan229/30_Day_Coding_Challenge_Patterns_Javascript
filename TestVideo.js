// Hey everyone , Welcome back to Code with Poonam
// If you're new here, make sure to hit the like button and subscribe for more coding tutorials!
// We're on Day 19 of our 30-Day Pattern Challenge!
// and today’s pattern is all about printing a number pyramid pattern.
// Lets proceed with the challenge and move towards our VS Code.

// In VS Code , the question is mentioned here that we have  

// Write a Javascript function to print the following pattern.
//    1
//   123
//  12345
// 1234567

// Javascript function >> printPattern()
// Print Pattern >> Number Pyramid >> Center aligned

// Approach:
// Create str variable >> Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer loop   >> Manage n no. of rows >> i loop
// Inner Loop-1 >> Manage spaces        >> k loop
// Inner Loop-2 >> Manage numbers       >> j loop

//    1       >> i=1 >> Print numbers from 1 to 1 & 3 Spaces
//   123      >> i=2 >> Print numbers from 1 to 3 & 2 Spaces
//  12345     >> i=3 >> Print numbers from 1 to 5 & 1 Space
// 1234567    >> i=4 >> Print numbers from 1 to 7 & 0 Spaces

// i loop >> rows     >> start -1 || end-n
// k loop >> spaces  >> start -1 || end-n-i
// j loop >> numbers >> start -1 || end-(2*i-1)

// for(let i=1;i<=n;i++){
//     for(let k=1;k<=n-i;k++){
//         Print Spaces
//         Concat >> str >>" "
//     }
//     for(let j=1;j<=2*i-1;j++){
//         Print numbers in sequence
//         Concat >> str >> j
//     }
//     Concat >> str >>"\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++ || n=4
// k=1;1<=4-1 >>1<=3 >>T >>" "
// k=2;2<=3 >>T >>" "
// k=3;3<=3 >>T >>" "
// k=4;4<=3 >>F >>Terminate >>"   "
// j=1;1<=1 >>T >>"1"
// j=2;2<=1 >>F >>Terminate >>"   1"

// i=2;i<=n;i++
// k=1;1<=4-2 >>1<=2 >>T >>" "
// k=2;2<=2 >>T >>" "
// k=3;3<=2 >>F >>Terminate >>"  "
// j=1;1<=3 >>T >>"1"
// j=2;2<=3 >>T >>"2"
// j=3;3<=3 >>T >>"3"
// j=4;4<=3 >>F >>Terminate >>"  123"

// i=3;i<=n;i++
// k=1;1<=4-3 >>1<=1 >>T >>" "
// k=2;2<=1 >>F >>Terminate >>" "
// j=1;1<=5 >>T >>"1"
// j=2;2<=5 >>T >>"2"
// j=3;3<=5 >>T >>"3"
// j=4;4<=5 >>T >>"4"
// j=5;5<=5 >>T >>"5"
// j=6;6<=5 >>F >>Terminate >>" 12345"

// i=4;i<=n;i++
// k=1;1<=4-4 >>1<=0 >>F >>Terminate >>0 Spaces
// j=1;1<=7 >>T >>"1"
// j=2;2<=7 >>T >>"2"
// j=3;3<=7 >>T >>"3"
// j=4;4<=7 >>T >>"4"
// j=5;5<=7 >>T >>"5"
// j=6;6<=7 >>T >>"6"
// j=7;7<=7 >>T >>"7"
// j=8;8<=7 >>F >>Terminate >>"1234567"

// i=5;i<=n >>5<=4 >>F
// End of all loops

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        for(let k=1;k<=n-i;k++){
            str+=" "
        }
        for(let j=1;j<=2*i-1;j++){
            str+=j
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

