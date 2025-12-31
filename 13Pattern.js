// Write a Javascript function to print the following pattern.
// ****
//  ***
//   **
//    *

// Javascript function >>printPattern()
// Print Pattern       >>Right angled traingle >>alignment right

// Approach:
// Create str variable >>Final Output
// let str=""
// Nested loops
// Outer Loop >>Control n no. of rows >>i loop
// Inner Loop >>Control n no.of cols  >>j loop

// 1234 >>cols >>j loop
// **** >>4 >>i loop  >>Print 4 stars  >>Print 0 Spaces
//  *** >>3 >>i loop  >>Print 3 stars  >>Print 1 Space
//   ** >>2 >>i loop  >>Print 2 stars  >>Print 2 Spaces
//    * >>1 >>i loop  >>Print 1 star   >>Print 3 Spaces

// i loop >>start-4 n=4 ||end-1     ||i=n;i>=1;i--
// j loop >>start-1     ||end-4 n=4 ||j=1;j<=n;j++ >>Print >>Conditionally Spaces+Stars
// j<n-i+1 >>True >>" "|| False >>"*"
// i=4, j=1 >>1<4-4+1 = 1<1>>False >>"*"
// i=3, j=1 >>1<4-3+1 =1<1+1 =1<2 >>True >>" "

// for(let i=n;i>=1;i--){
    // for(let j=1;j<=n;j++){
        // Conditionally Spaces+Stars
        // if(j<n-i+1){
            // concat " " >>str
            // str+=" "
        // }else{
            // concat "*" >>str
            // str+="*"
        // }
    // }
    // str+="\n" //next line
// }
// Print str variable

// Working:
// i=n;i>=1;i--
// i=4;4>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-4+1(1)>>F >>"*"
// j=2;2<=4 >>T -->2<4-4+1(1)>>F >>"*"
// j=3;3<=4 >>T -->3<4-4+1(1)>>F >>"*"
// j=4;4<=4 >>T -->4<4-4+1(1)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+="****"

// i=3;3>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-3+1(2)>>T >>" "
// j=2;2<=4 >>T -->2<4-3+1(2)>>F >>"*"
// j=3;3<=4 >>T -->3<4-3+1(2)>>F >>"*"
// j=4;4<=4 >>T -->4<4-3+1(2)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+=" ***"

// i=2;2>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-2+1(3)>>T >>" "
// j=2;2<=4 >>T -->2<4-2+1(3)>>T >>" "
// j=3;3<=4 >>T -->3<4-2+1(3)>>F >>"*"
// j=4;4<=4 >>T -->4<4-2+1(3)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+="  **"

// i=1;1>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-1+1(4)>>T >>" "
// j=2;2<=4 >>T -->2<4-1+1(4)>>T >>" "
// j=3;3<=4 >>T -->3<4-1+1(4)>>T >>" "
// j=4;4<=4 >>T -->4<4-1+1(4)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+="   *"

// i=0;0>=1;i-- >>F
// Termination >>End of Loops

// Print str variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=n;i>=1;i--){
        for(let j=1;j<=n;j++){
            // console.log("i-",i,"j-",j)
            if(j<n-i+1){
                str+=" "
            }else{
                str+="*"
            }
        }
        str+="\n"
    } 
    console.log(str.trimEnd()) 
}
printPattern(4)