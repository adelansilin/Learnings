//exampple 1
function outer() {
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

const close = outer();
console.log(close);
close();

//example 2
function outest(){
    let a = 100;
    function outer(){
        let b = 200;
        function inner(){
            console.log(a,b);
        }
        return inner;
    }
    return outer;
}

const close1 = outest();  
const innerFunction = close1();  
innerFunction();