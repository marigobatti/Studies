function Paciente(nome, idade, peso, altura) {
    var clazz = {
        imprime : () => alert(`${nome} tem ${idade} anos`),
        batimentos : () => idade * 365 * 24 * 60 * 80,
        imc : () => peso / (altura * altura)
    }

    return clazz;
}