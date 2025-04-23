// Write a JavaScript function to print the following pattern:
// Output:
// 1234
// 1234
// 1234
// 1234

// JavaScript function >>printPattern()
// print the pattern   >>solid square pattern

// Approach:
// Create a str Variable
// let str="" >> final output pattern
// Nested loops >>Loop inside the loop >>Outer loop and Inner Loop
// Outer loop >> Control no. of rows >>i loop
// Inner Loop >> Control no. of cols >>j loop

// 1234 >>cols >>j loop

// 1234 >>1    >>i loop 
// 1234 >>2    >>i loop
// 1234 >>3    >>i loop
// 1234 >>4    >>i loop

// i loop >>start -1 ||end -4 >>n=4 >>i=1;i<=n;i++
// j loop >>start -1 ||end -4 >>n=4 >>j=1;j<=n;j++

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=n;j++){
        // str+=j
    // }
    // str+="\n"
// }
// Print str >> Final output

// Working
// i=1;i<=n;i++
// i=1;1<=4;i++ >>T
// j=1;1<=4 >>T >>1 ||j=2;2<=4 >>T >>2 ||j=3;3<=4 >>T >>3 ||j=4;4<=4 >>T >>4 ||j=5;5<=4 >>F >>Terminate||"1234"

// i=2;2<=4;i++ >>T
// j=1;1<=4 >>T >>1 ||j=2;2<=4 >>T >>2 ||j=3;3<=4 >>T >>3 ||j=4;4<=4 >>T >>4 ||j=5;5<=4 >>F >>Terminate||"1234"

// i=3;3<=4;i++ >>T
// j=1;1<=4 >>T >>1 ||j=2;2<=4 >>T >>2 ||j=3;3<=4 >>T >>3 ||j=4;4<=4 >>T >>4 ||j=5;5<=4 >>F >>Terminate||"1234"

// i=4;4<=4;i++ >>T
// j=1;1<=4 >>T >>1 ||j=2;2<=4 >>T >>2 ||j=3;3<=4 >>T >>3 ||j=4;4<=4 >>T >>4 ||j=5;5<=4 >>F >>Terminate||"1234"

// i=5;5<=4 >>F
// Terminate >> Loop Both

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            // Print j values
            str+=j
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)
