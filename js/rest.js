// rest functon//
 function sum(...args){
    let res = 0;
    for (const arg of args){
        res += arg

    }
    return res;
 }
   
console.log(sum(2,3,20));

