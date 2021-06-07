//find missing no-
//i solved this problem - jgm nkb bbb shri ram
//first think basic logic
let arr = [1,2,3,5,6,7,8,10];
let emptyarry = []
function findMiss(arr){
for(let i=0;i<arr.length-1;i++){
    isExist = false;
   
       if(arr[i]+1 === arr[i+1]){
           isExist = true
           //break
      //  console.log(arr[i]+1 === arr[i+1])
       }
       if(!isExist){
        emptyarry.push(arr[i]+1)
       }
    }
}

let miss = findMiss(arr)
console.log(emptyarry)
