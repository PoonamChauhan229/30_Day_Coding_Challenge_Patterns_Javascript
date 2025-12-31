// Write a Javascript function to print the following pattern.
//    1
//   12
//  123
// 1234

// Javascript function >>printPattern()
// Print Pattern       >>Right angled traingle >>aligned right >>Sequentail Manner

// Approach:
// Create an str variable >> Hold Final Output
// let str=""
// Nested Loops
// Outer Loop >>Control n no. of rows >>i loop
// Inner Loop >>Control n no. of cols >>j loop

// 1234 >>cols >>j loop
//    1 >>1 >>i loop    >>Print 3 spaces >>Print 1 value  >>Sequentail Manner
//   12 >>2 >>i loop    >>Print 2 spaces >>Print 2 values >>Sequentail Manner
//  123 >>3 >>i loop    >>Print 1 space  >>Print 3 values >>Sequentail Manner
// 1234 >>4 >>i loop    >>Print 0 spaces >>Print 4 values >>Sequentail Manner

// i loop >>start-1 ||end-4 n=4 ||i=1;i<=n;i++
// j loop >>start-1 ||end-4 n=4 ||j=1;j<=n;j++ >>Print >>Conditionally >>Spaces+Values
// j<=n-i >>T >>" " >>F >>j-(n-i)
// T >>i=1 j=1 >>1<=4-1 >> 1<=3 >>T >>" "
// F >>i=1 j=4 >>4<=4-1 >> 4<=3 >>F >>4-(4-1) =4-3=1

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=n;j++){
        // >Conditionally >>Spaces+Values
        // if(j<=n-i){
            // Concat " " >> str
            // str+=" "
        // }else{
            // Concat value >>str
            // str+=(j-(n-i))
        // }
    // }
    // str+="\n" //next line    
// }

// Print str variable 

// Working:
// i=1;i<=n;i++  ||j<=n-i >>T ->" " >>F >>j-(n-i)
// i=1;1<=4;i++ >>T
// j=1;1<=4 >>T -->1<=4-1(3)>>T>>" "
// j=2;2<=4 >>T -->2<=4-1(3)>>T>>" "
// j=3;3<=4 >>T -->3<=4-1(3)>>T>>" "
// j=4;4<=4 >>T -->4<=4-1(3)>>F>>4-(4-1)=4-3=1
// j=5;5<=4 >>F >>Terminate >>str+="   1"

// i=2;2<=4;i++ >>T  ||j<=n-i >>T ->" " >>F >>j-(n-i)
// j=1;1<=4 >>T -->1<=4-2(2)>>T>>" "
// j=2;2<=4 >>T -->2<=4-2(2)>>T>>" "
// j=3;3<=4 >>T -->3<=4-2(2)>>F>>3-(4-2)=3-2=1
// j=4;4<=4 >>T -->4<=4-2(2)>>F>>4-(4-2)=4-2=2
// j=5;5<=4 >>F >>Terminate >>str+="  12" 

// i=3;3<=4;i++ >>T  ||j<=n-i >>T ->" " >>F >>j-(n-i)
// j=1;1<=4 >>T -->1<=4-3(1)>>T>>" "
// j=2;2<=4 >>T -->2<=4-3(1)>>F>>2-(4-3)=2-1=1
// j=3;3<=4 >>T -->3<=4-3(1)>>F>>3-(4-3)=3-1=2
// j=4;4<=4 >>T -->4<=4-3(1)>>F>>4-(4-3)=4-1=3
// j=5;5<=4 >>F >>Terminate >>str+=" 123"

// i=4;4<=4;i++ >>T  ||j<=n-i >>T ->" " >>F >>j-(n-i)
// j=1;1<=4 >>T -->1<=4-4(0)>>F>>1-(4-4)=1-0=1
// j=2;2<=4 >>T -->2<=4-4(0)>>F>>2-(4-4)=2-0=2
// j=3;3<=4 >>T -->3<=4-4(0)>>F>>3-(4-4)=3-0=3
// j=4;4<=4 >>T -->4<=4-4(0)>>F>>4-(4-4)=4-0=4
// j=5;5<=4 >>F >>Terminate >>str+="1234"

// i=5;5<=4;i++ >>F
// Terminate >>Loop End

// Print str variable

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            // console.log("i-",i,"j-",j)
            if(j<=n-i){
                // concat " "
                str+=" "
            }else{
                // concat value
                str+=(j-(n-i))
            }
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)
