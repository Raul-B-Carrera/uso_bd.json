export function calculo_imc(altura, peso,) {
    const imc = peso / (altura * altura);
    return imc;
}


export function classificacao(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade Grau I";
    } else if (imc < 40) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III (Mórbida)";
    }
}