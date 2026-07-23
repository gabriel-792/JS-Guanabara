function carregar() {
    var msg = document.getElementById('msg')
    //var hora = new Date().getHours()
    var hora = 19
    var img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhafinal.png'
        document.body.style.background = '#AC7F28'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tardefinal.png'
        document.body.style.background = '#BB3326'
    } else {
        img.src = 'imagens/noitefinal.png'
        document.body.style.background = '#090C2B'
    }
}