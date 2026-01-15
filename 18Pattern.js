// Write a Javascript function to print the following pattern.
//    1
//   222
//  33333
// 4444444

// Javascript function >>printPattern()
// Print Pattern >>Pyramid >>Center Aligned >>Print Numbers


// Approach:
// Create str variable >>Final Output
// let str=""
// Nested Loops >> 3loops
// Outer loop   >>Manage n no.of rows   >>i loop
// Inner loop 1 >>Manage n no.of spaces >>k loop
// Inner loop 2 >>Manage n no.of cols   >>j loop

// 1234567 >>cols >> j loop
//    1    >>1 >>i loop >>Print 1 (1 times) & 3 Spaces >> Print i value
//   222   >>2 >>i loop >>Print 2 (3 times) & 2 Spaces >> Print i value
//  33333  >>3 >>i loop >>Print 3 (5 times) & 1 Spaces >> Print i value
// 4444444 >>4 >>i loop >>Print 4 (7 times) & 0 Spaces >> Print i value

// i loop >> start-1 ||end-4 n=4  || i=1;i<=n;i++
// k loop >> start-1 ||end-(n-i)  ||k=1;k<=(n-i);k++ >>1-3  ||1-2||1-1 
// j loop >> start-1 ||end-(2*i)-1||j=1;j<=(2*i)-1;j++ >>1-1||1-3||1-5||1-7 

// for(let i=1;i<=n;i++){
    // for(let k=1;k<=n-i;k++){
        // Print spaces
        // str >>concat>> spaces
    // }
        // for(j=1;j<=(2*i)-1;j++){
            // Print i values
            // str >>concat >>1 value
        // }
        // Concat >>str >>"\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++ >> n=4
// i=1;1<=4 >> True
// k=1;k<=n-i;k++
// k=1;1<=4-1 >>1<=3 >>T >>" "
// k=2;2<=4-1 >>2<=3 >>T >>" "
// k=3;3<=4-1 >>3<=3 >>T >>" "
// k=4;4<=4-1 >>4<=3 >>F >>Terminate >>str+="   "
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*1)-1 >>1<=1 >>T >>"1"
// j=2;2<=(2*1)-1 >>2<=1 >>F >>>>Terminate >>str+="1"

// i=2;2<=4 >> True
// k=1;k<=n-i;k++
// k=1;1<=4-2 >>1<=2 >>T >>" "
// k=2;2<=4-2 >>2<=2 >>T >>" "
// k=3;3<=4-2 >>3<=2 >>F >>Terminate >>str+="  "
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*2)-1 >>1<=3 >>T >>"2"
// j=2;2<=(2*2)-1 >>2<=3 >>T >>"2"
// j=3;3<=(2*2)-1 >>3<=3 >>T >>"2"
// j=4;4<=(2*2)-1 >>4<=3 >>F >>Terminate >>str+="222"

// i=3;3<=4 >> True
// k=1;k<=n-i;k++
// k=1;1<=4-3 >>1<=1 >>T >>" "
// k=2;2<=4-3 >>2<=1 >>F >>Terminate >>str+=" "
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*3)-1 >>1<=5 >>T >>"3"
// j=2;2<=(2*3)-1 >>2<=5 >>T >>"3"
// j=3;3<=(2*3)-1 >>3<=5 >>T >>"3"
// j=4;4<=(2*3)-1 >>4<=5 >>T >>"3"
// j=5;5<=(2*3)-1 >>5<=5 >>T >>"3"
// j=6;6<=(2*3)-1 >>6<=5 >>>>F >>Terminate >>str+="33333"

// i=4;4<=4 >> True
// k=1;k<=n-i;k++
// k=1;1<=4-4 >>1<=0 >>F >>Terminate
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*4)-1 >>1<=7 >>T >>"4"
// j=2;2<=(2*4)-1 >>2<=7 >>T >>"4"
// j=3;3<=(2*4)-1 >>3<=7 >>T >>"4"
// j=4;4<=(2*4)-1 >>4<=7 >>T >>"4"
// j=5;5<=(2*4)-1 >>5<=7 >>T >>"4"
// j=6;6<=(2*4)-1 >>6<=7 >>T >>"4"
// j=7;7<=(2*4)-1 >>7<=7 >>T >>"4"
// j=8;8<=(2*4)-1 >>8<=7 >>F >>Terminate >>str+="4444444"

// i=5;5<=4 >> False >>Terminate
// End of the loops
// Final Output Pattern

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        // console.log("i=",i)
        for(let k=1;k<=n-i;k++){
            // console.log("k=",k)
            str+=" "
        }
        for(let j=1;j<=(2*i)-1;j++){
            // console.log("j=",j)
            str+=i
        }
        str+="\n"
    }
    console.log(str.trimEnd())

}
printPattern(4)



