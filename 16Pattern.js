// Write a Javascript function to print the following pattern.
// 1234
//  123
//   12
//    1

// Javascript function >>printPattern()
// Print Pattern >>Downward Right angled traingle >> Right

// Approach:
// Create str varibale >> Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer loop   >> Manage n no. of rows >> i loop
// Inner Loop-1 >> Manage spaces        >> k loop
// Inner Loop-2 >> Manage n no. of cols >> j loop

// 1234 >>cols >>j loop 
// 1234 >>4 >> i loop >>Print 1-4 & 0 Spaces
//  123 >>3 >> i loop >>Print 1-3 & 1 Spaces
//   12 >>2 >> i loop >>Print 1-2 & 2 Spaces
//    1 >>1 >> i loop >>Print 1   & 3 Spaces

// i loop >> rows   >> start -4||end-1
// k loop >> spaces >> start -1||end-n-i
// j loop >> cols   >> start -1||end-i

// for(let i=n;i>=1;i--){
    // for(let k=1;k<=n-i;k++){
        // Print Spaces
        // Concat str >>" "
    // }
    // for(let j=1;j<=i;j++){
        // Print Values
        // Concat >> str >>j
    // }
    // Concat str >>"\n"
// }
// Print str variable

// Working:
// i=n;i>=1;i--
// i=4;4>=1 >>T
// k=1;k<=n-i;k++
// k=1;1<=4-4 >> 1<=0 >>F >>Terminate >>0 Spaces
// j=1;j<=i;j++
// j=1;1<=4 >>T >>1
// j=2;2<=4 >>T >>2
// j=3;3<=4 >>T >>3
// j=4;4<=4 >>T >>4
// j=5;5<=4 >>F >>Terminate >>"1234"

// i=3;3>=1 >>T
// k=1;k<=n-i;k++
// k=1;1<=4-3 >>1<=1 >>T >>1 Spaces
// k=2;2<=4-3 >>2<=1 >>F >>Terminate >>" "
// j=1;j<=i;j++
// j=1;1<=3 >>T >>1
// j=2;2<=3 >>T >>2
// j=3;3<=3 >>T >>3
// j=4;4<=3 >>F >>Terminate >>" 123"

// i=2;2>=1 >>T
// k=1;k<=n-i;k++
// k=1;1<=4-2 >>1<=2 >>T >>1 Spaces
// k=2;2<=4-2 >>2<=2 >>T >>1 Spaces
// k=3;3<=4-2 >>3<=2 >>F >>Terminate >>"  "
// j=1;j<=i;j++
// j=1;1<=2 >>T >>1
// j=2;2<=2 >>T >>2
// j=3;3<=2 >>F >>Terminate >>"  12"

// i=1;1>=1 >>T 
// k=1;k<=n-i;k++
// k=1;1<=4-1 >>1<=3 >>T >>1 Spaces
// k=2;2<=4-1 >>2<=3 >>T >>1 Spaces
// k=3;3<=4-1 >>3<=3 >>T >>1 Spaces
// k=4;4<=4-1 >>4<=3 >>F >>Termination >>"   "
// j=1;j<=i;j++
// j=1;1<=1 >>T >>1
// j=2;2<=1 >>F >>Terminate >>"   1"

// i=0;0>=1 >>F >>Termination
// End of all Loops

function printPattern(n){
    let str=""
    for(let i=n;i>=1;i--){
        for(let k=1;k<=n-i;k++){
            str+=" "
        }
        for(let j=1;j<=i;j++){
            str+=j
        }
        str+="\n"
    }
    console.log(str.trimEnd())

}
printPattern(4)