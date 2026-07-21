function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horaAtual = data.getHours()
    msg.innerHTML = `Agora são ${horaAtual} horas`
    if (horaAtual >= 0 && horaAtual < 12) {
        // BOM DIA!
        img.src = 'imagens/manhafinal.png'
        document.body.style.background = '#9B6F31'
    } else if (horaAtual >= 12 && horaAtual < 18) {
        // BOA TARDE!
        img.src = 'imagens/tardefinal.png'
        document.body.style.background = '#DC364E'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noitefinal.png'
        document.body.style.background = '#121332'
    }
}