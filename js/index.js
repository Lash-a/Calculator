function init(){
    getOperands();
    getNumbers();
}
init();


function getOperands(){
    let operator = document.getElementsByClassName("operator");
    for(let i = 0; i < operator.length; i++){
        operator[i].addEventListener("click", function(){   

            if(this.id === "empty"){
                emptyOutput(operator[i].id);
            }else if(this.id === "backspace"){
                backSpace(operator[i].id);
            }
            else{
                mathOperations(operator[i].id); 
            }

                
        });
    }
};

function getNumbers(){
    let numbers = document.getElementsByClassName("number");
    for(let i=0; i<numbers.length; i++){
        numbers[i].addEventListener("click", function (){      
            printNumbers(numbers[i].id);
        });
    }   
};


function mathOperations(e){
    
    let output = getOutput();
    let history = getHistory();

    if(output != '' || history != ''){
        history = history + output;
        if(e === "="){
        let result = eval(history);
            printOutput(result);
            printHistory("");
        }else if(e === "."){
            output+= ".";
            printOutput(output);
        }
        else{
            history = history + e;
            printHistory(history)
            printOutput("");
        }
    }
}

function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(number){
    document.getElementById("history-value").innerText = number;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(number){
    document.getElementById("output-value").innerText = number;
}

function emptyOutput(e){
    if(e === "empty"){
        printHistory("");
        printOutput("");
    } 
}

function backSpace(e){
    if(e === "backspace"){
        let output = getOutput();
        output=output.substr(0, output.length - 1);
        printOutput(output);
    }
};

function printNumbers(e){
    let check = getOutput();
    if(check !== NaN){
        check+=e;
        printOutput(check);
    }
}
