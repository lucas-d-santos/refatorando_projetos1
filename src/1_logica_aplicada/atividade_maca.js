// As maçãs custam R$0,30 cada se forem compradas menos do que 12, e R$0,25
// se forem compradas 12 ou mais. Escreva um programa que leia o número de maçãs compradas,
// calcule e escreva o valor total da compra.
// siga boilerplate (modelo) para realizar o exercicio
// a funçao precoMaca irá receber um argumento (quantidade)

function functionPreco(quantidade) {
const varejo = 0.30
const atacado = 0.25
const calculoPreco = quantidade*varejo
const calculoDesconto = quantidade*atacado
     if (quantidade >=12)
     {
        console.log(calculoDesconto)
        return calculoDesconto
     }
     else {
        console.log(calculoPreco)
        return calculoPreco
     }
}
functionpreco(14)
module.exports = functionPreco;
