// Hey everyone , Welcome back to Code with Poonam
// If you're new here, make sure to hit the like button and subscribe for more coding tutorials!
// We're on Day 16 of our 30-Day Pattern Challenge! 
// and today’s pattern is all about printing a  downward-facing right-angled triangle aligned to the right
// and also printing sequential numbers.
// Lets proceed with the challenge and move towards our VS Code.

// In VS Code , the question is mentioned here that we have 

// Write a Javascript function to print the following pattern.
// 1234
//  123
//   12
//    1

// Javascript function >>printPattern()
// Print Pattern       >>Right angled traingle >>alignment right

// Approach:
// Create str variable >>Final Output
// let str=""
// Nested loops
// Outer Loop >>Control n no. of rows >>i loop
// Inner Loop-1 >>Print Spaces >>k loop
// Inner Loop-2 >>Print Numbers >>j loop

// 1234 >>i=4 >>Print 0 Spaces >>Print 1 to 4
//  123 >>i=3 >>Print 1 Space  >>Print 1 to 3
//   12 >>i=2 >>Print 2 Spaces >>Print 1 to 2
//    1 >>i=1 >>Print 3 Spaces >>Print 1 time


    // for(let i = n; i >= 1; i--){      
    //     for(let k = 1; k <= n - i; k++){
             //Print Spaces
            // Concat >> str >>" "  
    //     }
    //     for(let j = 1; j <= i; j++){  
            // Print j value
            // Concat >> str >>j
    //     }
        // Concat str >> "\n"
// }
// Print str variable


// Working:

// i=n;i>=1;i--
// k=1;k<=n-i;k++
// j=1;j<=i;j++

// i=4;4>=1;i--
// k=1;k<=4-4;k++
// k=1;1<=0>>False >>No space printed
// j=1;j<=4;j++
// j=1;1<=4>>True >>1
// j=2;2<=4>>True >>2
// j=3;3<=4>>True >>3
// j=4;4<=4>>True >>4
// j=5;5<=4>>False >>Terminate >>str+="1234"

// i=3;3>=1;i--
// k=1;k<=4-3;k++
// k=1;1<=1>>True >>" "
// k=2;2<=1>>False >>Terminate space loop
// j=1;j<=3;j++
// j=1;1<=3>>True >>1
// j=2;2<=3>>True >>2
// j=3;3<=3>>True >>3
// j=4;4<=3>>False >>Terminate >>str+=" 123"

// i=2;2>=1;i--
// k=1;k<=4-2;k++
// k=1;1<=2>>True >>" "
// k=2;2<=2>>True >>" "
// k=3;3<=2>>False >>Terminate space loop
// j=1;j<=2;j++
// j=1;1<=2>>True >>1
// j=2;2<=2>>True >>2
// j=3;3<=2>>False >>Terminate >>str+="  12"

// i=1;1>=1;i--
// k=1;k<=4-1;k++
// k=1;1<=3>>True >>" "
// k=2;2<=3>>True >>" "
// k=3;3<=3>>True >>" "
// k=4;4<=3>>False >>Terminate space loop
// j=1;j<=1;j++
// j=1;1<=1>>True >>1
// j=2;2<=1>>False >>Terminate >>str+="   1"

// i=0;0>=1>>False
// Termination >>End of loops

function printPattern(n){
    let str = "";
    for(let i = n; i >= 1; i--){      // outer loop (rows)
        for(let k = 1; k <= n - i; k++){ // space loop
            str += " ";
        }
        for(let j = 1; j <= i; j++){  // number loop
            str += j;
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
