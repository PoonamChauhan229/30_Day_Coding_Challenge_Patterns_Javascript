// Write a Javascript function to print the following pattern.
// 1234
//  234
//   34
//    4

// Javascript function >>printPattern()
// Alignment right >> right angled >>downward pattern

// Approach:
// Create str variable >>Final output
// let str=""
// Nested Loop 
// Outer Loop >>Control n no.of rows >> i loop
// Inner Loop >>Control n no.of cols >> j loop

// 1234 >>cols >> j loop
// 1234 >>1 >>row >>i loop >>Print 1-4 & 0 Spaces >>j value
//  234 >>2 >>row >>i loop >>Print 2-4 & 1 Spaces >>j value
//   34 >>3 >>row >>i loop >>Print 3-4 & 2 Spaces >>j value
//    4 >>4 >>row >>i loop >>Print 4   & 3 Spaces >>j value

// i loop >>start -1 ||end-4 n=4 ||i=1;i<=n;i++
// j loop >>start -1 ||end-4 n=4 ||j=1;j<=n;j++ >>Print Val & Spaces >>Conditionally 
// j<i >>True >>" " || False >>Val - j value

// for(let i=1;i<=n;i++){
    // for(let j=1;j<=n;j++){
        // Conditionally >>Print Val & Spaces 
        // if(j<i){
            //Print Spaces
            // Concat >> str >>" " 
        // }else{
            // Print j value
            // Concat >> str >>j
            // }
    // }
    // Concat str >> "\n"
// }
// Print str variable

// Working
// i=1;i<=n;i++ ||n=4 
// j=1;j<=n;j++ ||j<i
// j=1;1<=4 >> T >>j<i >>1<1>>F >>1
// j=2;2<=4 >> T >>j<i >>2<1>>F >>2
// j=3;3<=4 >> T >>j<i >>3<1>>F >>3
// j=4;4<=4 >> T >>j<i >>4<1>>F >>4
// j=5;5<=4 >> F >>Terminate >>str="1234"

// i=2;i<=n;i++ ||n=4 >>2<=4 >>T
// j=1;j<=n;j++ ||j<i
// j=1;1<=4 >> T >>j<i >>1<2 >>T >>" "
// j=2;2<=4 >> T >>j<i >>2<2 >>F >>2
// j=3;3<=4 >> T >>j<i >>3<2 >>F >>3
// j=4;4<=4 >> T >>j<i >>4<4 >>F >>4
// j=5;5<=4 >> F >>Terminate >>str=" 234"

// i=3;i<=n;i++ ||n=4 >>3<=4 >>T
// j=1;j<=n;j++ ||j<i
// j=1;1<=4 >> T >>j<i >>1<3 >>T >>" "
// j=2;2<=4 >> T >>j<i >>2<3 >>T >>" "
// j=3;3<=4 >> T >>j<i >>3<3 >>F >>3
// j=4;4<=4 >> T >>j<i >>4<3 >>F >>4
// j=5;5<=4 >> F >>Terminate >>str="  34"

// i=4;i<=n;i++ ||n=4 >>4<=4 >>T
// j=1;j<=n;j++ ||j<i
// j=1;1<=4 >> T >>j<i >>1<4 >>T >>" "
// j=2;2<=4 >> T >>j<i >>2<4 >>T >>" "
// j=3;3<=4 >> T >>j<i >>3<4 >>T >>" "
// j=4;4<=4 >> T >>j<i >>4<4 >>F >>4
// j=5;5<=4 >> F >>Terminate >>str="   4"

// i=5;i<=n;i++ ||n=4 >>5<=4 >>F
// Terminate >>End of Loops


function printPattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            // console.log("i=",i,"j=",j)
            if(j<i){
                str+=" "
            }else{
                str+=j
            }
        }
        str+="\n"
    }
    console.log(str.trimEnd())
}
printPattern(4)