//https://leetcode.com/problems/two-sum
//1. Two Sum

//1.Given an array of integers nums and an integer target,
 //return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
//ex-
//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//it has a time complexity of o(n*2)
function ad(arr,target){
    if(arr.length<=1) return null
    for(i=0;i<arr.length;i++){
     for(j=1;i<arr.length;j++){
      if(arr[i]+arr[j]===target){
         console.log(arr[i],arr[j]); // those values
         console.log(i,j);//that index
       }
    
     }
    }
    return null;
    }
    
    ad([2,4,7,8],9);


    //https://leetcode.com/discuss/interview-question/742791/front-end-interview-questions