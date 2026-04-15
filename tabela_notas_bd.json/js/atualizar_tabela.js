export function atualizar_tabela(linhas, calculo_media, verifica_aprovacao) {
    for (let i = 0; i < linhas.length; i++) {
        let filho = linhas[i].children

        let nota1 = Number(filho[1].textContent)
        let nota2 = Number(filho[2].textContent)
        let nota3 = Number(filho[3].textContent)

        let statusNota = filho[5]

        let mediaValor = calculo_media(nota1, nota2, nota3)
        let media = filho[4]
        media.textContent = mediaValor.toFixed(2)
        statusNota.textContent = verifica_aprovacao(mediaValor);
    }
    return linhas
}

export function colorir_status(linhas) {
    for (let i = 0; i < linhas.length; i++) {
        let statusNota = linhas[i].children[5];

        if (statusNota.textContent == "Reprovado") {
            statusNota.style.color = '#801515';
            statusNota.style.fontWeight = 'bold';
        }
        else if (statusNota.textContent == "Em recuperação") {
            statusNota.style.fontSize = '15px';
            statusNota.style.backgroundColor = '#43434e';
        }
        else if (statusNota.textContent == "Aprovado") {
            statusNota.style.borderColor = "#2CB40F"
        }
    }
}