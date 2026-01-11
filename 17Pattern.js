// Write a Javascript function to print the following pattern.
//    *
//   ***
//  *****
// *******

// Javascript function >>printPattern()
// Print Pattern >>Pyramid >>Center Alignment

// Approach:
// Create str variable >>Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer Loop  - Manage n no.of rows >>i loop
// Inner Loop 1- Manage spaces       >>k loop
// Inner Loop 2- Manage n no.of cols >>j loop

// 1234567  >> j loop
//    *     >> 1 >>i loop >>Print 1 star & 3 Spaces 
//   ***    >> 2 >>i loop >>Print 3 star & 2 Spaces    
//  *****   >> 3 >>i loop >>Print 5 star & 1 Spaces 
// *******  >> 4 >>i loop >>Print 7 star & 0 Spaces

// i loop >>start-1 ||end-n ||n=4
// k loop >>start-1 ||end-n-i ||i=1,3||i=2,2
// j loop >>start-1 ||end-(2*i)-1
// (2*i)-1>>i=1 >>(2*1)-1=2-1>>1 || i=2 ,(2*2)-1>>4-1=3

// for(let i=1;i<=n;i++){
//  for(let k=1;k<=n-i;k++){
        // Print spaces >>" "
        // Conact >>str >>" "
    // }
    // for(let j=1;j<=(2*i)-1;j++){
        // Print *
        // Conact >>str>>"*"
    // }
    // Conact str >>"/n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++ ||n=4
// i=1;1<=4 >>T
// k=1;k<=n-i;k++
// k=1;1<=4-1 >>1<=3>>T >>" "
// k=2;2<=4-1 >>2<=3>>T >>" "
// k=3;3<=4-1 >>3<=3>>T >>" "
// k=4;4<=4-1 >>4<=3>>F >>Terminate >>str="   "
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*1)-1 >>1<=2-1 >>1<=1 >>T >>"*"
// j=2;2<=(2*1)-1 >>2<=2-1 >>2<=1 >>F >>Terminate >>str="   *"

// i=2;2<=4 >>T 
// k=1;k<=n-i;k++
// k=1;1<=4-2 >> 1<=2 >>T >>" "
// k=2;2<=4-2 >> 2<=2 >>T >>" "
// k=3;3<=4-2 >> 3<=2 >>F >>Terminate >>str="  "
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*2)-1 >>1<=4-1 >>1<=3 >>T >>"*"
// j=2;2<=(2*2)-1 >>2<=4-1 >>2<=3 >>T >>"*"
// j=3;3<=(2*2)-1 >>3<=4-1 >>3<=3 >>T >>"*"
// j=4;4<=(2*2)-1 >>4<=4-1 >>4<=3 >>F >>Terminate >>str="  ***"

// i=3;3<=4 >>T 
// k=1;k<=n-i;k++
// k=1;1<=4-3 >> 1<=1 >>T >>" "
// k=2;2<=4-3 >> 2<=1 >>F >>Terminate >>F >>str=" " 
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*3)-1 >>1<=6-1 >>1<=5 >>T >>"*"
// j=2;2<=(2*3)-1 >>2<=6-1 >>2<=5 >>T >>"*"
// j=3;3<=(2*3)-1 >>3<=6-1 >>3<=5 >>T >>"*"
// j=4;4<=(2*3)-1 >>4<=6-1 >>4<=5 >>T >>"*"
// j=5;5<=(2*3)-1 >>5<=6-1 >>5<=5 >>T >>"*"
// j=6;6<=(2*3)-1 >>6<=6-1 >>6<=5 >>F >>Terminate >>str=" *****"

// i=4;4<=4 >>T 
// k=1;k<=n-i;k++
// k=1;1<=4-4 >> 1<=0 >>F >>Terminate
// j=1;j<=(2*i)-1;j++
// j=1;1<=(2*4)-1 >>1<=8-1 >>1<=7 >>T >>"*"
// j=2;2<=(2*4)-1 >>2<=8-1 >>2<=7 >>T >>"*"
// j=3;3<=(2*4)-1 >>3<=8-1 >>3<=7 >>T >>"*"
// j=4;4<=(2*4)-1 >>4<=8-1 >>4<=7 >>T >>"*"
// j=5;5<=(2*4)-1 >>5<=8-1 >>5<=7 >>T >>"*"
// j=6;6<=(2*4)-1 >>6<=8-1 >>6<=7 >>T >>"*"
// j=7;7<=(2*4)-1 >>7<=8-1 >>7<=7 >>T >>"*"
// j=8;8<=(2*4)-1 >>8<=8-1 >>8<=7 >>F >>Terminate >>str="*******"

// i=5;5<=4 >>F >>Termination
// End of the Loops

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        //   console.log("i=",i)
        for(let k=1;k<=n-i;k++){
            str+=" "
            // console.log("k=",k)
        }
        for(let j=1;j<=(2*i)-1;j++){
            str+="*"
            // console.log("j=",j)
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)