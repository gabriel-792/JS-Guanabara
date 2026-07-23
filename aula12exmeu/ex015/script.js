function verificar() {
    var anoAtual = new Date().getFullYear()
    var ano = document.getElementById('txtano')
    if (ano.value.length == 0 || ano.value > anoAtual) {
        window.alert('Verifique os dados e tente novamente')
    }
    ano = ano.value
    var idade = anoAtual - ano
    var sexo = document.getElementsByName('radsex')
    var res = document.getElementById('res')
    var genero = ''
    var img = document.createElement('img')

    if (sexo[0].checked) {
        genero = 'Homem'
        // Homem
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'imagens/criança-masculino-final.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'imagens/jovem-masculino-final.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-masculino-final.png')
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/idoso-masculino-final.png')
        }
    } else {
        genero = 'Mulher'
        // Mulher
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'imagens/criança-feminino-final.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'imagens/jovem-feminino-final.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'imagens/adulto-feminino-final.png')
        } else {
            // Idoso
            img.setAttribute('src', 'imagens/idoso-feminino-final.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}