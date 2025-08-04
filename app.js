'use strict'

const botaoTrocarImagem = document.getElementById('trocar-img')

function trocarImagem(){
    const imagem = `url(./img/${ document.getElementById('imagem').value}.jpg`
    console.log(imagem)
    document.documentElement.style.setProperty('--bg-img', imagem)

}

botaoTrocarImagem.addEventListener('click', trocarImagem)