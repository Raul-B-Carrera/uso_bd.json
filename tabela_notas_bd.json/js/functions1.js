export function verifica_aprovacao(mediaValor) {
    if (mediaValor < 4) {
        return 'Reprovado';
    } else if (mediaValor < 5) {
        return 'Em recuperação';
    } else {
        return 'Aprovado';
    }
}

export function calculo_media(nota_1, nota_2, nota_3) {
    let somaNotas = nota_1 + nota_2 + nota_3;

    return somaNotas / 3;
}