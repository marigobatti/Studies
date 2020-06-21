function PacienteBuilder() {
    let nome = "Guilherme";
    let idade = 28;
    let peso = 72;
    let altura = 1.80;

    let clazz = {
        constroi : () => Paciente(nome, idade, peso, altura),
        comIdade : function(valor) { idade = valor; return this; },
        comPeso : function(valor) { peso = valor; return this; }
    };

    return clazz;
}