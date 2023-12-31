function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (ChuteForInvalido(numero)){
        elementoChute.innerHTML+= '<div> Valor Invalido</div>'
    }
    if(ChuteForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML+= `
        <div> 
        valor invalido, tente falar numero dentro dos paramentros
        </div>`
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!!! </h2>
        <h3> O número secreto é ${numeroSecreto}
        <button id="jogar-novamente" class="btn-jogar" >Jogar novamente </button>
        `
    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> 
        `
    }

    else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> 
        `
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

function ChuteForInvalido (numero){
    return Number.isNaN(numero)
}

function ChuteForMaiorOuMenorQueOValorPermitido (numero){
    return numero > maiorValor || numero < menorValor
}