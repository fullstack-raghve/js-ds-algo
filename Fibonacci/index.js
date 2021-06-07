//Q2: Return the N-th value of the Fibonacci sequence Recursively
//Recursive solution looks pretty simple (see code).
//https://www.fullstack.cafe/blog/fibonacci-interview-questions
//Let’s look at the diagram that will help you understand what’s going on here with the rest of our code. Function fib is called with argument 5:

//Complexity Analysis O(2^n) Exponential
//note-
//In case of recursion the solution take exponential time, that can be explained by the fact that the size of the tree exponentially grows when n increases. So for every additional element in the Fibonacci sequence we get an increase in function calls. Big O in this case is equal to O(2n). Exponential Time complexity denotes an algorithm whose growth doubles with each addition to the input data set.
// function fibonacci(n){
//     if(n<=1)
//       return n;
//     else
//       return fibonacci(n-1) + fibonacci (n-2);  
//   }
  
function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }
//console.log(fib(5)) ////0 1 1 2 3 //value of 5th index
//console.log(fib(4)) ////0 1 1 2
//console.log(fib(6)) //0 1 1 2 3 5 8



///Q3: Return the N-th value of the Fibonacci sequence. Solve in O(n) time
function fib1(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
  console.log(fib1(6))
  console.log(arr)
//value of 6th index
/// What is the run time complexity? - O(n)
// function fibonacci(n){
//     var fibo = [0, 1];
    
//     if (n <= 2) return 1;
  
//     for (var i = 2; i <=n; i++ ){
//      fibo[i] = fibo[i-1]+fibo[i-2];
//     }
  
//    return fibo[n];
//   } 
  
//    fibonacci(12);
//     = 144 