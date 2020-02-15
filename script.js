console.log("Script working.");

function runClick(){
            console.log("Click function is working."); 
            var a=new Date(document.getElementById("Date1").value);
            var b=new Date(document.getElementById("Date2").value);
            var c=Date.parse(a);
            var d=Date.parse(b);
            var diff=Math.abs(c-d);
            diff=diff/1000;
            console.log(diff);
            document.getElementById("output").innerHTML=(diff+" seconds");
                document.getElementById("output2").innerHTML=(diff*66000*0.2);
        }
