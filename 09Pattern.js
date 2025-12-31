// Write a JavaScript function that prints a downward-facing right-angled triangle.
// Output 
// 1234
// 123
// 12
// 1

// JavaScript function                       >>printPattern()
// prints a downward-facing right-angled triangle

// Approach:
// Create an str variable >>Hold >>Final Output
// let str=""
// Nested Loops >>Loop inside an Loop
// Outer Loop >>Control n no. of rows >> i loop
// Inner Loop >>Control n no. of cols >> j loop
// 1234
// 1234  >>4 >> i loop  >>Print 4 values >> j values
// 123   >>3 >> i loop  >>Print 3 values >> j values
// 12    >>2 >> i loop  >>Print 2 values >> j values
// 1     >>1 >> i loop  >>Print 1 value  >> j values

// i loop >>start-4 n=4 ||end-1  >> i=n;i>=1;i--
// j loop >>start-1     ||end-i  >> j=1;j<=i;j++

// for(let i=n;i>=1;i--){
    // for(let j=1;j<=i;j++){
        // Concat str >> j values
        // str+=j
    // }
    // str+="\n"
// }

// print str variable

// Working:
// i=n;i>=1;i--
// i=4;4>=1;i-- >>T
// j=1;1<=4 >>T>>"1" ||j=2;2<=4 >>T>>"2" ||j=3;3<=4 >>T>>"3" ||j=4;4<=4 >>T>>"4" ||j=5;5<=4 >>F >>Terminate >>str+="1234"

// i=3;3>=1;i-- >>T
// j=1;1<=3 >>T>>"1" ||j=2;2<=3 >>T>>"2" ||j=3;3<=3 >>T>>"3" ||j=4;4<=3 >>F >>Terminate >>str+="123"

// i=2;2>=1;i-- >>T
// j=1;1<=2 >>T>>"1" ||j=2;2<=2 >>T>>"2" ||j=3;3<=2 >>F >>Terminate >>str+="12"

// i=1;1>=1;i-- >>T
// j=1;1<=1 >>T>>"1" ||j=2;2<=1 >>F >>Terminate >>str+="1"

// i=0;0>=1;i-- >>F
// Terminate >>End of Loops

// Print str Variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            // Execution
            // console.log("i-",i,"j-",j)
            str+=j
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)

