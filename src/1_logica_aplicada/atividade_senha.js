// Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
// A senha válida é o número 1234.
// Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO caso a senha seja válida.
// - ACESSO NEGADO caso a senha seja inválida

// siga boilerplate (modelo) para realizar o exercicio
// a funçao validaSenha irá receber um argumento (senha)
const permitido = "ACESSO PERMITIDO";
const negado = "ACESSO NEGADO";

function validaSenha(senha) {  

if (senha == 1234) {
  return permitido
} else {
return negado
}

}

validaSenha(12356)

module.exports = validaSenha;