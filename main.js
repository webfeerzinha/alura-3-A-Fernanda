const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// troca de abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// 📅 SUAS DATAS DE OBJETIVOS
const tempoObjetivo1 = new Date("2030-12-31T23:59:59"); // Me formar em Terapia Ocupacional
const tempoObjetivo2 = new Date("2033-12-31T23:59:59"); // Ser bem-sucedida
const tempoObjetivo3 = new Date("2027-12-31T23:59:59"); // Ter meus bens
const tempoObjetivo4 = new Date("2035-12-31T23:59:59"); // Ter família

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

function calculaTempo(tempoObjetivo) {
    let agora = new Date();
    let diferenca = tempoObjetivo - agora;

    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return diferenca > 0 ? [dias, horas, minutos, segundos] : [0, 0, 0, 0];
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        let tempo = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();