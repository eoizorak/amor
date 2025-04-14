document.addEventListener('DOMContentLoaded', () => {
    const titulo = "O grande amor";
    const textosParte1 = [
        "Em um reino muito distante, havia uma história de amor que transcendeu o tempo e o espaço...",
        "Matheus e Natalia se conheceram em um dia comum, mas algo extraordinário aconteceu.",
        "Eles descobriram que suas almas estavam conectadas de uma forma que ninguém poderia explicar.",
        "E assim começou a jornada de um amor que superaria qualquer obstáculo."
    ];

    const textosParte2 = [
        "Mal saberia eles, que uma simples mensagem poderia mudar seu destino para sempre.",
        "Juntos fizeram tantas coisas simples, conversaram, jogaram, sairam, passearam.",
        "Natalia fez Matheus, conhecer o que nunca havia conhecido, fez coisas que nunca havia feito.",
        "Matheus conheceu a praia, fez piquenique, fez limpeza de pele, tantas coisas. junto a ela",
        "Natalia provou para Matheus o que é o amor de verdade.",
    ];

    const container = document.getElementById('historia');
    let indexTexto = 0;
    let indexLetra = 0;

    const musica = document.getElementById('musica');
    musica.volume = 0.2;

    function exibirTitulo() {
        container.innerHTML = `<h1 style="font-size: 50px; text-align: center; margin-bottom: 50px;">${titulo}</h1>`;
        setTimeout(removerTitulo, 3000);
    }

    function removerTitulo() {
        container.innerHTML = "";
        setTimeout(() => digitarTexto(textosParte1, iniciarSegundaParte), 500);
    }


    function digitarTexto(textos, callback) {
        if (indexTexto < textos.length) {
            const textoAtual = textos[indexTexto];
            if (indexLetra < textoAtual.length) {
                container.innerHTML += textoAtual.charAt(indexLetra);
                indexLetra++;
                setTimeout(() => digitarTexto(textos, callback), 150); 
            } else {
                indexTexto++; 
                indexLetra = 0;
                container.innerHTML += "<br><br>";
                setTimeout(() => digitarTexto(textos, callback), 1000); 
            }
        } else if (callback) {
            setTimeout(callback, 2000); 
        }
    }

    function iniciarSegundaParte() {
        container.innerHTML = "";
        indexTexto = 0;
        indexLetra = 0;
        digitarTexto(textosParte2, finalizarHistoria);
    }


    function finalizarHistoria() {
        container.innerHTML += "<h2 style='text-align: center; margin-top: 50px;'> Matheus e Natalia então, estarão sempre juntos um ao outro. amando um ao outro, sempre.</h2>";
    }

    exibirTitulo();

    function finalizarHistoria() {
        container.innerHTML += "<h2 style='text-align: center; margin-top: 50px;'>E assim começou a história de um grande amor, que será eterno.</h2>";
        setTimeout(() => {
            window.location.href = "album.html";
        }, 9000);
    }
});