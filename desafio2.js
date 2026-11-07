// calculo do saldo de vitórias e determina o nível do Herói
function calcularRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estruturas de decisão para definir o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Meu Herói
let nomeHeroi = "Charizard";

// histórico de partidas
// vitórias e as derrotas acumuladas para atingir o total desejado
let partidasJogadas = [
    { vitoriasParciais: 45, derrotasParciais: 2 },
    { vitoriasParciais: 40, derrotasParciais: 2 }
];

let totalVitorias = 0;
let totalDerrotas = 0;

for (let i = 0; i < partidasJogadas.length; i++) {
    totalVitorias += partidasJogadas[i].vitoriasParciais;
    totalDerrotas += partidasJogadas[i].derrotasParciais;
}

// função com o total
let resultado = calcularRankeadas(totalVitorias, totalDerrotas);

//  mensagem final do desafio
console.log(`O Herói ${nomeHeroi} tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);