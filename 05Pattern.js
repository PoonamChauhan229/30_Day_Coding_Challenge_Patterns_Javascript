// Write a Javascript function to print a right-angled triangle.
// Output:
// 1
// 22
// 333
// 4444

// Javascript function           >>printPattern()
// print a right-angled triangle

// Approach:
// Create an variable >> Final Pattern
// let str=""  >>Hold our output
// Nested Loops >>Loop inside an loop >>Outer Loop and Inner loop
// Outer Loop  >> Control no of rows  >>i loop
// Inner Loop  >> Control no of cols  >>j loop

// 1234     >>j loop
// 1     1  >>i loop
// 22    2  >>i loop
// 333   3  >>i loop
// 4444  4  >>i loop

// i loop>> start-1   ||end-4  n=4  ||i=1;i<=n;i++
// j loop>> start-1   ||end-i       ||j=1;j<=i;j++

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=i;j++){
        // str+=i
    // }
    // str+="\n"
// }
// Print str >>Final Pattern

// Working
// i=1;i<=n;i++
// i=1;1<=4;i++ >>T
// j=1;1<=1;>>T >>"1"||j=2;2<=1; >>F >>Terminate   ||str="1"

// i=2;2<=4;i++ >>T
// j=1;1<=2 >>T >>"2" ||j=2;2<=2 >>T >>"2" ||j=3;3<=2 >>F >>Terminate  ||str="22"

// i=3;3<=4;i++ >>T
// j=1;1<=3 >>T >>"3" ||j=2;2<=3 >>T >>"3" ||j=3;3<=3 >>T >>"3" || j=4;4<=3 >>Terminate ||str="333"

// i=4;4<=4;i++ >>T
// j=1;1<=4 >>T >>"4" || j=2;2<=4 >>T >>"4" || j=3;3<=4 >>T >>"4" || j=4;4<=4 >>T >>"4" || j=5;5<=4 >>F >>Terminate || str="4444"

// i=5;5<=4;i++ >>F
// End here >> Termination

// Print str variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            str+=i
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)