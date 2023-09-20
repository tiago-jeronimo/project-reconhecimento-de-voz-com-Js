function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (ChuteForInvalido(numero)){
        console.log('Valor Invalido');
    }
    if(ChuteForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log('valor invalido, tente falar numero dentro dos paramentros');
    }
}


function ChuteForInvalido (numero){
    return Number.isNaN(numero)
}

function ChuteForMaiorOuMenorQueOValorPermitido (numero){
    return numero > maiorValor || numero < menorValor
}