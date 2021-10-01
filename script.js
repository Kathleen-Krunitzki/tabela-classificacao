var kathleen = { nome: "Kathleen", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var douglas = { nome: "Douglas", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var karen = { nome: "Karen", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var andreo = { nome: "Andreo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var rodrigo = { nome: "Rodrigo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

kathleen.pontos = calculaPontos(kathleen);
douglas.pontos = calculaPontos(douglas);
karen.pontos = calculaPontos(karen);
andreo.pontos = calculaPontos(andreo);
rodrigo.pontos = calculaPontos(rodrigo);

var jogadores = [kathleen, douglas, karen, andreo, rodrigo];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}