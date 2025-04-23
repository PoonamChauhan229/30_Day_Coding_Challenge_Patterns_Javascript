// Write a Javascript function to print a downward facing right-angled triangle.

// Output:
// 4444
// 333
// 22
// 1

// Javascript function                 >>printPattern()
// downward facing right-angled triangle

// Approach:
// Create an str variable >>Hold the final output
// let str=""
// Nested loops>> Loop inside an Loop
// Outer loop >>Control n no.of rows >>i loop
// Inner Loop >>Control n no.of cols >>j loop

// 1234   >>cols >>j loop
// 4444   >>4 >>i loop   >>Print 4times >>4
// 333    >>3 >>i loop   >>Print 3times >>3
// 22     >>2 >>i loop   >>Print 2times >>2
// 1      >>1 >>i loop   >>Print 1times >>1

// i loop >>start-4 n=4   ||end-1    ||i=n;i>=1;i--
// j loop >>start-1       ||end-i    ||j=1;j<=i;j++

// for(let i=n;i>=1;i--){
    // for(let j=1;j<=i;j++){
        // Concat i value to str var
        // str+=i
    // }
    // str+="\n"
// }

// Print str variable

// Working :
// i=n;i>=1;i--
// i=4;4>=1;i-- >>T
// j=1;1<=4 >>T>>"4" ||j=2;2<=4 >>T>>"4" ||j=3;3<=4 >>T>>"4" ||j=4;4<=4 >>T>>"4" ||j=5;5<=4 >>F >>Terminate >>str+="4444"

// i=3;3>=1;i-- >>T
// j=1;1<=3 >>T>>"3" ||j=2;2<=3 >>T>>"3" ||j=3;3<=3 >>T>>"3" ||j=4;4<=3 >>F>>Terminate >>str+="333"

// i=2;2>=1;i-- >>T
// j=1;1<=2 >>T>>"2" ||j=2;2<=2 >>T>>"2" ||j=3;3<=2 >>F >>Terminate >>str+="22"

// i=1;1>=1;i-- >>T
// j=1;1<=1 >>T>>"1" ||j=2;2<=1 >>F >>Terminate >>str+="1"

// i=0;0>=1;i-- >>F 
// End of the Loop

// Print str variable 

function printPattern(n){
    // console.log(n)
    let str=""
    for(let i=n;i>=1;i--){
        for(let j=1;j<=i;j++){
            // console.log("i-",i,"j-",j)
            str+=i
        }
        str+="\n"
    }
    console.log(str.trim())
}
printPattern(4)

