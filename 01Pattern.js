// Write a JavaScript function to print a solid square of size n × n.
// Output:

// ****
// ****
// ****
// ****

// JavaScript function             >>printPattern()
// print a solid square of size n × n

// Approach:
// let str="" >>Hold final pattern
// size n × n >>4*4 >> n=4
// Nested loops >>Loop inside an Loop >>Outer ||Inner
// Outer Loop >> Control no of rows  >>i loop
// Inner loop >> Control no of cols  >>j loop
// 1234   >> j loop  >>cols
// **** 1 >> i loop  >>rows
// **** 2 >> i loop  >>rows 
// **** 3 >> i loop  >>rows 
// **** 4 >> i loop  >>rows

// i loop >>start >>1     end >>4 n=4
// j loop >>start >>1     end >>4 n=4

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=n;j++){
        // Print *
        // str+="*" ||str=str+"*"
    // }
    // str+="\n"
// }
// Print str >> solid square pattern

// Working:
//  i=1;i<=n;i++
//  i=1;1<=4;i++ >>T
//  j=1;1<=4>> T >>* ||j=2;2<=4>> T >>* ||j=3;3<=4>> T >>*||j=4;4<=4>> T >>*||j=5 >>F >>Termainate "****"

//  i=2;2<=4;i++ >>T
//  j=1;1<=4>> T >>* ||j=2;2<=4>> T >>* ||j=3;3<=4>> T >>*||j=4;4<=4>> T >>*||j=5 >>F >>Termainate "****"

//  i=3;3<=4;i++ >>T
//  j=1;1<=4>> T >>* ||j=2;2<=4>> T >>* ||j=3;3<=4>> T >>*||j=4;4<=4>> T >>*||j=5 >>F >>Termainate "****"

//  i=4;4<=4;i++ >>T
//  j=1;1<=4>> T >>* ||j=2;2<=4>> T >>* ||j=3;3<=4>> T >>*||j=4;4<=4>> T >>*||j=5 >>F >>Termainate "****"

// i=5;5<=4;i++  >>F
// Terminate >> End both Loop

function printPattern(n){
    // console.log(n)
    let str="";
    // Nested Loop
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            //Print *
            str+="*" 
        }
        str+="\n"
    }
    console.log(str)
}
printPattern(4)