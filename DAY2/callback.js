 //example
 setTimeout(
    function(){
        console.log("timer");
    },5000);

    function x(y){
        console.log("x");
        y();
    }

    x(function y(){
        console.log("y");
    });

    //example
     function btnClicked(){
        let count = 0;
        document.getElementById("clickMe").addEventListener("click",function x(){
            console.log("button clicked",++count);
        }); 
     }

     btnClicked();
    