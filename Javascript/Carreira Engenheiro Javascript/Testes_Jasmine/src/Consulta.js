function Consulta (paciente, procedimentos, particular, retorno, data) {
    var clazz = {
        preco : () => {
            if (retorno) return 0;

            let precoFinal = 0;
            procedimentos.forEach(procedimento => {
                if("raio-x" == procedimento) precoFinal += 55;
                else if("gesso" == procedimento) precoFinal += 32;
                else precoFinal += 25
            });

            if(particular) precoFinal *= 2;

            return precoFinal;
        },
        getNome : () => paciente,
        getProcedimentos : () => procedimentos,
        isParticular : () => particular,
        isRetorno : () => retorno,
        getData : () => data     
    }

    return clazz;
}