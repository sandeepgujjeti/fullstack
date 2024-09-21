// synchronus java script//
console.log("hello");
console.log("hello everyone");
console.log("this is synchronus program from java script");


// asynchronus javascript //
setTimeout(function(){
    console.log(`this an java script`);
    console.log(`this is excecuted second`);

} ,2000);
console.log(`this is message is executed first`);

async function displayInfo(){

    let x=10+20;
    return x;
}
let result=displayInfo();
result.then(()=> {
console.log("result is="+result)
});