// Write a Javascript function to print the following pattern.
//    1
//   123
//  12345
// 1234567

// Javascript function >>printPattern()
// Print Pattern >>Pyramid >>Center Alignment

// Approach:
// Create str variable >>Final Output
// let str=""
// Nested Loops
// Outer Loop  >>Manage n no.of rows >>i loop
// Inner Loop1 >>Manage spaces       >>k loop
// Inner Loop2 >>Manage n no.of cols >>j loop

// 1234567 >>cols >>j loop
//    1    >>1 >>i loop >>Print 1      & 3 spaces >>Print j values
//   123   >>2 >>i loop >>Print 1 to 3 & 2 spaces >>Print j values
//  12345  >>3 >>i loop >>Print 1 to 5 & 1 spaces >>Print j values
// 1234567 >>4 >>i loop >>Print 1 to 7 & 0 spaces >>Print j values

// i loop >>start-1 || end-4 n=4 ||i=1;i<=n;i++
// k loop >>start-1 || end-(n-i) ||4-1=3,4-2=2,4-3=1,4-4=0 
// ||k=1;k<=(n-i);k++
// j loop >>start-1 || end-((2*i)-1)||2-1=1,4-1=3,6-1=5,8-1=7 
// ||j=1;k<=(2*i)-1;j++

// for(let i=1;i<=n;i++){
    // for(let k=1;k<=(n-i);k++){
        // Print spaces
        // Concat str
    // }
    // for(let j=1;j<=(2*i)-1;j++){
        //Print j value
        // concat >>j value >>str 
    // } 
    // concat >>str >>"\n"
// }
// Print str variable 

// Working:
// i=1;i<=n;i++ ||n=4
// i=1;1<=4 >>True
// k=1;k<=(n-i);k++
// k=1;1<=4-1 >>1<=3 >> T >>" "
// k=2;2<=4-1 >>2<=3 >> T >>" "
// k=3;3<=4-1 >>3<=3 >> T >>" "
// k=4;4<=4-1 >>4<=3 >> F >>Terminate >>"   "
// j=1;j<=(2*i)-1;j++
// j=1;1<=2-1 >>1<=1 >> T >>"1"
// j=2;2<=2-1 >>2<=1 >> F >>Terminate >>"1"

// i=2;2<=4 >>True
// k=1;k<=(n-i);k++
// k=1;1<=4-2 >>1<=2 >> T >>" "
// k=2;2<=4-2 >>2<=2 >> T >>" "
// k=3;3<=4-2 >>3<=2 >> F >>Terminate >>"  "
// j=1;j<=(2*i)-1;j++
// j=1;1<=4-1 >>1<=3 >> T >>"1"
// j=2;2<=4-1 >>2<=3 >> T >>"2"
// j=3;3<=4-1 >>3<=3 >> T >>"3"
// j=4;4<=4-1 >>4<=3 >> F >>Terminate >>"123"

// i=3;3<=4 >>True
// k=1;k<=(n-i);k++
// k=1;1<=4-3 >>1<=1 >> T >>" "
// k=2;2<=4-3 >>2<=1 >> F >>Terminate >>" "
// j=1;j<=(2*i)-1;j++
// j=1;1<=6-1 >>1<=5 >> T >>"1"
// j=2;2<=6-1 >>2<=5 >> T >>"2"
// j=3;3<=6-1 >>3<=5 >> T >>"3"
// j=4;4<=6-1 >>4<=5 >> T >>"4"
// j=5;5<=6-1 >>5<=5 >> T >>"5"
// j=6;6<=6-1 >>6<=5 >> F >>Terminate >>"12345"

// i=4;4<=4 >>True
// k=1;k<=(n-i);k++
// k=1;1<=4-4 >>1<=0 >> F >>Terminate 
// j=1;j<=(2*i)-1;j++
// j=1;1<=8-1 >>1<=7 >> T >>"1"
// j=2;2<=8-1 >>2<=7 >> T >>"2"
// j=3;3<=8-1 >>3<=7 >> T >>"3"
// j=4;4<=8-1 >>4<=7 >> T >>"4"
// j=5;5<=8-1 >>5<=7 >> T >>"5"
// j=6;6<=8-1 >>6<=7 >> T >>"6"
// j=7;7<=8-1 >>7<=7 >> T >>"7"
// j=8;8<=8-1 >>8<=7 >> F >>Terminate >>"1234567"

// i=5;5<=4 >>False >>Temintion
// End of the Loops
// Print str variable

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        // console.log("i=",i)
        for(k=1;k<=(n-i);k++){
            str+=" "
            // console.log("k=",k)
        }
        for(j=1;j<=(2*i)-1;j++){
            str+=j
            // console.log("j=",j)
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)