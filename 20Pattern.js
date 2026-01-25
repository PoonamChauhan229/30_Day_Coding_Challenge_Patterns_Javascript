// Write a Javascript function to print the following pattern.
// *******
//  *****
//   ***
//    *

// Javascript function >>printPattern()
// Print Pattern >>Inverted Star Pyramid Pattern
// Stars and spaces

// Approach:
// Create str variable >> Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer Loop   >> Manage n no. of rows >>i loop
// Inner Loop-1 >> Manage spaces        >>k loop >>Print spaces
// Inner Loop-2 >> Manage n no. of cols >>j loop >>Print star

// 1234567 >> cols >> j loop
// ******* >>1 >>i loop  >>Print 7 stars & Print 0 spaces
//  *****  >>2 >>i loop  >>Print 5 stars & Print 1 spaces
//   ***   >>3 >>i loop  >>Print 3 stars & Print 2 spaces
//    *    >>4 >>i loop  >>Print 1 stars & Print 3 spaces

// i loop >>start-1 ||end-n  >>i=1;i<=n;i++
// k loop >>start-1 ||end-i-1 >>i=1>0,i=2>1,i=3>2,i=4>3 >>k=1;k<=i-1;k++
// j loop >>start-1 ||end-2*(n-i)+1 >>i=1>>7,i=2>>5,i=3>>3,i=4>>1
// >>j=1;j<=2*(n-i)+1;j++

// for(let i=1;i<=n;i++){
    // for(k=1;k<=i-1;k++){
        //Print spaces
        // Concat str variable>>" " 
    // }
    // for(j=1;j<=2*(n-i)+1;j++){
        // Print star
        // Concat str variable >>"*"
    // }
    // Concat str >>"\n"
// }
// Print str variable

// Working:
// i=1;i<=n;i++
// i=1;1<=4 >>True
// k=1;k<=i-1;k++
// k=1;1<=1-1>>1<=0 >>F >>Terminate >>0 spaces
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(3)+1 >>1<=7 >>T >>"*"
// j=2;2<=2*(3)+1 >>2<=7 >>T >>"*"
// j=3;3<=2*(3)+1 >>3<=7 >>T >>"*"
// j=4;4<=2*(3)+1 >>4<=7 >>T >>"*"
// j=5;5<=2*(3)+1 >>5<=7 >>T >>"*"
// j=6;6<=2*(3)+1 >>6<=7 >>T >>"*"
// j=7;7<=2*(3)+1 >>7<=7 >>T >>"*"
// j=8;8<=2*(3)+1 >>8<=7 >>F >>Terminate >>str="*******"

// i=2;2<=4 >>True
// k=1;k<=i-1;k++
// k=1;1<=2-1 >>1<=1 >>T >>" "
// k=2;2<=2-1 >>2<=1 >>F >>Terminate >>str=" "
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(2)+1 >>1<=5 >>T >>"*"
// j=2;2<=2*(2)+1 >>2<=5 >>T >>"*"
// j=3;3<=2*(2)+1 >>3<=5 >>T >>"*"
// j=4;4<=2*(2)+1 >>4<=5 >>T >>"*"
// j=5;5<=2*(2)+1 >>5<=5 >>T >>"*"
// j=6;6<=2*(2)+1 >>6<=5 >>F >>Terminate >>str="*****"

// i=3;3<=4 >>True
// k=1;k<=i-1;k++
// k=1;1<=3-1 >>1<=2 >>T >>" "
// k=2;2<=3-1 >>2<=2 >>T >>" "
// k=3;3<=3-1 >>3<=2 >>F >>Terminate >>str="  "
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(1)+1 >>1<=3 >>T >>"*"
// j=2;2<=2*(1)+1 >>2<=3 >>T >>"*"
// j=3;3<=2*(1)+1 >>3<=3 >>T >>"*"
// j=4;4<=2*(1)+1 >>4<=3 >>F >>Terminate >>str="***"

// i=4;4<=4 >>True
// k=1;k<=i-1;k++
// k=1;1<=4-1 >>1<=3 >>T >>" "
// k=2;2<=4-1 >>2<=3 >>T >>" "
// k=3;3<=4-1 >>3<=3 >>T >>" "
// k=4;4<=4-1 >>4<=3 >>F >>Terminate >>str="   "
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(0)+1 >>1<=1 >>T >>"*"
// j=2;2<=2*(0)+1 >>2<=1 >>F >>Terminate >>str="*"

// i=5;5<=4 >>False
// Terminate >>End of loops
// Print str variable

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        // console.log("i-",i)
        for(let k=1;k<=i-1;k++){
            // Print , concat str >>" "
            //  console.log("k-",k)
            str+=" "
        }
        for(j=1;j<=2*(n-i)+1;j++){
            // Print, concat str >>"*"
            //  console.log("j-",j)
            str+="*"
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)