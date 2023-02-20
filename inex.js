let placarJogador = document.getElementById(`jogador`)
let placarNumberJog = 0
let placarComputador = document.getElementById(`computador`)
let placarNumberComp = 0
let resultado = document.getElementById(`resultado`)
let sorteado = 0
let computador = ``

function jogar (opcao) {
    //empates
    if (opcao === `pedra` && computador === `Pedra`) {
        resultado.style.backgroundImage=`url('./imagens/pedra.png')`
        resultado.innerText = `Computador era: ${computador} \n Empate`
        return
    }
    if (opcao === `papel` && computador === `Papel`) {
        resultado.style.backgroundImage=`url('./imagens/papel.svg')`
        resultado.innerText = `Computador era: ${computador} \n Empate`
        return
    }
    if (opcao === `tesoura` && computador === `Tesoura`) {
        resultado.style.backgroundImage=`url('./imagens/empate-tesoura.png')`
        resultado.innerText = `Computador era: ${computador} \n Empate`
        return
    }
    //ganhadores
    if (opcao === `pedra` && computador === `Papel` || opcao === `papel` && computador === `Pedra`) {
        if (opcao === `pedra`) {
            resultado.style.backgroundImage=`url('./imagens/pedra.png')`
            resultado.innerText = `Computador era: ${computador} \n Vitória do Papel`
            placarNumberComp++
            placarComputador.innerText = `Computador: ${placarNumberComp} Pontos`
            return
        } else {
            resultado.style.backgroundImage=`url('./imagens/papel.svg')`
            resultado.innerText = `Computador era: ${computador} \n Vitória do Papel`
            placarNumberJog++
            placarJogador.innerText = `Computador: ${placarNumberJog} Pontos`
        }
        return
    }
    if(opcao === `pedra` && computador === `Tesoura` || opcao === `tesoura` && computador === `Pedra`) {
        if (opcao === `pedra`) {
            resultado.style.backgroundImage=`url('./imagens/pedra.png')`
            resultado.innerText = `Computador era: ${computador} \n Vitória da Pedra`
            placarNumberJog++
            placarJogador.innerText=`Jogador: ${placarNumberJog} Pontos`
            return
        } else {
            resultado.style.backgroundImage=`url('./imagens/pedra.png')`
            resultado.innerText = `Computador era: ${computador} \n Vitória da Pedra`
            placarNumberComp++
            placarComputador.innerText = ` Computador: ${placarNumberComp} Pontos`
            console.log(`else tesoura papel`)
            return
        }
    }
    if (opcao === `tesoura` && computador === `Papel` || opcao === `papel` && computador === `Tesoura`) {
        if (opcao === `tesoura`) {
            resultado.style.backgroundImage=`url('./imagens/tesoura.svg')`
            resultado.innerText = `Computador era: ${computador} \n Vitória do Tesoura`
            placarNumberJog++
            placarJogador.innerText=`Jogador: ${placarNumberJog} Pontos`
            return
        }
    } else {
        resultado.style.backgroundImage=`url(./imagens/tesoura.svg)`
        resultado.innerText = `Computador era: ${computador} \n Vitória do Tesoura`
        placarNumberComp++
        placarComputador.innerText = `Computador: ${placarNumberComp} Pontos`
        placarComputador.innerText = `Computador: ${placarNumberComp} Pontos`
        console.log(`else tesoura papel`)
        return
    }
}

function sorteio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    sorteado =  Math.floor(Math.random() * (max - min) + min)
    if (sorteado <= 300) {
        computador = `Pedra`
    } else if ( sorteado > 300 && sorteado <= 600) {
        computador = `Papel`
    } else {
        computador = `Tesoura`
    }
    console.log(computador)
}
