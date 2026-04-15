async function preencher_tabela(linhas) {
    let promise = await fetch('./js/bd.json')
    let pessoas = await promise.json()
    console.log(pessoas)

    for (let i = 0; i < linhas.length; i++){
        let filhos = linhas[i].children
    
        filhos = Array.from(filhos)
    
        filhos[0].textContent = pessoas[i].nome
        filhos[1].textContent = pessoas[i].idade
        filhos[2].textContent = pessoas[i].altura
        filhos[3].textContent = pessoas[i].peso
    }

    return linhas
}

export {preencher_tabela}