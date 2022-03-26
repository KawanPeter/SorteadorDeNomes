const btnSortear        = document.querySelector(".botaoSortear")
const textarea          = document.querySelector("textarea")
const tagResultado      = document.querySelector(".resultado p")
const popUpResultado    = document.querySelector(".resultado")
const btnFechar         = document.querySelector(".fechar")

function pegarDadosFormulario(){
    
    //recuperando o valor do campo textarea
    const valorCampo    = textarea.value
    const arrayNomes    = valorCampo.split(",")
    const tamanhoArray  = arrayNomes.length
    const posicaoNome   = gerarNumeroAleatorio(tamanhoArray -1)
    const nome          = arrayNomes[posicaoNome]
    mostrarResultado(nome)
    
    textarea.value = ""

}

btnSortear.addEventListener("click", pegarDadosFormulario)

//função para ferar o numero aleatório
function gerarNumeroAleatorio(tamanhoArray){
    //retorna o numero
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0);

}

function mostrarResultado(nome){
    
    tagResultado.innerText = `resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")

}

function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")

}
btnFechar.addEventListener("click", fecharPopUp)


