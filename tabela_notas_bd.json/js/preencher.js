
async function preencher_tabela(linhas){
    // método para realizar requisições
    let promise = await fetch('./js/bd.json')
    let alunos = await promise.json()
    console.log(alunos)
    
    for (let i = 0; i < linhas.length; i++){
        let filhos = linhas[i].children
    
        filhos = Array.from(filhos)
    
        filhos[0].textContent = alunos[i].nome
        filhos[1].textContent = alunos[i].nota_1
        filhos[2].textContent = alunos[i].nota_2
        filhos[3].textContent = alunos[i].nota_3
    }

    return linhas
}

export {preencher_tabela}