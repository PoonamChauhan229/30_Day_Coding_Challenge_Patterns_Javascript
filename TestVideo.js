// Hey everyone , Welcome back to Code with Poonam
// If you're new here, make sure to hit the like button and subscribe for more coding tutorials!
// We're on Day 15 of our 30-Day Pattern Challenge! 
// and today’s pattern is all about printing a  downward-facing right-angled triangle aligned to the right
// and also printing sequential numbers.
// Lets proceed with the challenge and move towards our VS Code.

// In VS Code , the question is mentioned here that we have 

// Write a Javascript function to print the following pattern.
// 1234
//  234
//   34
//    4

// Javascript function >>printPattern()
// Print Pattern       >>Right angled traingle >>alignment right

// Approach:
// Create str variable >>Final Output
// let str=""
// Nested loops
// Outer Loop >>Control n no. of rows >>i loop
// Inner Loop >>Control n no.of cols  >>j loop

// 1234 >>cols >>j loop
// 1234 >>i=1 >>Print 1 to 4 >>Print 0 Spaces
//  234 >>i=2 >>Print 2 to 4 >>Print 1 Space
//   34 >>i=3 >>Print 3 to 4 >>Print 2 Spaces
//    4 >>i=4 >>Print 4 to 4 >>Print 3 Spaces

// i loop >>start-1     ||end-4 n=4 ||i=1;i<=n;i++
// j loop >>start-1     ||end-4 n=4 ||j=1;j<=n;j++ >>Print >>Conditionally Spaces+Numbers
// j<i >>True >>" " || Else >>Print j

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         Conditionally Spaces+Numbers
//         if(j<i){
//             str+=" "
//         }else{
//             str+=j
//         }
//     }
//     str+="\n"
// }
// Print str variable

function printPattern(n){
    let str = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if(j < i){
                str += " ";
            }else{
                str += j;
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
