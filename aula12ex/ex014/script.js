function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horaAtual = new Date().getHours()
    msg.innerHTML = `Agora são ${horaAtual} horas`
}