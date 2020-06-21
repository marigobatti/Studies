describe("Agendamento", () => {

    var gui;
    var agenda;

    beforeEach(() => {

        gui = new PacienteBuilder().constroi();
        agenda = new Agendamento();
    });

    it("deve agendar para 20 dias depois", () => {

        let consulta = new Consulta(gui, [], false, false, new Date(2014,7,1));
        let novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData()).toEqual(new Date(2014,7,21));
    });

    it("deve pular fins de semana", () => {

        let consulta = new Consulta(gui, [], false, false, new Date(2014,5,30));
        let novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData()).toEqual(new Date(2014,6,21));
    });

});