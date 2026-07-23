document.addEventListener('DOMContentLoaded', () => {
    const dataInicial = new Date('2024-11-02T15:00:00');


    function calcularTempoJuntos() {
        const dataAtual = new Date();
        let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
        let meses = dataAtual.getMonth() - dataInicial.getMonth();
        let dias = dataAtual.getDate() - dataInicial.getDate();

        if (dias < 0) {
            meses--;
            dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        }
        if (meses < 0) {
            anos--;
            meses += 12;
        }

        const horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();

        const contador = document.getElementById('contador');
        if (contador) {
            contador.innerHTML = `
                ${anos > 0 ? `<div>${anos} <br> <small>Anos</small></div>` : ''}
                <div>${meses} <br> <small>Meses</small></div>
                <div>${dias} <br> <small>Dias</small></div>
                <div>${horas} <br> <small>Horas</small></div>
                <div>${minutos} <br> <small>Minutos</small></div>
            `
        }
    }

    calcularTempoJuntos();
    setInterval(calcularTempoJuntos, 60000);
});