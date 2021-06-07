//time complexity == 0(n)

//[2,7,11,15],  t=9
//t-num
//we are saving complimnt nd index of that
// {
// 7:0
// }
 function twoSum(nums,target){
    let comp =new Map();
    const len = nums.length;

    for(let i = 0;i<len;i++){
 
        if(comp[nums[i]]>=0){ //ching in comp if no.exist,and this is the way to chck for no.
   
            return [comp[nums[i]],i]
       
}
        comp[target-nums[i]] = i;//saving index as value
       
    }
  return [];
    //console.log(comp); //first step to understand chk only this
}
const numss = [2,7,11,15];
//twoSum(numss,9)
console.log(twoSum(numss,9))
