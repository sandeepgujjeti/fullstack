async function someFunc() {
   const a = 50,b=100;
   if (a > b){
    return"A is bigger than B";
   }else{
    throw new Error("B is greater than  A");
    }
}
const res = someFunc();
 console.log(res);
 
res.then(data => {
    console.log(data);
});
 