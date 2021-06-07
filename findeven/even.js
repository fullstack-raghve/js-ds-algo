//find even of a number

const number = [2,1,3,6,9,22,14,16]
let evennum = [];
let oddnum = [];
for(let num of number){
   // console.log('num',num)
    if(num%2 === 0){
        evennum.push(num);
        //console.log('even num',num)
        console.log('even num arr',evennum)

    }else{
        oddnum.push(num);
        console.log('odd num arr',oddnum)

    }
}