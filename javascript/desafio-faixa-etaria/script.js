/*var idade = parseInt(prompt('Digite sua idade: '));

console.log(idade);

if (idade >= 0 && idade < 15) {
    document.write('Você possui ' + idade + ' anos e é uma Criança');
} else if (idade >= 15 && idade < 30) {
    document.write('Você possui ' + idade + ' anos e é um Jovem');
} else if (idade >= 30 && idade < 60) {
    document.write('Você possui ' + idade + ' anos e é um Adulto');
} else if (idade >= 60) {
    document.write('Você possui ' + idade + ' anos e é um Idoso');
} else {
    alert('Digite um valor válido');
};*/

function faixaEtaria(idade) {
    var idade = Number(prompt('Digite sua idade: '));
    idade = parseInt(idade);
    if (!idade) {
        alert('Algo deu errado!')
        faixaEtaria();
    } else {
        if (idade >= 0 && idade < 15) {
            document.write('Você possui ' + idade + ' anos e é uma Criança <br/>');
        } else if (idade >= 15 && idade < 30) {
            document.write('Você possui ' + idade + ' anos e é um Jovem <br/>');
        } else if (idade >= 30 && idade < 60) {
            document.write('Você possui ' + idade + ' anos e é um Adulto <br/>');
        } else if (idade >= 60 && idade < 130) {
            document.write('Você possui ' + idade + ' anos e é um Idoso <br/>');
        } else if (idade >= 130) {
            document.write('Você possui ' + idade + ' anos e é provavel que esteja morto!!! kk <br/>');
        }
        novaOperacao();
        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                faixaEtaria();
            } else if (opcao == 2) {
                alert('Até mais!');
            } else {
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        }
    }
}
faixaEtaria();