// Hey everyone , Welcome back to Code with Poonam
// If you're new here, make sure to hit that like button and subscribe for more coding tutorials!"

// In In today's video, we're going to learn how to print a solid square pattern using JavaScript.
// Lets proceed with the challenge and move towards our VS Code.

// In VS Code , the question is mentioned here that we have 
// Write a JavaScript function to print a solid square of size n × n.
// ****
// ****
// ****
// ****

//  JavaScript function >> printPattern()
//  print a solid square of size n × n >> 4*4 >> n=4

// Approach:
// Create a variable str with empty string  >> This will hold the pattern
// let str=""
// Nested Loops >> Loop inside an loop >>Outer Loop and Inner Loop
// Outer Loop  >> Control the number of rows  >> i loop
// Inner Loop >> Control the number of columns >> j loop
// 1234 >> cols >> j loop
// **** 1 >> i loop
// **** 2 >> i loop
// **** 3 >> i loop
// **** 4 >> i loop

// i loop >> start >>1 >> end >> n =4
// j loop >> start >>1 >> end >> n =4

// for (let i = 1; i <=n; i++) {
//     for(let j = 1; j <=n; j++) {
        // Add * to str
        // str += "*"
//     }
    // Add \n to str >> so that it will print in next line
    //str += "\n"
// }
// Print str

// Working
// i=1  i<=4 >> T 
// j=1 >>T * || j=2 >> * || j=3 >> * || j=4 >> * >> str = "*****" || j=5 >> F>> Terminate

// i=2  i<=4 >> T 
// j=1 >>T * || j=2 >> * || j=3 >> * || j=4 >> * >> str = "*****" || j=5 >> F>> Terminate

// i=3  i<=4 >> T
// j=1 >>T * || j=2 >> * || j=3 >> * || j=4 >> * >> str = "*****" || j=5 >> F>> Terminate

// i=4  i<=4 >> T
// j=1 >>T * || j=2 >> * || j=3 >> * || j=4 >> * >> str = "*****" || j=5 >> F>> Terminate

// i=5  i<=4 >> F >> Terminate 
// End of both the loop

function printPattern(n) {
    let str=""
    for (let i = 1; i <=n; i++) {      
            for(let j = 1; j <=n; j++) {    
                str += "*"
            }
            str += "\n"
        }    
        console.log(str)
}

printPattern(4);

// "This is a simple example of how loops work in JavaScript. Try experimenting with different values of n and let me know your results in the comments!"

// 👍 "If you found this video helpful, don't forget to like, share, and subscribe for more programming tutorials. See you in the next one!"

// 👋 Keep Coding ,Keep Learning and Keep Growing 
// Thank You
