//using has map 
//linear solution

let array = [1,3,3,3,1,5,6,7,8,1]

function removeDup(array){
const map = {}
const result = []
for(let i = 0;i<array.length;i++){
    if(!map[array[i]]){
        result.push(array[i])
        map[array[i]] = true;
    }
 
}
return result;
}
 let op = removeDup(array);
console.log(op)