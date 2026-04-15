export function atualizar_tabela(linhas, calculo_imc, classificacao) {
    for (let i = 0; i < linhas.length; i++) {

        let tr = linhas[i];
        let linha = tr.children;

        let nome = linha[0].textContent
        let idade = parseInt(linha[1].textContent)
        let altura = parseFloat(linha[2].textContent);
        let peso = parseFloat(linha[3].textContent);

        let imc = calculo_imc(altura, peso);
        linha[4].textContent = imc.toFixed(1);

        let classificacao_valor = classificacao(imc);
        linha[5].textContent = classificacao_valor;
    }
}


export function colorir_status(linhas) {
    for (let i = 0; i < linhas.length; i++) {
        let tr = linhas[i];
        let status = tr.children[5].textContent;

        tr.classList.remove('peso_perigoso', 'peso_normal', 'peso_outros');

        if (status === "Abaixo do peso" || status === "Obesidade Grau III (Mórbida)") {
            tr.classList.add('peso_perigoso');
        } else if (status === "Peso normal") {
            tr.classList.add('peso_normal');
        } else {
            tr.classList.add('peso_outros');
        }
    }
}