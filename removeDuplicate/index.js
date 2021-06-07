//remove duplicate from an array
//brute force solution with o(n*2) time complexity
let array = [2,4,5,12,20,4,5,10,15,20]
let result = [];

function removeDup(){
    for(let i=0;i<array.length;i++){
        let exist = false;
        for(let j=0;j<result.length;j++){
        if(array[i] === result[j]){
            exist = true
            break
        }
        }
        if(!exist){
            result.push(array[i]);
        }
    }

}
const results = removeDup(array)
console.log(results)
console.log(result)