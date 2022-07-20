var num1 = parseFloat(prompt('Digite o valor do num1: ')); 
console.log(num1);

var opcao = prompt('Digite se quer fazer soma ou subtração: ');
//opcao = opcao.toString();
console.log(opcao);

var num2 = parseFloat(prompt('Digite o valor do num2: ')); 
console.log(num2);

function calculo(num1, num2, opcao) {
    var resultado = 0;
    if(opcao == 'soma') {
        resultado = num1 + num2;
    } else if(opcao == 'subtração') {
        resultado = num1 - num2;
    } else {
        alert('Algo deu errado!!');
    }
    return resultado;
}

document.write('O resultado é: ' + calculo(num1, num2, opcao));