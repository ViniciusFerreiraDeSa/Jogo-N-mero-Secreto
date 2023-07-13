function verificaChuteValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +=`<div>Valor Inválido</div>`
        return
    }
    if(numeroForMaiorOuMenorDoValor(numero)){
        elementoChute.innerHTML +=`<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.style.backgroundImage = "url('https://nerdhits.com.br/wp-content/uploads/2022/04/anya-spy-x-family-1.jpg')";
        document.body.style.color = "var(--cor-texto-anya)"
        document.body.innerHTML = `
        <h2>Você Acertou Parabéns!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
        `
    }

    
}

function chuteForInvalido(numero){
    return Number.isNaN(numero) 
}

function numeroForMaiorOuMenorDoValor(numero){
    return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})