var largura = prompt('Digite a largura: ');
var comprimento = prompt('Digite o comprimento: ');
var area = calculaAreaTerreno(largura, comprimento);
document.write('O terreno possui ' + area + ' metros quadrados!!');

function calculaAreaTerreno(largura, comprimento) {
    //lógica
    // var largura = prompt('Digite a largura: ');
    // var comprimento = prompt('Digite o comprimento: ');
    var area = largura * comprimento;
    return area;
}
//document.write(calculaAreaTerreno());