var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function recuperaValorInput() {
    var objetosAdd = objetos;
    var recuperaValor = document.getElementById('valorInp').value;
    var auxiliar = objetosAdd.indexOf(recuperaValor);

    if(recuperaValor === '') {
        alert('Informe um valor válido!');
    } else {
        if(auxiliar === -1) { //Verifica se o valor informado já existe dentro do Array objetos.
            alert('Elemento não está inserido');
            objetosAdd.push(recuperaValor);
            alert('Elemento foi inserido neste momento!!')
            console.log(objetosAdd);
            document.getElementById('valorInp').value = '';
        } else {
            alert('Elemento já está inserido');
            document.getElementById('valorInp').value = '';
        }
    }

    console.log(objetos)
}

function ordenaArray() {
    alert(objetos.sort());
    console.log(objetos);
}