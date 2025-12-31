// Hey everyone , Welcome back to Code with Poonam
// If you're new here, make sure to hit the like button and subscribe for more coding tutorials!
// We're on Day 14 of our 30-Day Pattern Challenge! 
// and today’s pattern is all about printing a  downward-facing right-angled triangle aligned to the right and also printing sequential numbers.
// Lets proceed with the challenge and move towards our VS Code.

// In VS Code , the question is mentioned here that we have 

// Write a Javascript function to print the following pattern.
// 4444
// 3333
//  222
//    1

// Javascript function >>printPattern()
// Print Pattern       >>Right angled traingle >>alignment right

// Approach:
// Create str variable >>Final Output
// let str=""
// Nested loops
// Outer Loop >>Control n no. of rows >>i loop
// Inner Loop >>Control n no.of cols  >>j loop

// 1234 >>cols >>j loop
// 4444 >>4 >>i loop  >>Print 4 times "4" >>Print 0 Spaces
//  333 >>3 >>i loop  >>Print 3 times "3" >>Print 1 Space
//   22 >>2 >>i loop  >>Print 2 times "3" >>Print 2 Spaces
//    1 >>1 >>i loop  >>Print 1 time  "1" >>Print 3 Spaces

// i loop >>start-4 n=4 ||end-1     ||i=n;i>=1;i--
// j loop >>start-1     ||end-4 n=4 ||j=1;j<=n;j++ >>Print >>Conditionally Spaces+Numbers
// j<n-i+1 >>True >>" "|| False >>i
// i=4, j=1 >>1<4-4+1 = 1<1>>False >>4
// i=3, j=1 >>1<4-3+1 =1<1+1 =1<2 >>True >>" "

// for(let i=n;i>=1;i--){
    // for(let j=1;j<=n;j++){
        // Conditionally Spaces+Numbers
        // if(j<n-i+1){
            // concat " " >>str
            // str+=" "
        // }else{
            // concat i >>str
            // str+=i
        // }
    // }
    // str+="\n" //next line
// }
// Print str variable

// Working:
// i=n;i>=1;i--
// i=4;4>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-4+1(1)>>F >>4
// j=2;2<=4 >>T -->2<4-4+1(1)>>F >>4
// j=3;3<=4 >>T -->3<4-4+1(1)>>F >>4
// j=4;4<=4 >>T -->4<4-4+1(1)>>F >>4
// j=5;5<=4 >>F >>Terminate >>str+="4444"

// i=3;3>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-3+1(2)>>T >>" "
// j=2;2<=4 >>T -->2<4-3+1(2)>>F >>3
// j=3;3<=4 >>T -->3<4-3+1(2)>>F >>3
// j=4;4<=4 >>T -->4<4-3+1(2)>>F >>3
// j=5;5<=4 >>F >>Terminate >>str+=" 333"

// i=2;2>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-2+1(3)>>T >>" "
// j=2;2<=4 >>T -->2<4-2+1(3)>>T >>" "
// j=3;3<=4 >>T -->3<4-2+1(3)>>F >>2
// j=4;4<=4 >>T -->4<4-2+1(3)>>F >>2
// j=5;5<=4 >>F >>Terminate >>str+="  22"

// i=1;1>=1;i-- >>T ||j<n-i+1
// j=1;1<=4 >>T -->1<4-1+1(4)>>T >>" "
// j=2;2<=4 >>T -->2<4-1+1(4)>>T >>" "
// j=3;3<=4 >>T -->3<4-1+1(4)>>T >>" "
// j=4;4<=4 >>T -->4<4-1+1(4)>>F >>1
// j=5;5<=4 >>F >>Terminate >>str+="   1"

// i=0;0>=1;i-- >>F
// Termination >>End of Loops

// Print str variable

function printPattern(n){
    let str = "";
    for(let i = n; i >= 1; i--){
        for(let j = 1; j <= n; j++){
            if(j < n - i + 1){
                str += " ";
            }else{
                str += i;
            }
        }
        str += "\n";
    }
    console.log(str.trimEnd());
}

printPattern(4);

// "Try experimenting with different values of n and let me know your results in the comments!"

// "If you found this video helpful, don't forget to like, share, and subscribe for more programming tutorials. See you in the next one!"

// 👋 Keep Coding ,Keep Learning and Keep Growing 
// Thank You
