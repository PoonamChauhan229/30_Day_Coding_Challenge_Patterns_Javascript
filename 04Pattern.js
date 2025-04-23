// Write a Javascript function to print a right-angled triangle.
// Output:
// *
// **
// ***
// ****

// Javascript function          >>printPattern()
// print a right-angled triangle

// Approach:
// Create a str variable >> Final Output 
// let str="" >> Final Output || Pattern
// Nested loop >>Loop inside the loop >> 2 loops >>Outer Loop and Inner loop
// Outer Loop  >>Control the no. of rows  >> i loop
// Inner Loop  >>Control the no. of cols  >> j loop
// 1234   >> j loop
// *    1 >> i loop
// **   2 >> i loop
// ***  3 >> i loop
// **** 4 >> i loop

// i loop >>start-1  ||end-4   >>n=4 ||i=1;i<=n;i++
// j loop >>start-1  ||end-i         ||j=1;j<=i;j++ >>Printing Star||Pattern

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=i;j++){
        // Printing Star||Pattern
            // str+="*"
    // }
        // str+="\n"
// }
// Print str >> Final Output


// Working:
// i=1;i<=n;i++
// i=1;1<=4;i++ >>T
// j=1;1<=1 >>T >>"*" ||j=2;2<=1 >>F >>Terminate ||str="*"

// i=2;2<=4;i++ >>T
// j=1;1<=2 >>T >>"*" ||j=2;2<=2 >>T >>"*" ||j=3;3<=2 >>F >> Terminate ||str="**"

// i=3;3<=4;i++ >>T
// j=1;1<=3 >>T >>"*" ||j=2;2<=3 >>T >>"*" ||j=3;3<=3 >>T >>"*" ||j=4;4<=3 >>F >>Terminate ||str="***"

// i=4;4<=4;i++ >>T
// j=1;1<=4 >>T >>"*" ||j=2;2<=4 >>T >>"*" ||j=3;3<=4 >>T >>"*" ||j=4;4<=4 >>T >>"*" ||j=5;5<=4 >>F >>Terminate || str="****"

// i=5;5<=4;i++ >>F >>Terminate 
// End Both loops

// Print str Variable
function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            // console.log("i",i,"j",j)
            str+="*"
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)