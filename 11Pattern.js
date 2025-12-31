// Write a Javascript function to print the following pattern.
//    1
//   22
//  333
// 4444

// Javascript function >>printPattern()
// Print pattern       >>Right angle triangle >>aligned right >>rows nos

// Approach:
// Create str variable >>Hold Final Output
// let str=""
// Nested Loops
// Outer Loop >>Control n no. of rows >>i loop
// Inner Loop >>Control n no. of cols >>j loop

// Analyze >> Rows || cols
// 1234  >>cols  >>j loop
//    1  >>1 >>i loop  >>Print 1 value  >>Print 3 spaces >>i value
//   22  >>2 >>i loop  >>Print 2 values >>Print 2 spaces >>i value
//  333  >>3 >>i loop  >>Print 3 values >>Print 1 space  >>i value
// 4444  >>4 >>i loop  >>Print 4 values >>Print 0 space  >>i value

// i loop >>start-1 ||end-4 n=4 ||i=1;i<=n;i++
// j loop >>start-1 ||end-4 n=4 ||j=1;j<=n;j++ >>print >>Conditionally-spaces+value
// j<=n-i >>T >>" " ||F >>i value
// i=1, j=1 >>1<=4-1(3) >>1<=3 >>T >>" "

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=n;j++){
        // if(j<=n-i){
            // Print >>Concat >>" " >>str
            // str+=" "
        // }else{
            // >>Concat >>i value >>str
            // str+=i
        // }
    // }
    // str+="\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++    ||j<=n-i
// i=1;1<=4;i++ >>T
// j=1;1<=4 >>T ->>1<=4-1(3)>>T>>" "
// j=2;2<=4 >>T ->>2<=4-1(3)>>T>>" "
// j=3;3<=4 >>T ->>3<=4-1(3)>>T>>" "
// j=4;4<=4 >>T ->>4<=4-1(3)>>F>>"1"
// j=5;5<=4 >>F >>Terminate >>str+="   1" 

// i=2;2<=4;i++ >>T
// j=1;1<=4 >>T ->>1<=4-2(2)>>T>>" "
// j=2;2<=4 >>T ->>2<=4-2(2)>>T>>" "
// j=3;3<=4 >>T ->>3<=4-2(2)>>F>>"2"
// j=4;4<=4 >>T ->>4<=4-2(2)>>F>>"2"
// j=5;5<=4 >>F >>Terminate >>str+="  22"

// i=3;3<=4;i++ >>T
// j=1;1<=4 >>T ->>1<=4-3(1)>>T>>" "
// j=2;2<=4 >>T ->>2<=4-3(1)>>F>>"3"
// j=3;3<=4 >>T ->>3<=4-3(1)>>F>>"3"
// j=4;4<=4 >>T ->>4<=4-3(1)>>F>>"3"
// j=5;5<=4 >>F >>Terminate >>str+=" 333"

// i=4;4<=4;i++ >>T
// j=1;1<=4 >>T ->>1<=4-4(0)>>F>>"4"
// j=2;2<=4 >>T ->>2<=4-4(0)>>F>>"4"
// j=3;3<=4 >>T ->>3<=4-4(0)>>F>>"4"
// j=4;4<=4 >>T ->>4<=4-4(0)>>F>>"4"
// j=5;5<=4 >>F >>Terminate >>str+="4444"

// i=5;5<=4;i++ >>F
// Terminate >>End loop

// Print str variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(j<=n-i){
                str+=" "
            }else{
                str+=i
            }
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)