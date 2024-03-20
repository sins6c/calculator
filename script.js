function cal(){
    ques=document.getElementById("input").value;
    sep=ques.split("");
    console.log(sep);
    const n1=parseFloat(sep[0]);
    const op=sep[1];
    const n2=parseFloat(sep[2]);
    switch(op){
        case "+":
            output=n1+n2;
            console.log(output);
            break;
            case "-":
            output=n1-n2;
            console.log(output);
            break;
            case "*":
            output=n1*n2;
            console.log(output);
            break;
            case "/":
            output=n1/n2;
            console.log(output);
            break;
    }
    const result=document.getElementById("output").innerHTML=output;
    

    }