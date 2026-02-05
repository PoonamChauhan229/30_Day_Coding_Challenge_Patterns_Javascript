// Write a Javascript function to print the following pattern.
// 1111111
//  22222
//   333
//    4

// Javascript function >>printPattern()
// Print Pattern >>Inverted Number Pyramid Pattern
// Number and Spaces

// Approach:
// Create an str variable >>Final Output
// let str=""
// Nested Loops
// 3 loops
// Outer Loop   >>Manage n no. of rows >>i loop
// Inner Loop-1 >>Manage spaces        >>k loop  >>Print spaces
// Inner Loop-2 >>Manage n no. of cols >>j loop  >>Print Numbers

// 1234567 >>cols >>j loop
// 1111111 >>1 >>i loop  >>Print 1 -7 times & Print 0 spaces >>Print i val
//  22222  >>2 >>i loop  >>Print 2 -5 times & Print 1 spaces >>Print i val
//   333   >>3 >>i loop  >>Print 3 -3 times & Print 2 spaces >>Print i val
//    4    >>4 >>i loop  >>Print 4 -1 times & Print 3 spaces >>Print i val


// i loop >>start-1 ||end-4(n=4) >>i=1;i<=n;i++
// k loop >>start-1 ||end-i-1 ||i=1,0|i=2,1|i=3,2|i=4,3 >>k=1;k<=i-1;k++
// j loop >>start-1 ||end-2*(n-i)+1 ||i=1,7|i=2,5|i=3,3|i=4,1 >>j=1;j<=2*(n-i)+1;j++

// for(i=1;i<=n;i++){
    // for(k=1;k<=i-1;k++){
        // Print spces
        // Concat spaces >>str
    // }
    // for(j=1;j<=2*(n-i)+1;j++){
        // Print i values
        // Concat >> i values >>str
    // }
    // Concat "\n" >>str variable
// }
// str >>Print


// Working
// i=1;i<=n;i++ ||n=4
// i=1;1<=4 >>T
// k=1;k<=i-1;k++
// k=1;1<=1-1 >>1<=0 >>F >>Terminate >>Print 0 spaces
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(4-1)+1 >>1<=7 >>T >>"1" 
// j=2;2<=2*(4-1)+1 >>2<=7 >>T >>"1" 
// j=3;3<=2*(4-1)+1 >>3<=7 >>T >>"1" 
// j=4;4<=2*(4-1)+1 >>4<=7 >>T >>"1" 
// j=5;5<=2*(4-1)+1 >>5<=7 >>T >>"1" 
// j=6;6<=2*(4-1)+1 >>6<=7 >>T >>"1" 
// j=7;7<=2*(4-1)+1 >>7<=7 >>T >>"1"
// j=8;8<=2*(4-1)+1 >>8<=7 >>F >>Terminate >>str+="1111111"

// i=2;2<=4 >>T
// k=1;k<=i-1;k++
// k=1;1<=2-1 >>1<=1 >>T >>" "
// k=2;2<=2-1 >>2<=1 >>F >>Terminate >>str+=" "
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(4-2)+1 >>1<=5 >>T >>"2"
// j=2;2<=2*(4-2)+1 >>2<=5 >>T >>"2" 
// j=3;3<=2*(4-2)+1 >>3<=5 >>T >>"2" 
// j=4;4<=2*(4-2)+1 >>4<=5 >>T >>"2" 
// j=5;5<=2*(4-2)+1 >>5<=5 >>T >>"2"
// j=6;6<=2*(4-2)+1 >>6<=5 >>F >>Terminate >>str+="22222"

// i=3;3<=4 >>T
// k=1;k<=i-1;k++
// k=1;1<=3-1 >>1<=2 >>T >>" "
// k=2;2<=3-1 >>2<=2 >>T >>" "
// k=3;3<=3-1 >>3<=2 >>F >>Terminate >>str+="  "
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(4-3)+1 >>1<=3 >>T >>"3"
// j=2;2<=2*(4-3)+1 >>2<=3 >>T >>"3"
// j=3;3<=2*(4-3)+1 >>3<=3 >>T >>"3"
// j=4;4<=2*(4-3)+1 >>4<=3 >>F >>Terminate >>str+="333"

// i=4;4<=4 >>T
// k=1;k<=i-1;k++
// k=1;1<=4-1 >>1<=3 >>T >>" "
// k=2;2<=4-1 >>2<=3 >>T >>" "
// k=3;3<=4-1 >>3<=3 >>T >>" "
// k=4;4<=4-1 >>4<=3 >>F >>Terminate >>str+="   "
// j=1;j<=2*(n-i)+1;j++
// j=1;1<=2*(4-4)+1 >>1<=1 >>T >>"4"
// j=2;2<=2*(4-4)+1 >>2<=1 >>F >>Terminate >>str+="4"

// i=5;5<=4 >>F
// Terminate >>End of Loops
// Print str variable

function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        // console.log("i-",i)
        for(let k=1;k<=i-1;k++){
            // Print||Concat ""
            // console.log("k-",k)
            str+=" "
        }
        for(let j=1;j<=2*(n-i)+1;j++){
            // Print||Concat >>i values
            // console.log("j-",j)
            str+=i
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)


