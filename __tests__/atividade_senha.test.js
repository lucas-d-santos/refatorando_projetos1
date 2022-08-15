const functionSenha = require("../src/1_logica_aplicada/atividade_senha");
describe("password should be correct", () => {
  it("should be correct", () => {
    expect(functionSenha(1234)).toBe("ACESSO PERMITIDO");
  });
  it("should be wrong", () => {
    const password = jest.fn();
    password.mockReturnValue(1235);

    expect(functionSenha(password)).toBe("ACESSO NEGADO");
  });
});
