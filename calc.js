//SCRIPT DA CALCULADORA//

function displayValue1($value){
    var key = document.getElementById("powerButtom").innerHTML;
    if(key == "Turn Off"){
        document.getElementById("n1").innerHTML += $value;
    }
    else{
        console.log("A Calculadora está Desligada");
    }
}

function displayOperator($operator){
    var key2 = document.getElementById("powerButtom").innerHTML;
    if(key2 == "Turn Off"){
        document.getElementById("op").innerHTML += " " + $operator + " ";
        document.getElementById("um").onclick = function () { displayValue2('1');};
        document.getElementById("dois").onclick = function () { displayValue2('2');};
        document.getElementById("tres").onclick = function () { displayValue2('3');};
        document.getElementById("quatro").onclick = function () { displayValue2('4');};
        document.getElementById("cinco").onclick = function () { displayValue2('5');};
        document.getElementById("seis").onclick = function () { displayValue2('6');};
        document.getElementById("sete").onclick = function () { displayValue2('7');};
        document.getElementById("oito").onclick = function () { displayValue2('8');};
        document.getElementById("nove").onclick = function () { displayValue2('9');};
        document.getElementById("zero").onclick = function () { displayValue2('0');};
    }     
    else{
    console.log("A Calculadora está Desligada");
    }        
}

function displayValue2($value2){
    var key3 = document.getElementById("powerButtom").innerHTML;
    if(key3 == "Turn Off"){
        document.getElementById("n2").innerHTML += $value2;
    }
    else{console.log("A Calculadora está Desligada");
    }        
}

function operate(){
    var key = document.getElementById("powerButtom").innerHTML;
    if(key == "Turn Off"){
        var valueX = document.getElementById("n1").innerHTML;
        var operation = document.getElementById("op").innerHTML;
        var valueY = document.getElementById("n2").innerHTML;
        var valueA = parseInt(valueX);
        var valueB = parseInt(valueY);
        if(operation == " + "){
            var soma = valueA + valueB;
            returnAnswer(soma);
        } else if(operation == " / "){
            var dividir = Math.round((valueA / valueB)*100)/100;
            returnAnswer(dividir);
        } else if(operation == " x "){
            var multiplicar = valueA * valueB;
            returnAnswer(multiplicar);
        } else if(operation == " - "){
            var subtrair = valueA - valueB;
            returnAnswer(subtrair);
        } else if(operation == " √ "){
            if(valueX === ""){
            var raiz = Math.round(Math.sqrt(valueB)*100)/100;
            returnAnswer(raiz);
            } else{
            var raiz2 = valueA * Math.round(Math.sqrt(valueB)*100)/100;
            returnAnswer(raiz2);
                }
            } 
            else if(operation == " ² "){
            if(valueY === ""){
                var potencia = valueA * valueA;
                returnAnswer(potencia);}
            else{
                var potencia2 = valueB * (valueA*valueA);
                returnAnswer(potencia2);
            }   
            }
    }
      else {
         console.log("A Calculadora está Desligada");
     }
}

function returnAnswer($operator){
    key = document.getElementById("powerButtom").innerHTML;
    if(key == "Turn Off"){
        document.getElementById("res").innerHTML += " " + "=" + " " + " " + $operator;
    }
    else{console.log("A Calculadora está Desligada");
    }
}

function verificaStatus($chave){
    if($chave == 'ligado'){
        console.log('está ligado');
        ligaDesliga('ligado');
        document.getElementById("circle").style.background = "red";
    } 
    else if($chave == 'desligado'){
        console.log('está desligado');
        ligaDesliga('desligado');
        document.getElementById("circle").style.background = "white";
    }
}

function ligaDesliga($answerFromCheck){
    if($answerFromCheck == 'ligado'){
    document.getElementById('powerButtom').onclick = function (){verificaStatus('desligado');};
    document.getElementById('powerButtom').innerHTML = "Turn Off";
    document.getElementById("view-color").innerHTML = "Night Mode";
    document.getElementById("view-color").onclick = function () { nightModeAndDayMode('night');};
    var estado = "ligado";
    } 
    else if($answerFromCheck == 'desligado'){
        document.getElementById('powerButtom').onclick = function (){verificaStatus('ligado');};
        document.getElementById('powerButtom').innerHTML = "Turn On";
        document.getElementById("view-color").innerHTML = "Turn On to Use";
        var state = "desligado";
        limpar();
    }
}

function nightModeAndDayMode($dayOrNight){
    if($dayOrNight == "night"){
        console.log('Modo Noturno Ativado');
        document.getElementById("view-color").innerHTML = "Day Mode";
        document.getElementById("view-color").onclick = function () { nightModeAndDayMode('day');};
        document.body.style.backgroundColor = "black";
        document.getElementById("calculator-body").style.borderColor = "white";
        document.getElementById("operacao").style.color = "black";
        document.getElementById("margembottom").style.color = "white";
    }
    else{
        console.log('Modo Noturno Desativado');
        document.getElementById("view-color").innerHTML = "Night Mode";
        document.getElementById("view-color").onclick = function () { nightModeAndDayMode('night');};
        document.body.style.backgroundColor = "white";
        document.getElementById("calculator-body").style.borderColor = "black";
        document.getElementById("operacao").style.color = "white";
        document.getElementById("margembottom").style.color = "black";
    }
}

function limpar(){
        document.getElementById('n1').innerHTML = "";
        document.getElementById('op').innerHTML = "";
        document.getElementById('n2').innerHTML = "";
        document.getElementById('res').innerHTML = "";
        document.getElementById("um").onclick = function () { displayValue1('1');};
        document.getElementById("dois").onclick = function () { displayValue1('2');};
        document.getElementById("tres").onclick = function () { displayValue1('3');};
        document.getElementById("quatro").onclick = function () { displayValue1('4');};
        document.getElementById("cinco").onclick = function () { displayValue1('5');};
        document.getElementById("seis").onclick = function () { displayValue1('6');};
        document.getElementById("sete").onclick = function () { displayValue1('7');};
        document.getElementById("oito").onclick = function () { displayValue1('8');};
        document.getElementById("nove").onclick = function () { displayValue1('9');};
        document.getElementById("zero").onclick = function () { displayValue1('0');};
        console.log('Limpo');
}

function changeColorList(){
    var definedColor = document.getElementById("listColor").value;
    if(definedColor == "Selecione"){
        document.getElementById("calculator-body").style.background = "#CCCCCC"; }
    else{
        document.getElementById("calculator-body").style.background = definedColor;
    }
}