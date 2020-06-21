describe("Consulta", () => {

    let guilherme;

    beforeEach(() => {
        guilherme = new PacienteBuilder().constroi();
    });

    describe("Testes de retorno", () => {

        it("não deve cobrar nada se for um retorno", () =>{
            let consulta = new Consulta(guilherme, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });

    });

    describe("Testes com procedimento", () => {

        it("deve cobrar 25 por cada procedimento comum", () => {
            let consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preço especifico dependendo do procedimento", () => {
            let consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });

        it("deve cobrar o dobro por cada consulta particular", () => {
            let consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);
        });

    });
});