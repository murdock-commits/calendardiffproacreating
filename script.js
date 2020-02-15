console.log("Script working.");

function runClick(){
            console.log("Click function is working."); 
            var a=new Date(document.getElementById("Date1").value);
            var b=new Date(document.getElementById("Date2").value);
            console.log(a);
            console.log(b);
            var diff=a-b;
            diff=diff/1000;
            console.log(diff);
            document.getElementById("output").innerHTML=(diff+" seconds");           
}
