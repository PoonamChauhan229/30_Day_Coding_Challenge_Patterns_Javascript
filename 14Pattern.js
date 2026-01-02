// Write a Javascript function to print the following pattern.
// 4444
//  333
//   22
//    1

// Javascript function >>printPattern()
// printPattern>> RightAngledTraingle >>Downward

// Approach:
// Create str vraiable >>Final Output
// let str=""
// Nested Loop
// Outer Loop >>Control n no.of rows >> i loop
// Inner Loop >>Control n no.of cols >> j loop

// 1234 >>cols >>j loop
// 4444 >>4 >>i loop >>Print 4 times "4" & Print 0 Spaces
//  333 >>3 >>i loop >>Print 3 times "3" & Print 1 Spaces
//   22 >>2 >>i loop >>Print 2 times "2" & Print 2 Spaces
//    1 >>1 >>i loop >>Print 1 times "1" & Print 3 Spaces

// i loop >>start-4 n=4 ||end-1 ||i=n;i>=1;i--
// j loop >>start-1 n=1 ||end-4 ||j=1;j<=n;j++ >>Print Val/Nos +Spaces
// Conditionally
// j<n-i+1 >>True >>" " || False >>i value
// i=4;j=1; ||1<4-4+1 >>1<1 >>False >>4   ,....
// i=3;j=1; ||1<4-3+1 >>1<2 >>True  >>" " ,....

// for(let i=n;i>=1;i--){
    // for(let j=1;j<=n;j++){
        // Conditionally >>Print Val/Nos +Spaces
            // if(j<n-i+1){
                // Concat "" >>str
                // str+=" "
            // }else{
                // Concat i >>str
                // str+=i
                // }
    // }
    // str+="\n" //next line
// }
// Print str variable

// Working:
// i=n;i>=1;i--
// i=4;4>=1;i-- >>T 
// j=1;j<=n;j++    ||j<n-i+1
// j=1;1<=4;j++>>T ||1<4-4+1 >>1<1>>False >>4
// j=2;2<=4;j++>>T ||2<4-4+1 >>2<1>>False >>4
// j=3;3<=4;j++>>T ||3<4-4+1 >>3<1>>False >>4
// j=4;4<=4;j++>>T ||4<4-4+1 >>4<1>>False >>4
// j=5;5<=4;j++>>F >>Terminate >>str+="4444" 

// i=3;3>=1;i-- >>T 
// j=1;j<=n;j++    ||j<n-i+1
// j=1;1<=4;j++>>T ||1<4-3+1 >>1<2 >>T >>" "
// j=2;2<=4;j++>>T ||2<4-3+1 >>2<2 >>F >>3
// j=3;3<=4;j++>>T ||3<4-3+1 >>3<2 >>F >>3
// j=4;4<=4;j++>>T ||4<4-3+1 >>4<2 >>F >>3
// j=5;5<=4;j++>>F >>Terminate >>str+=" 333"

// i=2;2>=1;i-- >>T 
// j=1;j<=n;j++    ||j<n-i+1
// j=1;1<=4;j++>>T ||1<4-2+1 >>1<3 >>T >>" "
// j=2;2<=4;j++>>T ||2<4-2+1 >>2<3 >>T >>" "
// j=3;3<=4;j++>>T ||3<4-2+1 >>3<3 >>F >>2
// j=4;4<=4;j++>>T ||4<4-2+1 >>4<3 >>F >>2
// j=5;5<=4;j++>>F >>Terminate >>str+="  22"

// i=1;1>=1;i-- >>T 
// j=1;j<=n;j++    ||j<n-i+1
// j=1;1<=4;j++>>T ||1<4-1+1 >>1<4 >>T >>" "
// j=2;2<=4;j++>>T ||2<4-1+1 >>2<4 >>T >>" "
// j=3;3<=4;j++>>T ||3<4-1+1 >>3<4 >>T >>" "
// j=4;4<=4;j++>>T ||4<4-1+1 >>4<4 >>F >>i

// i=0;0>=1;i-- >>F  >>Terminate >>End of Loops
// Print str variable.

function printPattern(n){
    let str=""
    for(let i=n;i>=1;i--){
        for(let j=1;j<=n;j++){
            // console.log("i-",i,"j-",j)
            if(j<n-i+1){
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

