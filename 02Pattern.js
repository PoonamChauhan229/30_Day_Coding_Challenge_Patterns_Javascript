// Write a JavaScript function to print the following pattern:
// Output:
// 1111
// 2222
// 3333
// 4444

// JavaScript function >>printPattern()
// print the pattern   >>solid square >>row number

// Approach:
// let str="" >>hold final pattern
// Nested Loop >> loop inside a inside
// Outer Loop >>Control no. of rows >>i loop 
// Inner Loop >>Control no. of cols >>j loop

// 1234    >> cols >>j loop
// 1111 >1 >> rows >>i loop
// 2222 >2 >> rows >>i loop
// 3333 >3 >> rows >>i loop
// 4444 >4 >> rows >>i loop

// i loop >>start >>1 ||end >>4 n=4 || i=1;i<=n;i++
// j loop >>start >>1 ||end >>4 n=4 || j=1;j<=n;j++

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=n;j++){
        //Print the pattern
            // str+=i;
    // }
        // str+="\n"
// }
// Print str >> Final Pattern >> Output

// Working
// i=1;i<=n;i++
// i=1;1<=4;i++ >>T
// j=1;1<=4 >>T>>1||j=2;2<=4 >>T>>1||j=3;3<=4 >>T>>1||j=4;4<=4 >>T>>1 ||j=5;5<=4 >>F>>Termiante >>"1111"

// i=2;2<=4;i++ >>T
// j=1;1<=4 >>T>>2||j=2;2<=4 >>T>>2||j=3;3<=4 >>T>>2||j=4;4<=4 >>T>>2 ||j=5;5<=4 >>F>>Termiante >>"2222"

// i=3;3<=4;i++ >>T
// j=1;1<=4 >>T>>3||j=2;2<=4 >>T>>3||j=3;3<=4 >>T>>3||j=4;4<=4 >>T>>3 ||j=5;5<=4 >>F>>Termiante >>"3333"

// i=4;4<=4;i++ >>T
// j=1;1<=4 >>T>>4||j=2;2<=4 >>T>>4||j=3;3<=4 >>T>>4||j=4;4<=4 >>T>>4 ||j=5;5<=4 >>F>>Termiante >>"4444"

// i=5;5<=4;i++ >>F
// Termination >> Both The Loops

// str >>Print

function printPattern(n){
    // console.log(n)
    let str=""
    // nested loop
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            str+=i
        }
        str+="\n"
    }
    console.log(str)
}
printPattern(4)
