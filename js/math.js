const n=7;

function printFibanocci(n){
    let a =0 , b=1 ;
    let c = a+b;
    console.log(a);
    console.log(b);
    while(n-->2){
        console.log(c);
        a=b;
        b=c;
        c=a+b;

    }
}
printFibanocci(n)

function printNumbers(num) {

    if (num < 1) {
        console.error('num must be greater than 1');
        return;
    }

    if (!Number.isInteger(num)) {
        num = Math.trunc(num);
    }

    for (var i = 1; i <= num; i++) {
        console.info(i);
    }
}

printNumbers(10);
