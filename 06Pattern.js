// Write a Javascript function to print a right-angled triangle.
// Output:
// 1
// 12
// 123
// 1234

// Javascript function          >>printPattern()
// print a right-angled triangle

// Approach:
// Create an variable >>Hold Pattern
// let str="" >>Hold Output
// Nested loops >>Loop inside the inside >>2 loops >>Outer Loop & Inner loop
// Outer Loop >>Control no. of rows >>i loop
// Inner loop >>Control no. of cols >>j loop
// 1234    >>j loop
// 1     1 >>i loop
// 12    2 >>i loop
// 123   3 >>i loop
// 1234  4 >>i loop

// i loop >>start-1  ||end-4 n=4   ||i=1;i<=n;i++
// j loop >>start-1  ||end-i       ||j=1;j<=i;j++

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=i;j++){
        // str+=j
    // }
    // str+="\n" //next line
// }
// Print str >>Final Output

// Working
// i=1;i<=n;i++
// i=1;1<=4;i++ >>T
// j=1;1<=1 >>T >>"1" ||j=2;2<=1 >>F >>Termination ||str="1"

// i=2;2<=4;i++ >>T 
// j=1;1<=2 >>T >>"1" ||j=2;2<=2 >>T >>"2" ||j=3;3<=2 >>F >>Termination ||str="12"

// i=3;3<=4;i++ >>T 
// j=1;1<=3 >>T >>"1" ||j=2;2<=3 >>T >>"2" ||j=3;3<=3 >>T >>"3" ||j=4;4<=3 >>F >>Termination ||str="123"

// i=4;4<=4;i++ >>T 
// j=1;1<=4 >>T >>"1" ||j=2;2<=4 >>T >>"2" ||j=3;3<=4 >>T >>"3" ||j=4;4<=4 >>T >>"4" ||j=5;5<=4 >>F >>Termination ||str="1234"

// i=5;5<=4;i++ >>F
// Terminate >>End of both loops

// Print str >> Output Pattern

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            // console.log("i:",i,"j:",j)
            str+=j
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)