// Write a Javascript function to print the following pattern.
//    *
//   **
//  ***
// ****

// Javascript function         >>printPattern()
// print the following pattern >>right angle triangle >>right 

// Approach:
// Create an str variable >>Hold >>final output
// let str=""
// Nested Loops
// Outer Loop >>Control no. of rows >>i loop
// Inner Loop >>Control no.of cols  >>j loop

// 1234     >>j loop
//    * >>1 >>i loop  >>Print 1 star   >>Print 3 spaces
//   ** >>2 >>i loop  >>Print 2 stars  >>Print 2 spaces
//  *** >>3 >>i loop  >>Print 3 stars  >>Print 1 spaces
// **** >>4 >>i loop  >>Print 4 stars  >>Print 0 spaces

// i loop >>start-1 ||end-4 n=4 ||i=1;i<=n;i++
// j loop >>start-1 ||end-4 n=4 ||j=1;j<=n;j++ >>Print >>Space+Stars >>Conditionally
// j<=n-i >>T >>" " ||F>>"*" ||i=1 j=1 ||1<=(4-1)>>1<=3>>F >>" " 

// for(let i=1;i<=n;i++){
  // for(let j=1;j<=n;j++){
    // Space+Stars >>Conditionally
    // if(j<=n-i){
      // concat >> " "
      // str+=" "
    // }else{
        // concat >>"*"
        // str+="*"
    // }
  // }
  // str+="\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++
// i=1;1<=4;i++ >>T   ||j<=n-i
// j=1;1<=4 >>T -->>1<=4-1(3)>>T >>" "
// j=2;2<=4 >>T -->>2<=4-1(3)>>T >>" "
// j=3;3<=4 >>T -->>3<=4-1(3)>>T >>" "
// j=4;4<=4 >>T -->>4<=4-1(3)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+="   *" 

// i=2;2<=4;i++ >>T   ||j<=n-i
// j=1;1<=4 >>T -->>1<=4-2(2)>>T >>" "
// j=2;2<=4 >>T -->>2<=4-2(2)>>T >>" "
// j=3;3<=4 >>T -->>3<=4-2(2)>>F >>"*"
// j=4;4<=4 >>T -->>4<=4-2(2)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+="  **"

// i=3;3<=4;i++ >>T   ||j<=n-i
// j=1;1<=4 >>T -->>1<=4-3(1)>>T >>" "
// j=2;2<=4 >>T -->>2<=4-3(1)>>F >>"*"
// j=3;3<=4 >>T -->>3<=4-3(1)>>F >>"*"
// j=4;4<=4 >>T -->>4<=4-3(1)>>F >>"*"
// j=5;5<=4 >>F >>terminate >>str+=" ***"

// i=4;4<=4;i++ >>T   ||j<=n-i 
// j=1;1<=4 >>T -->>1<=4-4(0)>>F >>"*"
// j=2;2<=4 >>T -->>2<=4-4(0)>>F >>"*"
// j=3;3<=4 >>T -->>3<=4-4(0)>>F >>"*"
// j=4;4<=4 >>T -->>4<=4-4(0)>>F >>"*"
// j=5;5<=4 >>F >>Terminate >>str+="****"

// i=5;5<=4;i++ >>F
// Terminate Loop
// End

// Print str variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        if(j<=n-i){
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