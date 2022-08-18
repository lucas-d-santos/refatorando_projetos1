// As maçãs custam R$0,30 cada se forem compradas menos do que 12, e R$0,25
// se forem compradas 12 ou mais. Escreva um programa que leia o número de maçãs compradas,
// calcule e escreva o valor total da compra.
// siga boilerplate (modelo) para realizar o exercicio
// a funçao precoMaca irá receber um argumento (quantidade)


const varejo = 0.30;
const atacado = 0.25;

function precoMaca(quantidade) {

    if(quantidade >12) {
        const totalAtacado= quantidade*atacado;
        return    totalAtacado 
            
        } else {
            const totalVarejo = quantidade*varejo;
            return    totalVarejo       
        }
}
precoMaca(12)

module.exports = precoMaca;
