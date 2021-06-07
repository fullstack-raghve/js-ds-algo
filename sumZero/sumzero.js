//find no. in an array , whom total is zero.
let array = [-2,-4,-3,2,3,4,5];
let pairArry = []
let map = {} // let some more
function getPairZero(array){
for(let i =0;i<array.length;i++){
    for(let j =1;j<array.length;j++){
     if(array[i]+array[j] === 0){
    // return [array[i],array[j]] //it return first match
    //pairArry.push(array[i],array[j]); //it will push all combination-repeat
     if(map[array[i]] && map[array[j]]){
         continue
     }else{
        pairArry.push(array[i],array[j]); //here no dulplication
        map[array[i]]  = true;
        map[array[j]] = true;
     }
     }
    }
}
}
///this solution has time complexity of quardatic 0*n2

let result = getPairZero(array);
console.log(result);
console.log(pairArry);
//console.log(map);