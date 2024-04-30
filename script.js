var vinhos = [];
function adicionarVinho() {
    var nome = prompt("Nome do vinho:");
    var tipo = prompt("Tipo do vinho:");
    var safra = prompt("Safra do vinho:");
    var preco = parseFloat(prompt("Preço do vinho (em R$):"));

    var vinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        preco: preco
    };

    vinhos.push(vinho);
    alert("Vinho adicionado com sucesso!");
}
function listarVinhos() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    resultado.innerHTML = vinhos.length === 0 ? "Nenhum vinho adicionado ainda." : criarListaVinhos();
}
function criarListaVinhos() {
    return "<h2>Lista de Vinhos:</h2><ul>" + vinhos.map(criarItemVinho).join('') + "</ul>";
}
function criarItemVinho(vinho) {
    return "<li><strong>Nome:</strong> " + vinho.nome + "<br>" +
           "<strong>Tipo:</strong> " + vinho.tipo + "<br>" +
           "<strong>Safra:</strong> " + vinho.safra + "<br>" +
           "<strong>Preço:</strong> R$ " + vinho.preco.toFixed(2) + "</li><br>";
}
function convidados(){
    var quantidade = prompt("Quantidade de convidados:");
    var dose = prompt("Quantidade de dose por pessoa (em ml)")
    var necessario = quantidade * (dose/1000)
    alert(`A quantidade de vinho que você precisa é de ${necessario}L`)

    var garrafa1 = 1.5;
    var garrafa2 = 0.75;
    var precoGarrafa1 = 80;
    var precoGarrafa2 = 40;
    var totalVinho = 0;
    var garrafasSelecionadas = [];
    var precoTotalGarrafa1 = 0;
    var precoTotalGarrafa2 = 0;

    while (totalVinho < necessario){
        var escolha = Number(prompt('Escolha o tipo de garrafa:\n1 - GARRAFA DE 1,5L\n2 - GARRAFA DE 0,750 L'));
        if (escolha === 1) {
            totalVinho += garrafa1;
            garrafasSelecionadas.push("GARRAFA DE 1,5L");
            precoTotalGarrafa1 += precoGarrafa1;
        } else if (escolha === 2) {
            totalVinho += garrafa2;
            garrafasSelecionadas.push("GARRAFA DE 0,750 L");
            precoTotalGarrafa2 += precoGarrafa2;
        } else {
            alert("Opção inválida. Escolha novamente.");
        }
        if (totalVinho < necessario) {
            alert(`A quantidade de vinho que você ainda precisa é de ${necessario - totalVinho}L`);
        }
    }

    alert(`Você atingiu a quantidade necessária de vinho: ${totalVinho}L`);

    // Exibindo na página HTML
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Quantidade de vinho necessária: ${necessario}L</p>
        <p>Garrafas selecionadas:</p>
        <ul>
            ${garrafasSelecionadas.map(garrafa => `<li>${garrafa}</li>`).join('')}
        </ul>
        <p>Total de vinho selecionado: ${totalVinho}L</p>
        <p>Preço total da compra:</p>
        <ul>
            <li>GARRAFA DE 1,5L: R$ ${precoTotalGarrafa1.toFixed(2)}</li>
            <li>GARRAFA DE 0,750 L: R$ ${precoTotalGarrafa2.toFixed(2)}</li>
        </ul>
    `;
}
