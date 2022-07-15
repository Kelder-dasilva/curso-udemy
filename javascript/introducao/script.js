//string 
// var texto = 'Curso de JavaScript';

// //number
// var numeroInteiro = -7;
// var numeroFracionado = 11210.75;

// //boolean
// var teste = false //true -> verdadeiro / false -> falso

//alert(numeroFracionado) //abrir um dialog
//document.write(texto);

// var nome = prompt('Digite seu nome: ');
// var idade = prompt('Digite sua idade: ');
// var cpf = prompt('Digite seu CPF: ');

// document.write('Seu nome é ' + nome + ' e de acordo com o resultado sua idade é ' + idade + ' registrado com o seguinte CPF: ' + cpf);

var num1 = prompt('Digite valor de num1: ');
var num2 = prompt('Digite valor de num2: ');

num1 = parseInt(num1);
num2 = parseInt(num2);

document.write('A soma entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 + num2) + '<br>');
document.write('A subtração entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 - num2) + '<br>');
document.write('A multiplicação entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 * num2) + '<br>');
document.write('A divisão entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 / num2) + '<br>');
document.write('O módulo entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 % num2) + '<br>');
document.write('A potenciação entre ' + num1 + ' e ' + num2 + ' é igual a: ' + (num1 ** num2) + '<br>');
document.write('O incremento do ' + num1 + ' é igual a: ' + (num1++) + '<br>');
document.write(num1 + '<br>');
document.write('O decremento do ' + num2 + ' é igual a: ' + (num2--) + '<br>');
document.write(num2 + '<br>');