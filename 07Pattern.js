// Write a Javascript function to print a downward facing right-angled triangle.

// Output:
// ****
// ***
// **
// *

// Javascript function                          >>printPattern()
// print a downward facing right-angled triangle

// Approach:
// Create an str Variable -Final Output Hold
// let str=""
// Nested Loops >>Loop inside an Loop >>Outer Loop and Inner Loop
// Outer Loop >>Control no. of rows >>i loop
// Inner Loop >>Control no. of cols >>j loop
// 1234      >>j loop
// ****  >>4 >>i loop  >>Print 4
// ***   >>3 >>i loop  >>Print 3
// **    >>2 >>i loop  >>Print 2
// *     >>1 >>i loop  >>Print 1

// i loop >>start-4 n=4 ||end-1  >>i=n;i>=1;i--
// j loop >>start-1     ||end-i  >>j=1;j<=i;j++

// for(let i=n;i>=1;i--){
    // for(j=1;j<=i;j++){
        // Concat
        // str+="*"
    // }
    // str+="\n" //next line
// }
// Print str Variable >>Final Output

// Working:
// i=n;i>=1;i--
// i=4;4>=1;i-- >>T
// j=1;1<=4 >>T>>"*" ||j=2;2<=4 >>T>>"*" ||j=3;3<=4 >>T >>"*" ||j=4;4<=4 >>T>>"*"||j=5;5<=4 >>F >>Terminate >>str+="****"

// i=3;3>=1;i-- >>T
// j=1;1<=3 >>T >>"*" ||j=2;2<=3 >>T>>"*" ||j=3;3<=3 >>T >>"*" ||j=4;4<=3 >>F >>Terminate >>str+="***"

// i=2;2>=1;i-- >>T
// j=1;1<=2 >>T >>"*" ||j=2;2<=2 >>T >>"*" ||j=3;3<=2 >>F >>Terminate >>str+="**"

// i=1;1>=1;i-- >>T
// j=1;1<=1 >>T >>"*" ||j=2;2<=1 >>F >>Terminate >>str+="*"

// i=0;0>=1;i-- >>F
// Terminate >>End Loops
// Print Str Variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=n;i>=1;i--){
        for(j=1;j<=i;j++){
            // console.log("i-",i,"j-",j)
            str+="*"
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)